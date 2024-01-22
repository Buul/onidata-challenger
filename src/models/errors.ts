export type GenericError = {
  code: string;
  fields?: { [field: string]: string };
  message: string;
  type: string;
};

export enum GenericErrorType {
  NoResponseException = 'NoResponseException',
  Request404 = 'Request failed with status code 404',
}

export enum LoginErrorType {
  NotAuthorizedException = 'invalid username or password',
}
