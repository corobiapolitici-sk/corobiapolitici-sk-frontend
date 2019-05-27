// // Load angular modules.
// import {
// 	Component,
// 	OnInit,
// } from '@angular/core'
// import { MatSnackBar } from '@angular/material'
// import { ActivatedRoute } from '@angular/router'

// // Load npm modules.
// import { Apollo } from 'apollo-angular'
// import gql from 'graphql-tag'
// import { Observable } from 'rxjs'
// import {
// 	catchError,
// 	map,
// } from 'rxjs/operators'

// // Load local modules.
// import { politicianFragment } from 'src/app/fragments'
// import { Politician } from 'src/app/model-interfaces'
// import { handleFetchError } from 'src/app/utils'

// @Component({
// 	selector: 'app-politician',
// 	templateUrl: './politician.component.html',
// })
// export class PoliticianComponent implements OnInit {
// 	politician$: Observable<Politician>

// 	constructor(
// 		private apollo: Apollo,
// 		private route: ActivatedRoute,
// 		private snackBar: MatSnackBar,
// 	) {}

// 	ngOnInit() {
// 		this.route.params.subscribe((params) => {
// 			const politicianId = params['id']
// 			if (politicianId) {
// 				this.politician$ = this.apollo
// 					.watchQuery({
// 						query: gql`
// 						{
// 							Politician: Poslanec(id: ${politicianId}) {
// 							...PoliticianInfo
// 							}
// 						}
// 						${politicianFragment}`,
// 					})
// 					.valueChanges.pipe(
// 						map((data) => {
// 							return data['data']['Politician'][0]
// 						}),
// 						catchError(() => {
// 							return handleFetchError(this.snackBar, {})
// 						})
// 					)
// 			}
// 		})
// 	}
// }
