import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import {AuthService} from '../services/auth-service.service';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dUsername: string;
  designsCollection: AngularFireList<Date>;
  appointments: String[];
  savedDesigns: String[];
  hasAppointments: boolean;
  hassavedDesigns: boolean;

  constructor(private auth: AuthService, private db: AngularFireDatabase, private router: Router) {

    console.log("Dashboard Constructor");
    if (this.auth.authenticated()) {
      var userId = firebase.auth().currentUser.uid;
      firebase.database().ref('/users/' + userId).once('value').then(snapshot => {
        if (snapshot.val() ) {
          console.log(snapshot.val());
          this.dUsername = snapshot.val().username || 'Anonymous';
          this.appointments = snapshot.val().appointments || [];
          if (this.appointments.length > 0){
            this.hasAppointments = true;
          }
        }
      });
      firebase.database().ref('savedDesigns/' + userId).once('value').then( snapshot => {
        if (snapshot.val() ) {
          console.log(snapshot.val());
          this.savedDesigns = Object.values(snapshot.val());
          console.log(this.savedDesigns);
          this.hassavedDesigns = true;
        }
      });
    }
  }

  ngOnInit() {
  }

  logOut() {
    console.log("LogOut btn clicked");
    this.auth.signOut();
  }

}
