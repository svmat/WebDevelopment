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
import { TwoButtonComponent } from './two-button/two-button.component';
import { NailDesignComponent } from './nail-design/nail-design.component';
import { QuestionComponent } from './question/question.component';

import { UserService } from './user.service';
import {NailDesignsService } from './nail-design/nail-designs.service';
import { AuthguardGuard} from'./authguard.guard';
import {QuestionControlService } from './question/question-control.service';
import { SummaryComponent } from './summary/summary.component';


const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home',  component: HomeComponent },
{ path: 'survey', component: SurveyComponent },
{ path: 'dashboard',   component: DashboardComponent, canActivate[ AuthguardGuard ]},
{ path: 'gallery',     component: GalleryComponent },
{ path: 'summary',     component: SummaryComponent },
{path: '**', redirectTo: 'home'}
];


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
    TwoButtonComponent,
    NailDesignComponent,
    QuestionComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, NailDesignsService, AuthguardGuard, QuestionControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
