import { del, get, post, put } from '@/apis';

import { ProductsRequest } from './types';

export const getAll = () =>
  get({
    url: '/produto',
  });

export const create = (data: ProductsRequest) =>
  post({
    url: '/produto',
    data,
  });

export const update = (data: ProductsRequest) =>
  put({
    url: '/produto',
    data,
  });

export const remove = (id: string) =>
  del({
    url: `/produto/${id}`,
  });
