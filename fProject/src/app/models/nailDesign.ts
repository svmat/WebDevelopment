import { uuid } from '../util/uuid';
/**
* Represents Nail Design picture and description
*/
export class nailDesignBase {
  tags: string[];
  imgUrl: string;
  votes: number;

  constructor(tags: string[], imgUrl: string, votes:number) {
    this.votes = votes;
    this.tags = tags;
    this.imgUrl = imgUrl;
  }
}

export class NailDesign {
  votes: number;
  tags: string[];
  imgUrl: string;
  id: string;
  defaultImgPath: string;

constructor(tags?: string[], imgUrl?: string, votes?: number, id?: string) {
    this.defaultImgPath = "../../assets/images/";
    this.votes = votes || 0;
    this.tags = tags;
    this.imgUrl = imgUrl || this.defaultImgPath;
    this.id = id || uuid();
  }


}
