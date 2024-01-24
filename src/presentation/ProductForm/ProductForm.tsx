import { ChangeEvent, FC, useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { useLocation, useNavigate } from 'react-router-dom';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Avatar,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useFormik } from 'formik';
import { isEmpty } from 'lodash';

import { Alert, Typography } from '@/components';
import {
  clearCreateProduct,
  clearUpdateProduct,
  createProduct,
  updateProduct,
} from '@/flux/modules/products/actions';
import {
  useCreateProduct,
  useSelectedProduct,
  useUpdateProduct,
} from '@/hook/selectors/productsHooks';
import { useAppDispatch } from '@/hook/store';
import { RequestStatus } from '@/models/iRequest';
import { productSchema } from '@/utils/schemas';

import * as S from './ProductForm.styled';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export const ProductFormPresentation: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const { status: statusCreateProduct } = useCreateProduct();
  const { status: statusUpdateProduct } = useUpdateProduct();

  const selectedProduct = useSelectedProduct();

  const [message, setMessage] = useState<string>('');
  const [image, setImage] = useState<any>(null);

  const isEditMode = pathname === '/editar-produto';

  useEffect(() => {
    if (statusCreateProduct === RequestStatus.success) {
      setMessage('Produto cadastrado com sucesso!');
      dispatch(clearCreateProduct());
      setTimeout(() => navigate('/produtos'), 2000);
    }
  }, [statusCreateProduct]);

  useEffect(() => {
    if (statusUpdateProduct === RequestStatus.success) {
      setMessage('Produto atualizado com sucesso!');
      dispatch(clearUpdateProduct());
      setTimeout(() => navigate('/produtos'), 2000);
    }
  }, [statusUpdateProduct]);

  useEffect(() => {
    if (!isEmpty(selectedProduct)) {
      formik.setFieldValue('name', selectedProduct.nome);
      formik.setFieldValue('price', selectedProduct.preco);
      formik.setFieldValue('inventory', selectedProduct.qt_estoque);
      formik.setFieldValue('sales', selectedProduct.qt_vendas);
      formik.setFieldValue('brandName', selectedProduct.marca);
      formik.setFieldValue('imageSrc', selectedProduct.avatar);
      formik.setFieldTouched('name', false);
      formik.setFieldTouched('price', false);
      formik.setFieldTouched('inventory', false);
      formik.setFieldTouched('sales', false);
      formik.setFieldTouched('brandName', false);
      formik.setFieldTouched('imageSrc', false);
      setImage(selectedProduct.avatar);
    }
  }, [selectedProduct]);

  useEffect(() => {
    if (isEmpty(selectedProduct) && isEditMode) {
      navigate('/produtos');
    }
  }, [pathname]);

  const handleSubmit = () => {
    setMessage('');
    const { name, price, inventory, sales, brandName } = formik.values;

    if (isEditMode) {
      dispatch(
        updateProduct.request({
          nome: name,
          avatar: image,
          preco: price,
          qt_estoque: +inventory,
          qt_vendas: +sales,
          marca: brandName,
        })
      );
    } else {
      dispatch(
        createProduct.request({
          nome: name,
          avatar: image,
          preco: price,
          qt_estoque: +inventory,
          qt_vendas: +sales,
          marca: brandName,
        })
      );
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      inventory: '',
      sales: '',
      brandName: '',
      imageSrc: '',
    },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: handleSubmit,
    validationSchema: () => productSchema,
  });

  const toBase64 = (file: File) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });

  const handleChangeFile = async (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const input = e.target as HTMLInputElement;
    if (!input.files?.length) {
      return;
    }
    const file = input.files[0];
    const fileBase64 = await toBase64(file);
    formik.setFieldValue('imageSrc', fileBase64);
    setImage(fileBase64);
  };

  return (
    <S.Wrapper>
      <Typography variant="title" align="center" spacing="xs">
        {`${isEditMode ? 'Editar' : 'Cadastrar'} produto`}
      </Typography>
      <S.Form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              error={
                (formik.touched.name && formik.errors.name && true) || false
              }
              id="name"
              label="Nome"
              placeholder="Digite o nome do produto"
              helperText={(formik.touched.name && formik.errors.name) || ''}
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              error={
                (formik.touched.brandName && formik.errors.brandName && true) ||
                false
              }
              id="brandName"
              label="Marca"
              placeholder="Digite a marca"
              helperText={
                (formik.touched.brandName && formik.errors.brandName) || ''
              }
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.brandName}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <CurrencyFormat
              customInput={TextField}
              prefix="R$"
              thousandSeparator="."
              decimalSeparator=","
              decimalScale={2}
              fixedDecimalScale
              allowNegative={false}
              id="price"
              label="Preço"
              fullWidth
              placeholder="Digite o preço"
              value={formik.values.price}
              helperText={(formik.touched.price && formik.errors.price) || ''}
              variant="outlined"
              onChange={formik.handleChange}
              error={
                (formik.touched.price && formik.errors.price && true) || false
              }
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              error={
                (formik.touched.inventory && formik.errors.inventory && true) ||
                false
              }
              id="inventory"
              label="Qtd Estoque"
              type="number"
              placeholder="Digite a quantidade"
              helperText={
                (formik.touched.inventory && formik.errors.inventory) || ''
              }
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.inventory}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              error={
                (formik.touched.sales && formik.errors.sales && true) || false
              }
              id="sales"
              label="Qtd Vendas"
              type="number"
              placeholder="Digite a quantidade"
              helperText={(formik.touched.sales && formik.errors.sales) || ''}
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.sales}
            />
          </Grid>

          {(!image && (
            <Grid item xs={12}>
              <FormControl
                fullWidth
                error={
                  (formik.touched.imageSrc && formik.errors.imageSrc && true) ||
                  false
                }
                variant="standard"
              >
                <Button
                  fullWidth
                  component="label"
                  variant="outlined"
                  startIcon={<CloudUploadIcon />}
                >
                  Adicionar avatar
                  <VisuallyHiddenInput
                    onChange={handleChangeFile}
                    accept="image/jpeg"
                    type="file"
                  />
                </Button>
                <FormHelperText id="component-error-text">
                  {(formik.touched.imageSrc && formik.errors.imageSrc) || ''}
                </FormHelperText>
              </FormControl>
            </Grid>
          )) || (
            <S.AvatarWrapper>
              <Avatar sx={{ width: 100, height: 100 }} src={image} />
              <Button onClick={() => setImage(null)}>Remover</Button>
            </S.AvatarWrapper>
          )}

          <Grid item xs={12}>
            <LoadingButton
              fullWidth
              variant="contained"
              type="submit"
              size="large"
              loading={statusCreateProduct === RequestStatus.fetching}
            >
              Salvar
            </LoadingButton>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => navigate('/produtos')}
            >
              Voltar
            </Button>
          </Grid>

          {message && (
            <Grid item xs={12}>
              <Alert spacing="md" fullWidth variant="success">
                {message}
              </Alert>
            </Grid>
          )}
        </Grid>
      </S.Form>
    </S.Wrapper>
  );
};
