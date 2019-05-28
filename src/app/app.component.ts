// Load angular modules.
import {
	Component,
	OnInit,
} from '@angular/core'

// Load npm modules.
// import { Apollo } from 'apollo-angular'
// import gql from 'graphql-tag'

// TODO: Add the following to package.json
// Deps
// "apollo-angular": "^1.5.0",
// "apollo-angular-link-http": "^1.3.1",
// "apollo-cache-inmemory": "^1.3.2",
// "apollo-client": "^2.4.0",
// "apollo-link": "^1.2.0",
// "graphql": "^0.13.2",
// "graphql-tag": "^2.10.0",
// DevDeps
// "@types/graphql": "^14.2.0",

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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
