import { Injectable } from '@angular/core';
import { NailDesign } from './nailDesign.model';
import { DESIGNS } from './mock-designs.model';
import { Observable } from 'rxjs';
import * as _ from 'lodash';


@Injectable()
export class NailDesignsService {

  sortedDesigns: Observable<NailDesign[]>;

  constructor() {
    //console.log(DESIGNS);
    this.sortedDesigns = DESIGNS.sort( (a: NailDesign) => a.votes);
    //console.log("After service");
   }

}

export const nailDesignsServiceInjectables: Array<any> = [
  NailDesignsService
];

