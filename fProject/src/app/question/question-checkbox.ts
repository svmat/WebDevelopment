import { QuestionBase } from './question-base';

export class CheckboxQuestion extends QuestionBase<string> {
  controlType = 'checkbox';
  options: {key: string, value: string}[] = [];
  surveyResults: {key: string, vote: number}[] = []

constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
    this.surveyResults = this.options.map(opt => return {key: opt['key'],  vote: 0});
  }
}
