// Load angular modules.
import { NgModule } from '@angular/core'
import {
	RouterModule,
	Routes,
} from '@angular/router'

// Load local modules.
// import { ClubComponent } from './pages/club/club.component'
// import { ClubsComponent } from './pages/clubs/clubs.component'
// import { ContactComponent } from './pages/contact/contact.component'
import { HomeComponent } from './pages/home/home.component'
// import { InfoComponent } from './pages/info/info.component'
import { LawsComponent } from './pages/laws/laws.component'
// import { PoliticianComponent } from './pages/politician/politician.component'
// import { PoliticiansComponent } from './pages/politicians/politicians.component'

const routes: Routes = [{
	path: '',
	redirectTo: '/home',
	pathMatch: 'full',
}, {
	path: 'home',
	component: HomeComponent,
}, {
	path: 'laws',
	component: LawsComponent,
}
/* {
	path: 'politicians',
	component: PoliticiansComponent,
}, {
	path: 'politicians/:id',
	component: PoliticianComponent,
}, {
	path: 'clubs',
	component: ClubsComponent,
}, {
	path: 'clubs/:index',
	component: ClubComponent,
}, {
	path: 'info',
	component: InfoComponent,
}, {
	path: 'contact',
	component: ContactComponent,
} */
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
