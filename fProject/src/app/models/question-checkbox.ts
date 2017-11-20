import { QuestionBase } from './question-base';

export class CheckboxQuestion extends QuestionBase<string> {
  controlType = 'checkbox';

constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
    this.surveyResults = options['surveyResults'] || [];
    this.optionKeys = options['optionKeys'] || [];
  }
}
