import { PoliticiansComponent } from './pages/politicians/politicians.component';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxEchartsModule } from 'ngx-echarts';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ButtonComponent } from './atoms/button/button.component';
import { AppBarComponent } from './atoms/app-bar/app-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeSectionComponent } from './templates/home-section/home-section.component';
import { CardComponent } from './atoms/card/card.component';
import { CardWithIconComponent } from './molecules/card-with-icon/card-with-icon.component';
import { HeadingComponent } from './atoms/heading/heading.component';
import { LogoComponent } from './atoms/logo/logo.component';
import { SectionTurquoiseComponent } from './atoms/section-turquoise/section-turquoise.component';
import { SectionGrayComponent } from './atoms/section-gray/section-gray.component';
import { TextComponent } from './atoms/text/text.component';
import { ChartComponent } from './atoms/chart/chart.component';
import { SelectComponent } from './atoms/select/select.component';
import { HttpClientModule } from '@angular/common/http';
import { StatisticsComponent } from './molecules/statistics/statistics.component';
import { HeaderComponent } from './organisms/header/header.component';
import { NavLinksComponent } from './organisms/header/nav-links/nav-links.component';
import { ClubsComponent } from './pages/clubs/clubs.component';
import { InfoComponent } from './pages/info/info.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ClubComponent } from './pages/clubs/club/club.component';
import { PoliticianComponent } from './pages/politicians/politician/politician.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingErrorIndicatorComponent } from './atoms/loading-error-indicator/loading-error-indicator.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PoliticianListItemComponent } from './organisms/politician-list-item/politician-list-item.component';

const appRoutes: Routes = [
  { path: '', component: HomeSectionComponent },
  { path: 'politicians', component: PoliticiansComponent },
  { path: 'politicians/:id', component: PoliticianComponent },
  { path: 'clubs', component: ClubsComponent },
  { path: 'clubs/:index', component: ClubComponent },
  { path: 'info', component: InfoComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    AppBarComponent,
    HomeComponent,
    HomeSectionComponent,
    CardComponent,
    CardWithIconComponent,
    HeadingComponent,
    LogoComponent,
    SectionTurquoiseComponent,
    SectionGrayComponent,
    TextComponent,
    ChartComponent,
    SelectComponent,
    StatisticsComponent,
    HeaderComponent,
    PoliticiansComponent,
    NavLinksComponent,
    ClubsComponent,
    InfoComponent,
    ContactComponent,
    ClubComponent,
    PoliticianComponent,
    LoadingErrorIndicatorComponent,
    PoliticianListItemComponent,
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
    ApolloModule,
    HttpLinkModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
    ),
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory(httpLink: HttpLink) {
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: 'http://localhost:3003/graphql'
        })
      };
    },
    deps: [HttpLink],
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
