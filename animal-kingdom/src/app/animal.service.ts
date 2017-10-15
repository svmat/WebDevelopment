import { Injectable } from '@angular/core';
import {PyramidRow} from './pyramid-row/pyramid-row.model';
import { ANIMALS} from './animals';


@Injectable()
export class AnimalService {

  getPyramidRow(index): PyramidRow {
    let p = new PyramidRow(index);
    for (let animal of ANIMALS){
      if (animal.level == index) {
        p.addAnimal(animal);
      }
    }
    return p;
  }

  getRows(): PyramidRow[] {
    let rows: PyramidRow[] = [];
    for (let i = 4; i >= 0;i--) {
      rows.push(this.getPyramidRow(i));
    }
    return rows;
  }

}
