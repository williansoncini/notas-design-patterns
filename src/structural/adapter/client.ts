import { EmailValidationClass } from './validation/emailValidatorClassAdapter';
import { emailValidatorFnAdapter } from './validation/emailValidatorFnAdapter';

const email = 'hk@dfg.com';

const emailClassValidator = new EmailValidationClass();
console.log(emailClassValidator.isEmail(email));
console.log(emailValidatorFnAdapter(email));
