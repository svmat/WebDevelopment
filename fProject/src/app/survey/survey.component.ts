import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup }                 from '@angular/forms';

import { QuestionBase }              from '../question/question-base';
import { QuestionControlService }    from '../question/question-control.service';

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

  constructor(private qcs: QuestionControlService, private router: Router) { }

  ngOnInit() {

    this.form = this.qcs.toFormGroup(this.questions);
    this.questions = this.qcs.questions;

  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    console.log(this.payLoad);
    console.log(this.form.value);
    Object.keys(this.form.value).forEach( key => {
      console.log(key);
      let value = this.form.value[key];
      if (value){
        let q = this.questions.find( q => q.key == key);
        if (q) {
          console.log(q);
          let updateValue = q.surveyResults.find( entry => entry['key'] == value);
          updateValue['vote'] += 1;
        }
      }
    });
  }

}
