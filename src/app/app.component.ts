// Load angular modules.
import {
	Component,
	OnInit,
} from '@angular/core'

// Load npm modules.
// import { Apollo } from 'apollo-angular'
// import gql from 'graphql-tag'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
	title = 'corobiapolitici'

	// constructor(
	// 	private apollo: Apollo
	// ) {}

	ngOnInit() {
	// 	this.apollo.watchQuery({
	// 		query: gql`
	// 		{
	// 			Poslanec {
	// 				id,
	// 				titul,
	// 				priezvisko,
	// 				email,
	// 				bydlisko,
	// 				fotografia,
	// 				kandidovalZa,
	// 				kraj,
	// 				url,
	// 				meno,
	// 				klub {
	// 				id,
	// 				pocetPoslancov
	// 				}
	// 			}
	// 		}
	// 		`,
	// 	})
	// 	.valueChanges.subscribe((result) => {
	// 		console.log(result)
	// 	})
	}
}
