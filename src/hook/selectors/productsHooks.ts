import { Product } from '@/flux/modules/products/types';
import { useSelector } from '@/flux/selector';
import { RootState } from '@/flux/store';
import { IRequest } from '@/models/iRequest';

export const useProducts = (): IRequest<Product[]> =>
  useSelector((state: RootState) => state.products.getAll);

export const useCreateProduct = (): IRequest<string> =>
  useSelector((state: RootState) => state.products.createProduct);

export const useUpdateProduct = (): IRequest<string> =>
  useSelector((state: RootState) => state.products.updateProduct);

export const useSelectedProduct = () =>
  useSelector((state: RootState) => state.products.selectedProduct);

export const useDeleteProduct = (): IRequest<string> =>
  useSelector((state: RootState) => state.products.deleteProduct);
