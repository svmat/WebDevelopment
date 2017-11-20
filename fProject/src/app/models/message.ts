import { uuid } from '../util/uuid';
import { Author } from './author';

export class Message {
  authorId: string;
  messageText: string;
  timestamp: Date;
  id: string;

constructor(obj?: any) {
  this.id = obj && obj.id || uuid();
  this.timestamp = obj && obj.timestamp || new Date();
  this.authorId = obj && obj.authorId || null;
  this.messageText = obj && obj.messageText || null;
  }
}

export class MessageWithAuthor extends Message {
  public author: Author;

  constructor(obj?: any) {
    super(obj);
    this.author = obj && obj.author || new Author(null, null);
  }
}
