import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup }                 from '@angular/forms';

import { QuestionBase }              from '../models/question-base';
import { QuestionControlService }    from '../services/question-control.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  form: FormGroup;
  payLoad = '';
  questions: QuestionBase<any>[];

  constructor(private qcs: QuestionControlService, private router: Router) {
      console.log("Survey CONSTRUCTOR");
   }

  ngOnInit() {
    this.form = this.qcs.toFormGroup();
    this.questions = this.qcs.questions;
    console.log("Survey ngOnInt Start");
    this.qcs.dbQuestions.subscribe(() => {this.questions = this.qcs.questions; this.form = this.qcs.toFormGroup();});
    console.log("Survey ngOnInt END");
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    console.log(this.payLoad);

    Object.keys(this.form.value).forEach( key => {
      let value = this.form.value[key];
      if (value){
        this.qcs.updateQuestionStatistics(key, value);
      }
    });
  }

}
