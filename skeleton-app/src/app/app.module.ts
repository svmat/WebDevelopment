import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { TwoButtonComponent } from './two-button/two-button.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

import {MessagingService} from "./messaging.service";
import {UsersService} from "./users.service";
import { ThreadsService } from './thread/threads.service';

import { ChatMessageComponent } from './chat-message/chat-message.component';
import { FromNowPipe } from './pipes/from-now.pipe';

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home',  component: HomeComponent },
{ path: 'settings', component: SettingsComponent },
{ path: 'dashboard',     component: DashboardComponent },
{ path: 'login',     component: LoginComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ChatboxComponent,
    TwoButtonComponent,
    SettingsComponent,
    DashboardComponent,
    HomeComponent,
    ChatMessageComponent,
    FromNowPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MessagingService, UsersService, ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
