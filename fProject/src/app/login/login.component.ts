import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth-service.service';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';


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

  constructor(private router: Router, public auth: AuthService) {

   }

  ngOnInit() {
  }

  loggedIn(){
    return this.auth.authenticated();
  }

  loginFb() {
    this.auth.facebookLogin();
  }

  loginGoogle() {
    this.auth.googleLogin();
  }

}
