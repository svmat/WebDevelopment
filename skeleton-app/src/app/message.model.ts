import { uuid } from './util/uuid';
import { User } from './user.model';

export class Message {
  author: User;
  messageText: string;
  timestamp: Date;
  id: string;

constructor(obj?: any) {
  this.id = obj && obj.id || uuid();
  this.timestamp = obj && obj.timestamp || new Date();
  this.author = obj && obj.author || null;
  this.messageText = obj && obj.messageText || null;
  }
}
