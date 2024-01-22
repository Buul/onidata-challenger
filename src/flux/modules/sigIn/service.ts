import { get } from '@/apis';

import { SigInRequest } from './types';

export const login = (data: SigInRequest) =>
  get({
    url: `/user?search=${data.email}`,
  });
