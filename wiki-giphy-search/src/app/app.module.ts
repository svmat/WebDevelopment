import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';

import { WikiSearchService } from './wiki-search.service';
import {GiphySearchService} from './giphy-search.service';


const routes: Routes = [
// basic routes
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'history', component: SearchHistoryComponent },
{ path: 'search', component: SearchComponent },
{path: 'home', component: HomeComponent},
{path: '**', component: HomeComponent},
{ path: 'find', component: SearchComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchHistoryComponent,
    SearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [WikiSearchService, GiphySearchService],

  bootstrap: [AppComponent]
})
export class AppModule { }
