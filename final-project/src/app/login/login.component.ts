import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login_btn= "Login";
  fp_btn= "Forgot Password";
  constructor(private userService: UsersService) { }

  ngOnInit() {
  }

}
