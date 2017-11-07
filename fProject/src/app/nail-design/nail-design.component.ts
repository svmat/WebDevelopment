import { Component, OnInit, Input } from '@angular/core';
import { NailDesign } from './nailDesign.model';
import { UserService } from '../user.service';


@Component({
  selector: 'nail-design',
  templateUrl: './nail-design.component.html',
  styleUrls: ['./nail-design.component.css']
})
export class NailDesignComponent implements OnInit {
  @Input() nd: NailDesign;
  constructor(private user: UserService) { }

  ngOnInit() { }

  voteUp(e) {
    e.preventDefault();
    this.nd.votes += 1;
    if (this.user.getUserLoggedIn()){
        if (!this.user.currentUser.liked_designs.includes(this.nd.imgUrl)){
          this.user.currentUser.liked_designs.push(this.nd.imgUrl);
        }
    }
  }

  voteDown(e) {
    e.preventDefault();
    this.nd.votes -= 1;
  }

}
