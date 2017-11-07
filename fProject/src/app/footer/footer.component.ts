import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  chatForUser: boolean;
  constructor() { }

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
