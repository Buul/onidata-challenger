import { Action, createReducer } from 'typesafe-actions';

import { IRequest, RequestStatus } from '@/models/iRequest';

import { clearUser, createUser } from './actions';
import { UserRequest } from './types';

const initialState: IRequest<UserRequest> = {
  data: null,
  message: null,
  status: RequestStatus.idle,
};

const sigInReducer = createReducer<IRequest<UserRequest>, Action>(initialState)
  .handleAction(createUser.request, state => ({
    ...state,
    data: null,
    message: null,
    status: RequestStatus.fetching,
  }))
  .handleAction(createUser.success, state => ({
    ...state,
    message: null,
    status: RequestStatus.success,
  }))
  .handleAction(createUser.failure, (state, action) => ({
    ...state,
    data: null,
    message: action.payload.message,
    status: RequestStatus.error,
  }))
  .handleAction(clearUser, state => ({
    ...state,
    data: null,
    message: null,
    status: RequestStatus.idle,
  }));
export default sigInReducer;
