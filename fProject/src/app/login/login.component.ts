import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  login_btn= "Login";
  fp_btn= "Forgot Password";
  constructor(private router: Router, private user: UserService) { }

  ngOnInit() {
  }

  loginUser(e) {

    e.preventDefault();
    console.log(e);
    let username = e.target.elements[0].value;
    let pwd = e.target.elements[1].value;

    if (this.user.setUserLogIn(username, pwd)) {
      console.log("Set user log in");
      this.router.navigate(['dashboard']);
      e.target.ownerDocument.activeElement.className = "item";
    }
  }

}
