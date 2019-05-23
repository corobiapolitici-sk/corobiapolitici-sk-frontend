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
import { politicianShortFragment } from 'src/app/fragments'
import { Politician } from 'src/app/model-interfaces'
import { handleFetchError } from 'src/app/utils'

@Component({
	selector: 'app-politicians',
	templateUrl: './politicians.component.html',
})
export class PoliticiansComponent implements OnInit {
	politicians$: Observable<Politician | {}> = null

	constructor(
		private apollo: Apollo,
		private snackBar: MatSnackBar,
	) {}

	ngOnInit() {
		this.politicians$ = this.apollo
			.watchQuery({
				query: gql`
				{
					Politician: Poslanec {
					...PoliticianShort
					}
				}
				${politicianShortFragment}
				`,
			})
			.valueChanges.pipe(
				map((result) => {
					return <Politician[]> result.data['Politician']
				}),
				catchError(() => {
					return handleFetchError(this.snackBar, {})
				}),
			)
	}
}
