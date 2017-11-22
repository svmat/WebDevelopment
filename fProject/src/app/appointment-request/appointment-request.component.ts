import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup }                 from '@angular/forms';

@Component({
  selector: 'appointment-request',
  templateUrl: './appointment-request.component.html',
  styleUrls: ['./appointment-request.component.css']
})
export class AppointmentRequestComponent implements OnInit {
  close = new EventEmitter();

  request = {
    name: '',
    email: '',
    message: ''
  }

  constructor() { }

  ngOnInit() {
  }

  onClickedExit() {
      this.close.emit('event');
    }

  onSubmit() {
    this.onClickedExit();
  }

}
