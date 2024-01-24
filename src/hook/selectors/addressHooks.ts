import { Address } from '@/flux/modules/address/types';
import { useSelector } from '@/flux/selector';
import { RootState } from '@/flux/store';
import { IRequest } from '@/models/iRequest';

export const useAddress = (): IRequest<Address> =>
  useSelector((state: RootState) => state.address);
