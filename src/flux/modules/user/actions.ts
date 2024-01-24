import { AxiosError } from 'axios';
import { createAction, createAsyncAction } from 'typesafe-actions';

import { UserRequest } from './types';

export const createUser = createAsyncAction(
  'CREATE_USER_REQUEST',
  'CREATE_USER_SUCCESS',
  'CREATE_USER_ERROR'
)<UserRequest, undefined, Error | AxiosError>();

export const clearUser = createAction('CLEAR_USER')();
