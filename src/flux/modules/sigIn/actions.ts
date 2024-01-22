import { AxiosError } from 'axios';
import { createAction, createAsyncAction } from 'typesafe-actions';

import { SigInRequest, User } from './types';

export const sigIn = createAsyncAction(
  'SIGN_INFO_REQUEST',
  'SIGN_INFO_SUCCESS',
  'SIGN_INFO_ERROR'
)<SigInRequest, User, Error | AxiosError>();

export const clearSigIn = createAction('CLEAR_SIGN_IN')();
