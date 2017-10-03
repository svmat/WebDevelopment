import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { PatientInfoComponent } from './patient-info/patient-info.component';
import { PatientComponent } from './patient/patient.component';
import { SearchTextComponent } from './search-text/search-text.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientInfoComponent,
    PatientComponent,
    SearchTextComponent,
    SearchInputComponent,
    SearchResultComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
