import {
  Component,
  OnInit,
  Inject,
  ElementRef,
  ChangeDetectionStrategy,
  Output,
  EventEmitter} from '@angular/core';

import { Observable } from 'rxjs';

import { Message } from "../message.model";
import {MessagingService} from "../messaging.service";
import { ThreadsService } from '../thread/threads.service';
import { Thread } from '../thread/thread.model';
import {UsersService} from "../users.service";
import { User } from '../user.model';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
  @Output() onClose = new EventEmitter<boolean>();
  messages: Observable<any>;
  currentThread: Thread;
  draftMessage: Message;
  currentUser: User;

  constructor(public threadsService: ThreadsService, public usersService: UsersService,
              public messaging: MessagingService, public el: ElementRef) { }

  ngOnInit(): void {
    this.messages = this.threadsService.currentThreadMessages;
    this.draftMessage = new Message();
    this.draftMessage.author = this.currentUser;

    this.threadsService.currentThread.subscribe(
      (thread: Thread) => {
        this.currentThread = thread;
      });

    this.usersService.currentUser
      .subscribe(
        (user: User) => {
          this.currentUser = user;
        });

    this.messages
      .subscribe(
        (messages: Array<Message>) => {
          setTimeout(() => {
            this.scrollToBottom();
          });
        });

  }

  onEnter(event: any): void {
    console.log("Envoked on Enter");
    console.log(this.draftMessage);
    this.sendMessage();
    event.preventDefault();
  }

  sendMessage(): void {
    const m: Message = this.draftMessage;
    m.author = this.currentUser;
    this.messaging.addMessage(m);
    this.draftMessage = new Message();
  }

  scrollToBottom(): void {
    const scrollPane: any = this.el
      .nativeElement.querySelector('.msg-container-base');
    scrollPane.scrollTop = scrollPane.scrollHeight;
  }

  close() {
    console.log("Clicked closed icon");
    this.onClose.emit(true);

  }

}
