import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';

import { QUESTIONS } from './questions.model';


@Injectable()
export class QuestionControlService {
  questions: QuestionBase<any>[] = [];
  constructor() {
    this.questions = QUESTIONS.sort(a => a.order).reverse();
   }

  toFormGroup() {
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

  findBestResultKey( question: QuestionBase) {
    let bestVote = question.surveyResults.map( sr => sr['vote']).sort().reverse()[0];
    return question.surveyResults.filter( sr => sr['vote'] == bestVote)[0]['key'];
  }

  findBestResultValue( question: QuestionBase, sKey:string) {
    return question.options.filter( opt => opt['key'] == sKey)[0]['value'];
    //let result = question.surveyResults.find( (a, b) => Math.max(a['vote'],b['vote']));
    //return result['key'];
    //q.surveyResults.map( result => result['vote']).reduce(function(a,b){return Math.max(a,b);}, 0);

  }

  getFrequency(){
    let q = this.findQuestion('frequency');
    let key = this.findBestResultKey(q);
    return this.findBestResultValue(q, key).toLowerCase();
  }

  getQualityImportance(){
    let q = this.findQuestion('pr_quality');
    let key = this.findBestResultKey(q);
    switch (key){
      case 'important':
        return "care a lot";
      case 'sort of important':
        return "care";
      case 'not important':
        return "don't care";
      default:
        return "";
    }
  }

  getHatedColor(){
    let q = this.findQuestion('hate_color');
    return this.findBestResultKey(q);
  }

  getBestColor(){
    let q = this.findQuestion('best_color');
    return this.findBestResultKey(q);
  }

  getBestShape(){
    let q = this.findQuestion('shape');
    return this.findBestResultKey(q);
  }

  getDesignResult(){
    var returnString: string;
    let q = this.findQuestion('design');
    let key = this.findBestResultKey(q);
    if(key == 'yes'){
        returnString = "Nail design is very welcome in this season.";
        let fq = this.findQuestion('french');
        let fKey = this.findBestResultKey(fq);
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


}
