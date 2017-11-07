import { QuestionBase }     from './question-base';
import { CheckboxQuestion } from './question-checkbox';

export const QUESTIONS: QuestionBase<any> = [
  new CheckboxQuestion ({
      key: 'frequency',
      label: 'How often do you usually get your nails polished?',
      options: [
          {key: '1',  value: 'Once a week'},
          {key: '2',  value: 'Couple times a month'},
          {key: '3',  value: 'Once a month'},
          {key: '4',  value: 'Less than once a month'}
        ],
        order: 1
  }),
  new CheckboxQuestion ({
      key: 'pr_quality',
      label: 'How important is for you the quality and the brand of the products used?',
      options: [
          {key: 'important',  value: 'Very important - I prefer the best products'},
          {key: 'sort of important',  value: 'Sort of important - I do not choose salons based on products used'},
          {key: 'not important',  value: 'Not very important'}
        ],
        order: 2
  }),

  new CheckboxQuestion ({
      key: 'nonchip',
      label: 'Have you ever done nonchip manicure?',
      options: [
          {key: 'yes',  value: 'Yes'},
          {key: 'no',  value: 'No'}
        ],
        order: 3
  }),

  new CheckboxQuestion ({
      key: 'hate_color',
      label: 'What color would you never paint your nails?',
      options: [
          {key: 'black',  value: 'black'},
          {key: 'green',  value: 'green'},
          {key: 'red',  value: 'red'},
          {key: 'pink',  value: 'pink'},
          {key: 'silver',  value: 'silver'},
          {key: 'blue',  value: 'blue'},
          {key: 'all',  value: 'open to any color'}
        ],
        order: 4
  }),

  new CheckboxQuestion ({
      key: 'best_color',
      label: 'What do you think is the best nail polish color?',
      options: [
          {key: 'black',  value: 'black'},
          {key: 'green',  value: 'green'},
          {key: 'red',  value: 'red'},
          {key: 'pink',  value: 'pink'},
          {key: 'silver',  value: 'silver'},
          {key: 'blue',  value: 'blue'},
          {key: 'white',  value: 'white'}
        ],
        order: 5
  }),

  new CheckboxQuestion ({
      key: 'shape',
      label: 'What shape of nails do you prefer?',
      options: [
          {key: 'oval',  value: 'Oval'},
          {key: 'square',  value: 'Square'},
          {key: 'squareoval',  value: 'Squareoval'},
          {key: 'almond',  value: 'Almond'},
          {key: 'silver',  value: 'silver'},
          {key: 'stiletto',  value: 'Stiletto'}
        ],
        order: 6
  }),

  new CheckboxQuestion ({
      key: 'design',
      label: 'Do you like art on nails?',
      options: [
          {key: 'yes',  value: 'Yes'},
          {key: 'no',  value: 'No'}
        ],
        order: 7
  }),

  new CheckboxQuestion ({
      key: 'french',
      label: 'French manicure: cute or gross?',
      options: [
          {key: 'yes',  value: 'Cute'},
          {key: 'no',  value: 'Gross'}
        ],
        order: 8
  }),
];
