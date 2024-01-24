import { AxiosError } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from './actions';
import { create, getAll, remove, update } from './service';
import { ProductsResponse } from './types';

function* getProductsSaga(): Generator {
  try {
    const response: ProductsResponse = (yield call(getAll)) as ProductsResponse;

    yield put(getProducts.success(response.data));
  } catch (err) {
    const errors = err as Error | AxiosError;
    yield put(getProducts.failure(errors));
  }
}

function* createProductSaga({
  payload,
}: ReturnType<typeof createProduct.request>): Generator {
  try {
    yield call(create, payload);

    yield put(createProduct.success());
  } catch (err) {
    yield put(createProduct.success());
  }
}

function* updateProductSaga({
  payload,
}: ReturnType<typeof updateProduct.request>): Generator {
  try {
    yield call(update, payload);

    yield put(updateProduct.success());
  } catch (err) {
    yield put(updateProduct.success());
  }
}

function* deleteProductSaga({
  payload,
}: ReturnType<typeof deleteProduct.request>): Generator {
  try {
    yield call(remove, payload);

    yield put(deleteProduct.success());
  } catch (err) {
    yield put(deleteProduct.success());
  }
}

export default [
  takeEvery(getProducts.request, getProductsSaga),
  takeEvery(createProduct.request, createProductSaga),
  takeEvery(updateProduct.request, updateProductSaga),
  takeEvery(deleteProduct.request, deleteProductSaga),
];
