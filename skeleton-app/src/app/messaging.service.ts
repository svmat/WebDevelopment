import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Message } from "./message.model";
import { User } from './user.model';
import { MESSAGES } from "./mock-messages";

const initialMessages: Message[] = [];

interface IMessagesOperation extends Function {
  (messages: Message[]): Message[];
}

@Injectable()
export class MessagingService {

  // a stream that publishes new messages only once
  newMessages: Subject<Message> = new Subject<Message>();

  messages: Observable<Message[]>;

  // `updates` receives _operations_ to be applied to messages
  // it's a way we can perform changes on *all* messages
  updates: Subject<any> = new Subject<any>();

  // action streams
  create: Subject<Message> = new Subject<Message>();

  addMessage(message: Message): void {
    this.newMessages.next(message);
  }

  getUserMessages(user: User): Observable<Message> {
    return this.newMessages
      .filter((message: Message) => {
    // belongs to this user
    return (message.author.id !== user.id);
    });
  }

  constructor() {
    this.messages = this.updates
      // watch the updates and accumulate operations on the messages, scan like reduce
      .scan((messages: Message[],
             operation: IMessagesOperation) => {
               return operation(messages);
             },
            initialMessages)
      // make sure we can share the most recent list of messages across anyone
      // who's interested in subscribing and cache the last known list of
      // messages
      .publishReplay(1)
      .refCount();

    // for each Message we receive as input, return an IMessagesOperation that adds this message to the list
    this.create
      .map( function(message: Message): IMessagesOperation {
        return (messages: Message[]) => {
          return messages.concat(message);
        };
      })
      .subscribe(this.updates); //subscribing the updates stream to listen to the create stream

    this.newMessages
      .subscribe(this.create);
  }

}
