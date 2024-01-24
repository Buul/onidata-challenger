import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Avatar } from '@mui/material';
import {
  GridActionsCellItem,
  GridColDef,
  GridRenderCellParams,
  GridRowParams,
  GridValueFormatterParams,
} from '@mui/x-data-grid';
import { findIndex, uniqueId } from 'lodash';
import moment from 'moment';

import { Table } from '@/components';
import { getProducts, selectedProduct } from '@/flux/modules/products/actions';
import { Product } from '@/flux/modules/products/types';
import { useProducts } from '@/hook/selectors/productsHooks';
import { useAppDispatch } from '@/hook/store';
import { RequestStatus } from '@/models/iRequest';

import * as S from './Products.styled';
import { SearchBar } from './SearchBar';

export const ProductsPresentation: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { status, data } = useProducts();

  const [dataTable, setDataTable] = useState<Product[]>([]);
  const [dataTableFiltered, setDataTableFiltered] = useState<Product[]>([]);

  useEffect(() => {
    dispatch(getProducts.request());
  }, []);

  useEffect(() => {
    if (status === RequestStatus.success) {
      if (data) {
        setDataTable(data);
        setDataTableFiltered(
          data.map(product => ({
            ...product,
            id: uniqueId(),
          }))
        );
      }
    }
  }, [data]);

  const onShowProduct = (id?: string) => {
    const idx = findIndex(dataTableFiltered, ['id', id]);

    if (idx !== -1) {
      dispatch(selectedProduct(dataTableFiltered[idx]));
      navigate('/visualizar-produto');
    }
  };

  const onEditProduct = (id?: string) => {
    const idx = findIndex(dataTableFiltered, ['id', id]);

    if (idx !== -1) {
      dispatch(selectedProduct(dataTableFiltered[idx]));
      navigate('/editar-produto');
    }
  };

  const columns: GridColDef[] = [
    {
      field: 'avatar',
      sortable: false,
      headerName: '',
      renderCell: (params: GridRenderCellParams<Product, string>) => (
        <Avatar src={params.value} />
      ),
    },
    { field: 'nome', headerName: 'Nome', sortable: false, width: 180 },
    { field: 'marca', headerName: 'Marca', sortable: false, width: 180 },
    {
      field: 'preco',
      headerName: 'Preço',
      sortable: false,
      width: 100,
      valueFormatter: (params: GridValueFormatterParams<string>) => {
        if (params.value == null) {
          return '';
        }
        return `R$ ${params.value.replace('.', ',')}`;
      },
    },
    {
      field: 'qt_estoque',
      sortable: false,
      headerName: 'Qtd Estoque',
      type: 'number',
      width: 120,
      valueFormatter: (params: GridValueFormatterParams<number>) => {
        if (params.value == null) {
          return '';
        }
        return params.value.toLocaleString('pt-BR');
      },
    },
    {
      field: 'qt_vendas',
      headerName: 'Qtd Vendas',
      type: 'number',
      sortable: false,
      width: 140,
      valueFormatter: (params: GridValueFormatterParams<number>) => {
        if (params.value == null) {
          return '';
        }
        return params.value.toLocaleString('pt-BR');
      },
    },
    {
      field: 'createdAt',
      headerName: 'Data de criação',
      type: 'number',
      sortable: false,
      width: 160,
      renderCell: (params: GridRenderCellParams<any, string>) =>
        moment(params.value).format('DD/MM/YYYY'),
    },
    {
      field: 'actions',
      type: 'actions',
      sortable: false,
      width: 120,
      getActions: (params: GridRowParams<Product>) => [
        <GridActionsCellItem
          style={{ marginLeft: 20 }}
          icon={<VisibilityIcon />}
          label="Visualizar"
          onClick={() => onShowProduct(params.row.id)}
        />,
        <GridActionsCellItem
          style={{ marginLeft: 20 }}
          icon={<EditIcon />}
          label="Editar"
          onClick={() => onEditProduct(params.row.id)}
        />,
      ],
    },
  ];

  const handleChange = (value: string) => {
    const result = dataTable.filter((product: any) =>
      Object.keys(product).some(
        (key: any) =>
          product[key].toString().toLowerCase().indexOf(value.toLowerCase()) !==
          -1
      )
    );
    setDataTableFiltered(result);
  };

  return (
    <S.Wrapper>
      <SearchBar onChange={handleChange} />
      {dataTable.length > 0 && (
        <Table
          dataTable={dataTableFiltered}
          loading={status === RequestStatus.fetching}
          columns={columns}
        />
      )}
    </S.Wrapper>
  );
};
