import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Thread } from './thread.model';
import { Message } from '../message.model';
import { MessagingService } from '../messaging.service';
import * as _ from "lodash";

@Injectable()
export class ThreadsService {

  // `currentThread` contains the currently selected thread
  currentThread: Subject<Thread> =
    new BehaviorSubject<Thread>(new Thread());

  // `currentThreadMessages` contains the set of messages for the currently
  // selected thread
  currentThreadMessages: Observable<Message[]>;

  constructor(public messagesService: MessagingService) {

    this.currentThreadMessages = this.currentThread
      .combineLatest(messagesService.messages,
                     (currentThread: Thread, messages: Message[]) => {
        if (currentThread && messages.length > 0) {
          return _.chain(messages)
            .filter((message: Message) =>
                    (message.author.id === currentThread.id))
            .map((message: Message) => {
              return message; })
            .value();
        } else {
          return [];
        }
      });
  }

  setCurrentThread(newThread: Thread): void {
    this.currentThread.next(newThread);
  }

}

export const threadsServiceInjectables: Array<any> = [
  ThreadsService
];
