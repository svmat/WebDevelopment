import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { QuestionBase } from '../models/question-base';
import { CheckboxQuestion } from '../models/question-checkbox';
import { QUESTIONS } from '../models/questions';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';


@Injectable()
export class QuestionControlService {
  questions: QuestionBase<any>[] = [];
  dbQuestions: Subject<QuestionBase<any>> = new Subject<QuestionBase<any>>();
  questionsDB: any;

  constructor(private db: AngularFireDatabase) {
    console.log("QCS CONSTRUCTOR");
    this.getQuestionsDB();
   }

  getQuestionsDB() {
    console.log("QCS get questions DB");
    firebase.database().ref('questions').orderByChild('order').once('value')
    .then(snapshot => {
          snapshot.forEach( q => {
            console.log(q.val());
            var newQ = new CheckboxQuestion ({
                key: q.key,
                label: q.val().label,
                options: Object.values(q.child('options').val()),
                order: q.val().order,
                surveyResults: q.val().surveyResults,
                optionKeys: Object.keys(q.child('options').val())
            });
            console.log(newQ);
            this.questions.push(newQ);
            this.dbQuestions.next(newQ);
          });
    })
  }

  toFormGroup() {
    console.log("QCS to form group");
    let group: any = {};
    this.questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }

  findQuestion(key: string){
    return this.questions.find( q => q.key == key);
  }

  findBestResult( question: QuestionBase<any>) {
    let bestResult = null;
    if (question) {
      let bestValue = -1;
      for (let i = 0; i< question.optionKeys.length; i++){
        if (question.surveyResults[question.optionKeys[i]] > bestValue) {
            bestResult = question.options[i];
            bestValue = question.surveyResults[question.optionKeys[i]];
        }
      }
    }
    return bestResult;
  }

  findBestKey( question: QuestionBase<any>) {
    let bestKey = null;
    if (question) {
      let bestValue = -1;
      for (let i = 0; i< question.optionKeys.length; i++){
        if (question.surveyResults[question.optionKeys[i]] > bestValue) {
            bestKey = question.optionKeys[i];
            bestValue = question.surveyResults[question.optionKeys[i]];
        }
      }
    }
    return bestKey;
  }

  getFrequency(){
    let q = this.findQuestion('frequency');
    if (q) {
      return this.findBestResult(q).toLowerCase();
    }
    return '';
  }

  getQualityImportance(){
    let q = this.findQuestion('pr_quality');
    if (q) {
      let key = this.findBestKey(q);

      switch (key){
        case 'important':
          return "care a lot";
        case 'sort_of_important':
          return "care";
        case 'not_important':
          return "don't care";
        default:
          return "";
      }
    }
    return '';
  }

  getHatedColor(){
    let q = this.findQuestion('hate_color');
    if (q) {
      return this.findBestResult(q);
    }
    return '';
  }

  getBestColor(){
    let q = this.findQuestion('best_color');
    return this.findBestResult(q);
  }

  getBestShape(){
    let q = this.findQuestion('shape');
    return this.findBestResult(q);
  }

  getDesignResult(){
    var returnString: string;
    let q = this.findQuestion('design');
    let key = this.findBestKey(q);
    if(key == 'yes'){
        returnString = "Nail design is very welcome in this season.";
        let fq = this.findQuestion('french');
        let fKey = this.findBestKey(fq);
        if (fKey == 'yes'){
          returnString = returnString.concat(" Especially appreciated French Manicure.");
        } else {
            returnString = returnString.concat("But avoid French Manicure.");
        }
    } else {
        returnString = "Plain nails is prefered this season";
    }
    return returnString;
  }

  updateQuestionStatistics(qKey:string, optKey: string){
    let q = this.questions.find( q => q.key == qKey);
    if (q) {
      q.surveyResults[optKey] += 1;
      // Write the new survey data simultaneously
      var updates = {};
      updates['/surveyResults'] = q.surveyResults;
      return firebase.database().ref('questions/' + qKey).update(updates);
    }

  }


}
