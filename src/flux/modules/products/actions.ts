import { AxiosError } from 'axios';
import { createAction, createAsyncAction } from 'typesafe-actions';

import { Product, ProductsRequest } from './types';

export const getProducts = createAsyncAction(
  'GET_ALL_PRODUCTS_REQUEST',
  'GET_ALL_PRODUCTS_SUCCESS',
  'GET_ALL_PRODUCTS_ERROR'
)<undefined, Product[], Error | AxiosError>();

export const createProduct = createAsyncAction(
  'CREATE_PRODUCT_REQUEST',
  'CREATE_PRODUCT_SUCCESS',
  'CREATE_PRODUCT_ERROR'
)<ProductsRequest, undefined, Error | AxiosError>();

export const updateProduct = createAsyncAction(
  'UPDATE_PRODUCT_REQUEST',
  'UPDATE_PRODUCT_SUCCESS',
  'UPDATE_PRODUCT_ERROR'
)<ProductsRequest, undefined, Error | AxiosError>();

export const deleteProduct = createAsyncAction(
  'DELETE_PRODUCT_REQUEST',
  'DELETE_PRODUCT_SUCCESS',
  'DELETE_PRODUCT_ERROR'
)<string, undefined, Error | AxiosError>();

export const clearCreateProduct = createAction('CLEAR_CREATE_PRODUCT')();

export const clearDeleteProduct = createAction('CLEAR_DELETE_PRODUCT')();

export const clearUpdateProduct = createAction('CLEAR_UPDATE_PRODUCT')();

export const selectedProduct = createAction(
  'SELECTED_PRODUCT'
)<Product | null>();
