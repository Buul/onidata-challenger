import { AxiosError } from 'axios';
import { createAction, createAsyncAction } from 'typesafe-actions';

import { User } from './types';

export const getUserInfo = createAsyncAction(
  'GET_USER_INFO_USER_REQUEST',
  'GET_USER_INFO_USER_SUCCESS',
  'GET_USER_INFO_USER_ERROR'
)<undefined, User, Error | AxiosError>();

export const clearUserInfo = createAction('CLEAR_USER_INFO')();
