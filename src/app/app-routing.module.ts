// Load angular modules.
import { NgModule } from '@angular/core'
import {
	RouterModule,
	Routes,
} from '@angular/router'

// Load local modules.
// import { ClubComponent } from './pages/club/club.component'
// import { ClubsComponent } from './pages/clubs/clubs.component'
import { HomeComponent } from './pages/home/home.component'
import { InfoComponent } from './pages/info/info.component'
import { LawCreationComponent } from './pages/law-creation/law-creation.component'
import { LawsComponent } from './pages/laws/laws.component'
// import { PoliticianComponent } from './pages/politician/politician.component'
import { PoliticiansComponent } from './pages/politicians/politicians.component'
import { StatisticsComponent } from './pages/statistics/statistics.component'

const routes: Routes = [{
	path: '',
	redirectTo: '/home',
	pathMatch: 'full',
}, {
/*
	path: 'clubs',
	component: ClubsComponent,
}, {
	path: 'clubs/:index',
	component: ClubComponent,
}, {
*/
	path: 'home',
	component: HomeComponent,
}, {
	path: 'info',
	component: InfoComponent,
}, {
	path: 'law_creation',
	component: LawCreationComponent,
}, {
	path: 'laws',
	component: LawsComponent,
}, {
	path: 'politicians',
	component: PoliticiansComponent,
/*
}, {
	path: 'politicians/:id',
	component: PoliticianComponent,
*/
}, {
	path: 'statistics',
	component: StatisticsComponent,
}]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
