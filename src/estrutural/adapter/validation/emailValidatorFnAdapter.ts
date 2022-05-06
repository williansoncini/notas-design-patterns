import isEmail from 'validator/lib/isEmail';
import { ValidateEmailFnProtocol } from '../interfaces/validateEmailProtocol';

export const emailValidatorFnAdapter: ValidateEmailFnProtocol = (
  email: string,
): boolean => {
  return isEmail(email);
};
