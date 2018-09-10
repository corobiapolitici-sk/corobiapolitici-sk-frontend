import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ButtonComponent } from './atoms/button/button.component';
import { AppBarComponent } from './atoms/app-bar/app-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeSectionComponent } from './templates/home-section/home-section.component';
import { CardComponent } from './atoms/card/card.component';
import { CardWithIconComponent } from './molecules/card-with-icon/card-with-icon.component';



@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    AppBarComponent,
    HomeComponent,
    HomeSectionComponent,
    CardComponent,
    CardWithIconComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
