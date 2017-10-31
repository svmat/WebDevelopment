import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../thread/threads.service';
import { Thread } from '../thread/thread.model';
import {UsersService} from "../users.service";
import { User } from '../user.model';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: User;
  chatForUser: boolean;
  constructor(public threadsService: ThreadsService, public usersService: UsersService) { }

  ngOnInit() {
    this.chatForUser = false;
    this.usersService.currentUser
      .subscribe(
        (user: User) => {
          this.currentUser = user;
        });
  }

  clicked(event: any): void {
    let thread = new Thread(this.currentUser.id, this.currentUser.firstName + " " + this.currentUser.lastName, this.currentUser.profilImgUrl);

    this.threadsService.setCurrentThread(thread);
    event.preventDefault();
    this.chatForUser = true;
  }

  onClose(closed: boolean) {
    closed ? this.chatForUser = false : this.chatForUser = true;
  }

}
