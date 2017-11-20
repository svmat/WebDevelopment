import { Component, OnInit, Inject } from '@angular/core';
import { NailDesign } from '../models/nailDesign';
import { NailDesignsService } from '..//services/nail-designs.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  nailDesigns: NailDesign[];
  constructor(public designService: NailDesignsService) {
      this.nailDesigns = this.designService.sortedDesigns;
   }

  ngOnInit() {

  }

  searchDesign(tag?: HTMLInputElement): void {
      console.log("Search for Design with tag: ", tag.value);
      if (tag.value) {
        this.nailDesigns = this.designService.sortedDesigns.filter(nd => { return nd.tags.includes(tag.value); });
      } else {
        this.nailDesigns = this.designService.sortedDesigns;
      }
  }

}
