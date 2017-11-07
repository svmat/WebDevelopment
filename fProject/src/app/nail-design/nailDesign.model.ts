import { uuid } from '../util/uuid';
/**
* Represents Nail Design picture and description
*/

export class NailDesign {
  votes: number;
  tags: string[];
  imgUrl: string;
  id: string;
  defaultImgPath: string;

constructor(tags?: string[], imgUrl?: string) {
    this.defaultImgPath = "../../assets/images/";
    this.votes = 0;
    this.tags = tags;
    this.imgUrl = this.defaultImgPath + imgUrl;
    this.id = uuid();
  }


}
