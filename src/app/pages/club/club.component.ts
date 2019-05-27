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
// import { clubFragment } from 'src/app/fragments'
// import { Club } from 'src/app/model-interfaces'
// import { handleFetchError } from 'src/app/utils'

// @Component({
// 	selector: 'app-club',
// 	templateUrl: './club.component.html',
// })
// export class ClubComponent implements OnInit {
// 	club$: Observable<Club | {}> = null

// 	constructor(
// 		private apollo: Apollo,
// 		private route: ActivatedRoute,
// 		private snackBar: MatSnackBar,
// 	) {}

// 	ngOnInit() {
// 		this.route.params.subscribe((params) => {
// 			this.club$ = this.apollo
// 				.watchQuery({
// 					query: gql`
// 					{
// 						Club: Klub {
// 							...Klub
// 						}
// 					}
// 					${clubFragment}
// 					`,
// 				})
// 				.valueChanges.pipe(
// 					map((result) => {
// 						return <Club> result.data['Club'][params['index']]
// 					}),
// 					catchError(() => {
// 						return handleFetchError(this.snackBar, {})
// 					}),
// 				)
// 		})
// 	}
// }
