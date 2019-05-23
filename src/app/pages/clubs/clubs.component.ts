// Load angular modules.
import {
	Component,
	OnInit,
} from '@angular/core'
import { MatSnackBar } from '@angular/material'

// Load npm modules.
import { Apollo } from 'apollo-angular'
import gql from 'graphql-tag'
import { Observable } from 'rxjs'
import {
	catchError,
	map,
} from 'rxjs/operators'

// Load local modules.
import { clubFragment } from 'src/app/fragments'
import { Club } from 'src/app/model-interfaces'
import { handleFetchError } from 'src/app/utils'


@Component({
	selector: 'app-clubs',
	templateUrl: './clubs.component.html',
})
export class ClubsComponent implements OnInit {
	clubs$: Observable<Club[]>

	constructor(
		private apollo: Apollo,
		private snackBar: MatSnackBar,
	) {}

	ngOnInit() {
		this.clubs$ = this.apollo
			.watchQuery({
				query: gql`
				{
					Club: Klub {
						...Klub
					}
				}
				${clubFragment}
				`,
			})
			.valueChanges.pipe(
				map((result) => {
					return <Club[]> result.data['Club']
				}),
				catchError(() => {
					return handleFetchError(this.snackBar, [])
				}),
			)
	}
}
