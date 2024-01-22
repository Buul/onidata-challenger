import { AxiosError } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import { GenericErrorType, LoginErrorType } from '@/models/errors';

import { sigIn } from './actions';
import { login } from './service';
import { SigInResponse } from './types';

function* sigInSaga({ payload }: ReturnType<typeof sigIn.request>): Generator {
  try {
    const response: SigInResponse = (yield call(
      login,
      payload
    )) as SigInResponse;
    if (payload.password !== response.data[0].senha) {
      const errors = new Error(LoginErrorType.NotAuthorizedException);
      yield put(sigIn.failure(errors));
    } else {
      yield put(sigIn.success(response.data[0]));
    }
  } catch (err) {
    let errors = err as Error | AxiosError;
    if (errors.message === GenericErrorType.Request404) {
      errors = new Error(LoginErrorType.NotAuthorizedException);
    }
    yield put(sigIn.failure(errors));
  }
}

export default [takeEvery(sigIn.request, sigInSaga)];
