import { AxiosError } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import { GenericErrorType } from '@/models/errors';

import { getAddress } from './actions';
import { getAddressByCep } from './service';
import { AddressResponse } from './types';

function* getAddressSaga({
  payload,
}: ReturnType<typeof getAddress.request>): Generator {
  try {
    const response: AddressResponse = (yield call(
      getAddressByCep,
      payload
    )) as AddressResponse;
    if (response.data.erro) {
      const errors = new Error(GenericErrorType.Request404);
      yield put(getAddress.failure(errors));
    }
    yield put(getAddress.success(response.data));
  } catch (err) {
    const errors = err as Error | AxiosError;
    yield put(getAddress.failure(errors));
  }
}

export default [takeEvery(getAddress.request, getAddressSaga)];
