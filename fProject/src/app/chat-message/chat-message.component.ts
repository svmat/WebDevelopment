import {
  Component,
  OnInit,
  Input
  } from '@angular/core';
import { Observable } from 'rxjs';

import {MessagingService} from "../services/messaging.service";
import { MessageWithAuthor } from '../models/message';
import {AuthService} from '../services/auth-service.service';


@Component({
  selector: 'chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {
  @Input() message: MessageWithAuthor;
  incoming: boolean;

  constructor(public auth: AuthService) {
  }


  ngOnInit(): void {
      this.incoming = this.message.author.displayName !==  "Admin";
  }
}
