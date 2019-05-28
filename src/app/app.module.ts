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

// Load npm modules.
// import {
	// ApolloModule,
	// APOLLO_OPTIONS,
// } from 'apollo-angular'
// import {
	// HttpLink,
	// HttpLinkModule,
// } from 'apollo-angular-link-http'
// import { InMemoryCache } from 'apollo-cache-inmemory'
import { NgxEchartsModule } from 'ngx-echarts'

// Load angular support modules.
import { AppRoutingModule } from './app-routing.module'

// Load angular component modules.
import { AppComponent } from './app.component'

// Load angular atom component modules.
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

// Load angular molecule component modules.
import { CardWithIconComponent } from './molecules/card-with-icon/card-with-icon.component'
import { FooterComponent } from './molecules/footer/footer.component'
import { HeaderComponent } from './molecules/header/header.component'
// import { PoliticianListItemComponent } from './molecules/politician-list-item/politician-list-item.component'

// Load angular statistic component modules.
import { TimeSpeakClubStatisticComponent } from './statistics/time_speak_club/time_speak_club.component' // 3
import { TopTimeSpeakClubLawStatisticComponent } from './statistics/top_time_speak_club_law/top_time_speak_club_law.component' // 2
import { VoteClubLawStatisticComponent } from './statistics/vote_club_law/vote_club_law.component' // 1

// Load angular page component modules.
// import { ClubComponent } from './pages/club/club.component'
// import { ClubsComponent } from './pages/clubs/clubs.component'
import { HomeComponent } from './pages/home/home.component'
import { InfoComponent } from './pages/info/info.component'
import { LawCreationComponent } from './pages/law_creation/law_creation.component'
import { LawsComponent } from './pages/laws/laws.component'
// import { PoliticianComponent } from './pages/politician/politician.component'
import { PoliticiansComponent } from './pages/politicians/politicians.component'
import { StatisticsComponent } from './pages/statistics/statistics.component'

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
		FooterComponent,
		HeaderComponent,
		// PoliticianListItemComponent,
		// Statistics.
		VoteClubLawStatisticComponent,
		TopTimeSpeakClubLawStatisticComponent,
		TimeSpeakClubStatisticComponent,
		// Pages.
		// ClubComponent,
		// ClubsComponent,
		HomeComponent,
		InfoComponent,
		LawCreationComponent,
		LawsComponent,
		// PoliticianComponent,
		PoliticiansComponent,
		StatisticsComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		HttpClientModule,
		MatButtonModule,
		MatCheckboxModule,
		MatIconModule,
		MatProgressSpinnerModule,
		MatSidenavModule,
		MatSnackBarModule,
		MatToolbarModule,
		NgxEchartsModule,
		// ApolloModule,
		// HttpLinkModule,
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
