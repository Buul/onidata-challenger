import { User } from '@/flux/modules/sigIn/types';
import { useSelector } from '@/flux/selector';
import { RootState } from '@/flux/store';
import { IRequest } from '@/models/iRequest';

export const useSigIn = (): IRequest<User> =>
  useSelector((state: RootState) => state.sigIn);
