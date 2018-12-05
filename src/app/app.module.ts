import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule } from '@angular/material';
import { NgxEchartsModule } from 'ngx-echarts';

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
<<<<<<< Updated upstream
import { StatisticsComponent } from './molecules/statistics/statistics.component';


=======
import { Statistics1Component } from './molecules/statistics1/statistics1.component';
import { Statistics2Component } from './molecules/statistics2/statistics2.component';
import { Statistics3Component } from './molecules/statistics3/statistics3.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> Stashed changes

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
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
