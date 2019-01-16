import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule } from '@angular/material';
import { NgxEchartsModule } from 'ngx-echarts';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';

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
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    NgxEchartsModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
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
