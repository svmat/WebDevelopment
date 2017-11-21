import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Message } from "../models/message";
import { Author } from "../models/author";
import { MessageWithAuthor } from "../models/message";
import { MESSAGES } from "../models/mock-messages";
import { AuthorsService } from'./authors.service';

const initialMessages: MessageWithAuthor[] = [];

interface IMessagesOperation extends Function {
  (messages: Message[]): Message[];
}

@Injectable()
export class MessagingService {

  // a stream that publishes new messages only once
  newMessages: Subject<Message> = new Subject<Message>();

  messages: Observable<Message[]> = new Observable<Message[]>();

  // `updates` receives _operations_ to be applied to messages
  // it's a way we can perform changes on *all* messages
  updates: Subject<any> = new Subject<any>();

  // action streams
  create: Subject<Message> = new Subject<Message>();

  //map together messages and their authors
  messagesWithAuthorStream: Observable<MessageWithAuthor[]>;

  addMessage(message: Message): void {
    console.log("MESSAGING SERVICE ADD MSG");
    this.newMessages.next(message);
  }

  constructor(private authorService: AuthorsService) {
    this.messages = this.updates
    // watch the updates and accumulate operations on the messages, scan like reduce
    .scan((messages: MessageWithAuthor[],
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


    this.newMessages.subscribe(this.create);

    this.messagesWithAuthorStream = this.messages.combineLatest(
      this.authorService.authorMapStream.valueChanges(), (messages: Message[], authorMap: Map<string, Author>) => {
        const messagesWithAuthor: MessageWithAuthor[] = [];
        console.log("Messages", messages);
        console.log("Author maps", authorMap);
        for (let message of messages) {
          const msg = new MessageWithAuthor(message);
          msg.author = authorMap[message.authorId];
          messagesWithAuthor.push(msg);
        }
        console.log("COMBINED", messagesWithAuthor);
        return messagesWithAuthor;
      });


  }

}

export const messagingServiceInjectables: Array<any> = [
  MessagingService
];

