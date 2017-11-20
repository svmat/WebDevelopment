import { Component, OnInit } from '@angular/core';
import { QuestionControlService } from '../services/question-control.service';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private qcs: QuestionControlService) { }

  ngOnInit() {
  }

}
