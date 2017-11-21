import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  chatForUser: boolean;
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  clicked(event: any): void {
    event.preventDefault();
    this.chatForUser = true;
  }

  onClose(closed: boolean) {
    closed ? this.chatForUser = false : this.chatForUser = true;
  }

}
