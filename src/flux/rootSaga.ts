import { all } from 'redux-saga/effects';

import addressSaga from './modules/address/sagas';
import productsSaga from './modules/products/sagas';
import sigInSaga from './modules/sigIn/sagas';
import userSaga from './modules/user/sagas';

function* rootSaga() {
  yield all([...sigInSaga, ...addressSaga, ...userSaga, ...productsSaga]);
}

export default rootSaga;
