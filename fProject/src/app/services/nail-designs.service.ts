import { Injectable } from '@angular/core';
import { NailDesign } from '../models/nailDesign';
import { DESIGNS } from '../models/mock-designs';
import { Observable } from 'rxjs';
import * as _ from 'lodash';


@Injectable()
export class NailDesignsService {

  sortedDesigns: NailDesign[];

  constructor() {
    //console.log(DESIGNS);
    this.sortedDesigns = DESIGNS.sort( (a: NailDesign) => a.votes).reverse();
    //console.log("After service");
   }

}

export const nailDesignsServiceInjectables: Array<any> = [
  NailDesignsService
];

