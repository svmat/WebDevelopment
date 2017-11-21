import { Component, OnInit, Input } from '@angular/core';
import { NailDesign } from '../models/nailDesign';
import {AuthService} from '../services/auth-service.service';
import * as firebase from 'firebase';

@Component({
  selector: 'nail-design',
  templateUrl: './nail-design.component.html',
  styleUrls: ['./nail-design.component.css']
})

export class NailDesignComponent implements OnInit {
  @Input() nd: NailDesign;
  constructor(private auth: AuthService) {
   }

  ngOnInit() {
    firebase.database().ref('nailDesigns/' + this.nd.id + '/votes').once('value').then(
      snap => {
      this.nd.votes = snap.val() || 0;
      });
   }

  voteUp(e) {
    e.preventDefault();
    debugger;
    this.nd.votes += 1;
    if (this.auth.authenticated()){
      var userId = this.auth.currentUserId();
      var updates = {};
      updates[this.nd.id] = this.nd.imgUrl;
      firebase.database().ref('savedDesigns/' + userId).update(updates);
    }
    var ndUpdate = {};
    ndUpdate['votes'] = this.nd.votes;
    firebase.database().ref('nailDesigns/' + this.nd.id).update(ndUpdate);
  }

  voteDown(e) {
    e.preventDefault();
    this.nd.votes -= 1;
    var ndUpdate = {};
    ndUpdate['votes'] = this.nd.votes;
    firebase.database().ref('nailDesigns/' + this.nd.id).update(ndUpdate);
  }

}
