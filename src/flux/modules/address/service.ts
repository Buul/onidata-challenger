import { get } from '@/apis';

export const getAddressByCep = (cep: string) =>
  get({
    baseURL: import.meta.env.VITE_APP_LINK_ZIP_SEARCH,
    url: `/${cep}/json`,
  });
