export interface ValidateEmailClassProtocol {
  isEmail(email: string): boolean;
}

export interface ValidateEmailFnProtocol {
  (email: string): boolean;
}
