import { Component, OnInit, Inject } from '@angular/core';
import { NailDesign } from '../nailDesign.model';
import { NailDesignsService } from '../nail-design/nail-designs.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  nailDesigns: Observable<any>;
  constructor(public designService: NailDesignsService) {
      this.nailDesigns = designService.sortedDesigns;
      console.log("GALLERY");
      console.log(this.nailDesigns);
   }

  ngOnInit() {

  }

  sortedDesigns(): NailDesign[] {
    console.log("IN SORTED");
    let nds = this.nailDesigns.sort((a: NailDesign) => a.votes).reverse();
    //console.log("After sort");
    //console.log(nds);
    return nds;
  }

}
