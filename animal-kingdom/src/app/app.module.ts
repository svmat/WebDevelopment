import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AnimalComponent } from './animal/animal.component';
import { PyramidRowComponent } from './pyramid-row/pyramid-row.component';
import { PyramidComponent } from './pyramid/pyramid.component';

import { AnimalService } from './animal.service';


@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    PyramidRowComponent,
    PyramidComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
