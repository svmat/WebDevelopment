import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth-service.service';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { GoogleAnalyticsService } from '../services/google-analytics.service';

declare let gtag: Function;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  login_btn= "Login";
  fp_btn= "Forgot Password";
  error: any;
  dbUsers: AngularFireList<any>;

  constructor(private router: Router, public auth: AuthService, public gas: GoogleAnalyticsService) {

   }

  ngOnInit() {
  }

  loggedIn(){
    return this.auth.authenticated();
  }

  loginFb() {
    this.auth.facebookLogin();
    this.gas.sendEvent('login', 'csc436', 'authorized Facebook');
  }

  loginGoogle() {
    this.auth.googleLogin();
    this.gas.sendEvent('login', 'csc436', 'authorized Google');

  }

}
