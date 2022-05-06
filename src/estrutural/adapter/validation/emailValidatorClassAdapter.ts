import isEmail from 'validator/lib/isEmail';
import { ValidateEmailClassProtocol } from '../interfaces/validateEmailProtocol';

export class EmailValidationClass implements ValidateEmailClassProtocol {
  isEmail(email: string): boolean {
    return isEmail(email);
  }
}
