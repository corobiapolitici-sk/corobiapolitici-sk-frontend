// Load angular modules.
import {
	Component,
	OnInit,
} from '@angular/core'
// import { MatSnackBar } from '@angular/material'

// Load npm modules.
// import { Apollo } from 'apollo-angular'
// import gql from 'graphql-tag'
// import { Observable } from 'rxjs'
// import {
// 	catchError,
// 	map,
// } from 'rxjs/operators'

// Load local modules.
import { Club } from '../../definitions/club'
import { Politician } from '../../definitions/politician'
import { ClubService } from '../../services/club/club.service'
import { PoliticianService } from '../../services/politician/politician.service'
// import { politicianShortFragment } from 'src/app/fragments'
// import { Politician } from 'src/app/model-interfaces'
// import { handleFetchError } from 'src/app/utils'

@Component({
	selector: 'app-politicians',
	templateUrl: './politicians.component.html',
})
export class PoliticiansComponent implements OnInit {
	// politicians$: Observable<Politician | {}> = null
	clubs: Club[]
	politicians: Politician[]

	constructor(
		// private apollo: Apollo,
		// private snackBar: MatSnackBar,
		private clubService: ClubService,
		private politicianService: PoliticianService,
	) {}

	ngOnInit() {
		this.getClubs()
		this.getPoliticians()
		// this.politicians$ = this.apollo
		// 	.watchQuery({
		// 		query: gql`
		// 		{
		// 			Politician: Poslanec {
		// 			...PoliticianShort
		// 			}
		// 		}
		// 		${politicianShortFragment}
		// 		`,
		// 	})
		// 	.valueChanges.pipe(
		// 		map((result) => {
		// 			return <Politician[]> result.data['Politician']
		// 		}),
		// 		catchError(() => {
		// 			return handleFetchError(this.snackBar, {})
		// 		}),
		// 	)
	}

	getClubs(): void {
		this.clubService.getAll().subscribe((clubs) => {
			this.clubs = clubs
		})
	}

	getPoliticians(): void {
		this.politicianService.getAll().subscribe((politicians) => {
			this.politicians = politicians
		})
	}
}
