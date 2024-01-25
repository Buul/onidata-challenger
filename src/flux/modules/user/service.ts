import { get } from '@/apis';

export const getUser = () =>
  get({
    url: '/users/me/',
  });
