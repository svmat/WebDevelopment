import {
  Component,
  OnInit,
  Input
  } from '@angular/core';
import { Observable } from 'rxjs';

import { UsersService } from '../users.service';
import { ThreadsService } from '../thread/threads.service';
import {MessagingService} from "../messaging.service";

import { Message } from '../message.model';
import { Thread } from '../thread/thread.model';
import { User } from '../user.model';

@Component({
  selector: 'chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {
  @Input() message: Message;
  currentUser: User;
  incoming: boolean;

  constructor(public UsersService: UsersService) {
  }

  ngOnInit(): void {
    this.UsersService.currentUser
      .subscribe(
        (user: User) => {
          this.currentUser = user;
          if (this.message.author && user) {
            this.incoming = this.message.author.id !== user.id;
          }
        });
  }
}
