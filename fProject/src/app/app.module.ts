import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SurveyComponent } from './survey/survey.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { NailDesignComponent } from './nail-design/nail-design.component';
import { QuestionComponent } from './question/question.component';
import { SummaryComponent } from './summary/summary.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { AppointmentRequestComponent } from './appointment-request/appointment-request.component';
import { DialogAnchorDirective } from './dialoganchor.directive';

import {QuestionControlService } from './services/question-control.service';
import { AuthService} from './services/auth-service.service';
import {MessagingService} from "./services/messaging.service";
import { AuthorsService } from './services/authors.service';
import { GoogleAnalyticsService } from './services/google-analytics.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { FromNowPipe } from './pipes/from-now.pipe';


const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home',  component: HomeComponent },
{ path: 'survey', component: SurveyComponent },
{ path: 'dashboard', component: DashboardComponent},
{ path: 'gallery', component: GalleryComponent },
{ path: 'summary', component: SummaryComponent },
{path: '**', redirectTo: 'home'}
];

export const firebaseConfig = {
  apiKey: "AIzaSyB2AvwgpQxfbYX4AC7JOevxp1K1AtwSprA",
  authDomain: "nailstherapy-24027.firebaseapp.com",
  databaseURL: "https://nailstherapy-24027.firebaseio.com",
  projectId: "nailstherapy-24027",
  storageBucket: "nailstherapy-24027.appspot.com",
  messagingSenderId: "255093687173"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    HomeComponent,
    GalleryComponent,
    SurveyComponent,
    ChatboxComponent,
    NailDesignComponent,
    QuestionComponent,
    SummaryComponent,
    ChatMessageComponent,
    FromNowPipe,
    AppointmentRequestComponent,
    DialogAnchorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [MessagingService, QuestionControlService, AuthService, AuthorsService, GoogleAnalyticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
