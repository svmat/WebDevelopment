import {
  Component,
  OnInit,
  Inject,
  ElementRef,
  ChangeDetectionStrategy,
  Output,
  EventEmitter} from '@angular/core';

import { Observable } from 'rxjs';

import { MessageWithAuthor } from "../models/message";
import { Message } from "../models/message";
import {MessagingService} from "../services/messaging.service";
import {QuestionControlService} from '../services/question-control.service';
import {AuthService} from '../services/auth-service.service';
import * as _ from "lodash";

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
  @Output() onClose = new EventEmitter<boolean>();
  messages: Observable<any>;
  draftMessage: Message;

  constructor(public auth: AuthService,
              public messaging: MessagingService, public qcs: QuestionControlService, public el: ElementRef) { }

  ngOnInit(): void {
    this.messages = this.messaging.messagesWithAuthorStream;

    this.draftMessage = new Message();
    this.draftMessage.authorId = this.auth.currentUserId();

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

  addAnswer() {
    var answer: string;
    if (this.draftMessage.messageText.includes('next') && this.draftMessage.messageText.includes('appointment')){
      answer = "Next available appointment is next Sunday at 2 pm.";
    } else if (this.draftMessage.messageText.includes('popular color')){
      answer = "The most popular color in this season is " + this.qcs.getBestColor();
    } else if (this.draftMessage.messageText.includes('popular') && this.draftMessage.messageText.includes('shape')){
      answer = "The most popular nails shape in this season is " + this.qcs.getBestShape();
    } else if (this.draftMessage.messageText.includes('least attractive color')) {
      answer = "The least attractive color in this season is " +  this.qcs.getHatedColor();
    } else {
      answer = "Sorry, did not understand your question. Please, try again";
    }
    const reply: Message = new Message();
    reply.messageText = answer;
    reply.authorId = 'admin';
    this.messaging.addMessage(reply);

  }

  sendMessage(): void {
    const m: Message = this.draftMessage;
    this.messaging.addMessage(m);
    this.addAnswer();
    this.draftMessage = new Message();
    this.draftMessage.authorId = this.auth.currentUserId();
  }

  scrollToBottom(): void {
    const scrollPane: any = this.el
      .nativeElement.querySelector('.msg-container-base');
    scrollPane.scrollTop = scrollPane.scrollHeight;
  }

  close() {
    this.onClose.emit(true);

  }

  hack(val) {
    return val.asObservable();
  }

}
