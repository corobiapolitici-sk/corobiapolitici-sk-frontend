// Load angular modules.
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import {
	MatButtonModule,
	MatCheckboxModule,
	MatIconModule,
	MatSidenavModule,
	MatToolbarModule,
} from '@angular/material'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'

// Load npm modules.
// import {
	// ApolloModule,
	// APOLLO_OPTIONS,
// } from 'apollo-angular'
import {
	// HttpLink,
	HttpLinkModule,
} from 'apollo-angular-link-http'
// import { InMemoryCache } from 'apollo-cache-inmemory'
import { NgxEchartsModule } from 'ngx-echarts'

// Load local modules.
import { AppComponent } from './app.component'
import { AppBarComponent } from './atoms/app-bar/app-bar.component'
import { ButtonComponent } from './atoms/button/button.component'
import { CardComponent } from './atoms/card/card.component'
import { ChartComponent } from './atoms/chart/chart.component'
import { HeadingComponent } from './atoms/heading/heading.component'
import { LoadingErrorIndicatorComponent } from './atoms/loading-error-indicator/loading-error-indicator.component'
import { LogoComponent } from './atoms/logo/logo.component'
import { SectionGrayComponent } from './atoms/section-gray/section-gray.component'
import { SectionTurquoiseComponent } from './atoms/section-turquoise/section-turquoise.component'
import { SelectComponent } from './atoms/select/select.component'
import { TextComponent } from './atoms/text/text.component'
import { CardWithIconComponent } from './molecules/card-with-icon/card-with-icon.component'
import { Statistics1Component } from './molecules/statistics1/statistics1.component'
import { Statistics2Component } from './molecules/statistics2/statistics2.component'
import { Statistics3Component } from './molecules/statistics3/statistics3.component'
import { HeaderComponent } from './organisms/header/header.component'
import { NavLinksComponent } from './organisms/nav-links/nav-links.component'
// import { PoliticianListItemComponent } from './organisms/politician-list-item/politician-list-item.component'
// import { ClubComponent } from './pages/club/club.component'
// import { ClubsComponent } from './pages/clubs/clubs.component'
// import { ContactComponent } from './pages/contact/contact.component'
import { HomeComponent } from './pages/home/home.component'
// import { InfoComponent } from './pages/info/info.component'
// import { PoliticianComponent } from './pages/politician/politician.component'
// import { PoliticiansComponent } from './pages/politicians/politicians.component'

@NgModule({
	declarations: [
		AppComponent,
		// Atoms.
		AppBarComponent,
		ButtonComponent,
		CardComponent,
		ChartComponent,
		HeadingComponent,
		LoadingErrorIndicatorComponent,
		LogoComponent,
		SectionGrayComponent,
		SectionTurquoiseComponent,
		SelectComponent,
		TextComponent,
		// Molecules.
		CardWithIconComponent,
		Statistics1Component,
		Statistics2Component,
		Statistics3Component,
		// Organisms.
		HeaderComponent,
		NavLinksComponent,
		// PoliticiansComponent,
		// ClubComponent,
		// ClubsComponent,
		// InfoComponent,
		// ContactComponent,
		HomeComponent,
		// PoliticianComponent,
		// PoliticiansComponent,
		// PoliticianListItemComponent,
	],
	imports: [
		BrowserModule,
		MatButtonModule,
		MatCheckboxModule,
		MatToolbarModule,
		MatIconModule,
		MatSidenavModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		NgxEchartsModule,
		HttpClientModule,
		// ApolloModule,
		HttpLinkModule,
		BrowserAnimationsModule,
		RouterModule.forRoot([
			{ path: '', component: HomeComponent },
			// { path: 'politicians', component: PoliticiansComponent },
			// { path: 'politicians/:id', component: PoliticianComponent },
			// { path: 'clubs', component: ClubsComponent },
			// { path: 'clubs/:index', component: ClubComponent },
			// { path: 'info', component: InfoComponent },
			// { path: 'contact', component: ContactComponent },
		]),
	],
	// providers: [{
	// 	provide: APOLLO_OPTIONS,
	// 	useFactory(httpLink: HttpLink) {
	// 	return {
	// 		cache: new InMemoryCache(),
	// 		link: httpLink.create({
	// 		uri: 'http://localhost:3003/graphql' // TODO SETUP: uri: 'http://157.230.123.68:3003/graphql'
	// 		})
	// 	};
	// 	},
	// 	deps: [HttpLink],
	// }],
	bootstrap: [AppComponent],
})

export class AppModule {}
