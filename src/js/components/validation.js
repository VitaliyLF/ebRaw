import {
  validateForms
} from '../functions/validate-forms';

const rules = [{
  ruleSelector: '.input-email',
  rules: [{
      rule: 'required',
      value: true,
      errorMessage: 'Fill out your Email!'
    },
    {
      rule: 'email',
      value: true,
      errorMessage: 'Enter a valid Email!'
    },
  ]
}];

const afterForm = () => {
  console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.footer__form', rules, afterForm);
