import { Component, OnInit, Inject } from '@angular/core';
import { NailDesign } from '../models/nailDesign';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  nailDesigns: NailDesign[] = [];
  readonly nailDesignsPath = "nailDesigns";
  taggedDesigns: NailDesign[] = [];

  constructor(private db: AngularFireDatabase) {
   }

  ngOnInit() {
    firebase.database().ref('nailDesigns').once('value').then(
      snap => {
        console.log(snap.val());
        for (const [key, value] of Object.entries(snap.val())) {
          var nd = new NailDesign(value.tags, value.imgUrl, value.votes, key);
          this.taggedDesigns.push(nd);
        }
      });
    this.nailDesigns = this.taggedDesigns;

  }

  searchDesign(tag?: HTMLInputElement): void {
      console.log("Search for Design with tag: ", tag.value);
      if (tag.value) {
        this.taggedDesigns = this.nailDesigns.filter(nd => { return nd.tags.includes(tag.value); });
      } else {
        this.taggedDesigns = this.nailDesigns;
      }
  }

}
