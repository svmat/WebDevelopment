import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit() {
  }

  select(e){
    e.preventDefault();
    console.log(e);
    let childNodes = e.target.parentElement.getElementsByClassName('item');
    var count = childNodes.length;
    for(var i=0;i<count;i++){
      childNodes[i].className = "item";
    }
    if (e.target.tagName == "I"){
      //icon
      e.target.parentElement.className = 'active item';
    } else {
      e.target.className = 'active item';
    }
  }

}
