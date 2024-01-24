import { IRequest } from '@/models/iRequest';

export type Product = {
  createdAt: string;
  nome: string;
  avatar: string;
  preco: string;
  qt_estoque: number;
  qt_vendas: number;
  marca: string;
  id: string;
};

export interface ProductsResponse {
  data: Product[];
}

export type ProductsRequest = {
  nome: string;
  avatar: string;
  preco: string;
  qt_estoque: number;
  qt_vendas: number;
  marca: string;
};

export interface IProduct {
  createProduct: IRequest<string>;
  updateProduct: IRequest<string>;
  deleteProduct: IRequest<string>;
  getAll: IRequest<Product[]>;
  selectedProduct: Product | null;
}
