import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UnogameComponent } from './mycomp/unogame.component';
import { CaWeatherReportComponent } from './ca-weather-report/ca-weather-report.component';

@NgModule({
  declarations: [
    AppComponent,
    UnogameComponent,
    CaWeatherReportComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
