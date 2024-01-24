import { Action, createReducer } from 'typesafe-actions';

import { RequestStatus } from '@/models/iRequest';

import {
  clearCreateProduct,
  clearDeleteProduct,
  clearUpdateProduct,
  createProduct as createProductAction,
  deleteProduct as deleteProductAction,
  getProducts,
  selectedProduct as selectedProductAction,
  updateProduct as updateProductAction,
} from './actions';
import { IProduct } from './types';

const initialState: IProduct = {
  createProduct: { data: null, message: null, status: RequestStatus.idle },
  updateProduct: { data: null, message: null, status: RequestStatus.idle },
  deleteProduct: { data: null, message: null, status: RequestStatus.idle },
  getAll: { data: null, message: null, status: RequestStatus.idle },
  selectedProduct: null,
};

const sigInReducer = createReducer<IProduct, Action>(initialState)
  .handleAction(getProducts.request, state => ({
    ...state,
    getAll: { data: null, message: null, status: RequestStatus.fetching },
  }))
  .handleAction(getProducts.success, (state, action) => ({
    ...state,
    getAll: {
      data: action.payload,
      message: null,
      status: RequestStatus.success,
    },
  }))
  .handleAction(getProducts.failure, (state, action) => ({
    ...state,
    getAll: {
      data: null,
      message: action.payload.message,
      status: RequestStatus.error,
    },
  }))
  .handleAction(createProductAction.failure, (state, action) => ({
    ...state,
    createProduct: {
      data: null,
      message: action.payload.message,
      status: RequestStatus.error,
    },
  }))
  .handleAction(createProductAction.request, state => ({
    ...state,
    createProduct: {
      data: null,
      message: null,
      status: RequestStatus.fetching,
    },
  }))
  .handleAction(createProductAction.success, state => ({
    ...state,
    createProduct: {
      data: null,
      message: null,
      status: RequestStatus.success,
    },
  }))
  .handleAction(deleteProductAction.failure, (state, action) => ({
    ...state,
    deleteProduct: {
      data: null,
      message: action.payload.message,
      status: RequestStatus.error,
    },
  }))
  .handleAction(deleteProductAction.request, state => ({
    ...state,
    deleteProduct: {
      data: null,
      message: null,
      status: RequestStatus.fetching,
    },
  }))
  .handleAction(deleteProductAction.success, state => ({
    ...state,
    deleteProduct: {
      data: null,
      message: null,
      status: RequestStatus.success,
    },
  }))
  .handleAction(updateProductAction.failure, (state, action) => ({
    ...state,
    updateProduct: {
      data: null,
      message: action.payload.message,
      status: RequestStatus.error,
    },
  }))
  .handleAction(updateProductAction.request, state => ({
    ...state,
    updateProduct: {
      data: null,
      message: null,
      status: RequestStatus.fetching,
    },
  }))
  .handleAction(updateProductAction.success, state => ({
    ...state,
    updateProduct: {
      data: null,
      message: null,
      status: RequestStatus.success,
    },
  }))
  .handleAction(clearCreateProduct, state => ({
    ...state,
    createProduct: {
      data: null,
      message: null,
      status: RequestStatus.idle,
    },
  }))
  .handleAction(clearUpdateProduct, state => ({
    ...state,
    updateProduct: {
      data: null,
      message: null,
      status: RequestStatus.idle,
    },
  }))
  .handleAction(clearDeleteProduct, state => ({
    ...state,
    deleteProduct: {
      data: null,
      message: null,
      status: RequestStatus.idle,
    },
  }))
  .handleAction(selectedProductAction, (state, action) => ({
    ...state,
    selectedProduct: action.payload,
  }));

export default sigInReducer;
