import { Action, createReducer } from 'typesafe-actions';

import { IRequest, RequestStatus } from '@/models/iRequest';

import { clearAddress, getAddress } from './actions';
import { Address } from './types';

const initialState: IRequest<Address> = {
  data: null,
  message: null,
  status: RequestStatus.idle,
};

const addressReducer = createReducer<IRequest<Address>, Action>(initialState)
  .handleAction(getAddress.request, state => ({
    ...state,
    data: null,
    message: null,
    status: RequestStatus.fetching,
  }))
  .handleAction(getAddress.success, (state, action) => ({
    ...state,
    data: action.payload,
    message: null,
    status: RequestStatus.success,
  }))
  .handleAction(getAddress.failure, (state, action) => ({
    ...state,
    data: null,
    message: action.payload.message,
    status: RequestStatus.error,
  }))
  .handleAction(clearAddress, state => ({
    ...state,
    data: null,
    message: null,
    status: RequestStatus.idle,
  }));

export default addressReducer;
