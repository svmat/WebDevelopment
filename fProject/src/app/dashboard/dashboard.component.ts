import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dUsername: string;
  hasAppointments: boolean;
  haslikedDesigns: boolean;
  appointments: Observable<Date[]>;
  likedDesignsUrls: Observable<String[]>;

  constructor(private user: UserService) {
    this.dUsername = this.user.currentUser.username;

    if (this.user.currentUser.appointments.length > 0){
      this.hasAppointments = true;
      this.appointments = this.user.currentUser.appointments;
    } else {
      this.hasAppointments = false;
      this.appointments = [];
    }

    if (this.user.currentUser.liked_designs.length > 0){
      this.haslikedDesigns = true;
      this.likedDesignsUrls = this.user.currentUser.liked_designs;
    } else {
      this.haslikedDesigns = false;
      this.likedDesignsUrls = [];
    }
  }

  ngOnInit() {
  }

}
