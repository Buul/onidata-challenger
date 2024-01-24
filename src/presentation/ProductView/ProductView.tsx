import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
} from '@mui/material';
import { isEmpty } from 'lodash';

import { Alert, Typography } from '@/components';
import {
  clearDeleteProduct,
  deleteProduct,
} from '@/flux/modules/products/actions';
import {
  useDeleteProduct,
  useSelectedProduct,
} from '@/hook/selectors/productsHooks';
import { useAppDispatch } from '@/hook/store';
import { RequestStatus } from '@/models/iRequest';

import * as S from './ProductView.styled';

export const ProductViewPresentation: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const { status } = useDeleteProduct();

  const selectedProduct = useSelectedProduct();

  const [message, setMessage] = useState<string>('');
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (status === RequestStatus.success) {
      setMessage('Produto deletado com sucesso!');
      dispatch(clearDeleteProduct());
      setTimeout(() => navigate('/produtos'), 2000);
    }
  }, [status]);

  useEffect(() => {
    if (isEmpty(selectedProduct)) {
      navigate('/produtos');
    }
  }, [pathname]);

  const handleDelete = () => {
    setMessage('');
    setOpen(false);
    if (selectedProduct) {
      dispatch(deleteProduct.request(selectedProduct.id));
    }
  };

  const handleEdit = () => navigate('/editar-produto');

  return (
    <S.Wrapper>
      <S.Header>
        <Typography variant="title" align="center" spacing="xs">
          Informações do produto
        </Typography>

        <IconButton onClick={handleEdit} color="primary" size="large">
          <EditIcon />
        </IconButton>

        <IconButton onClick={handleClickOpen} color="error" size="large">
          <DeleteIcon />
        </IconButton>
      </S.Header>
      <S.Form>
        <S.AvatarWrapper>
          <Avatar
            sx={{ width: 100, height: 100 }}
            src={selectedProduct?.avatar}
          />
        </S.AvatarWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="subTitle" spacing="xs">
              Nome: {selectedProduct?.nome}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subTitle" spacing="xs">
              Marca: {selectedProduct?.marca}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subTitle" spacing="xs">
              Qtd Estoque: {selectedProduct?.qt_estoque}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subTitle" spacing="xs">
              Qtd Vendas: {selectedProduct?.qt_vendas}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subTitle" spacing="xs">
              Preço: R${selectedProduct?.preco.replace('.', ',')}
            </Typography>
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Deletar produto</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tem certeza que deseja apagar este produto?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete}>Sim</Button>
          <Button onClick={handleClose} autoFocus>
            Voltar
          </Button>
        </DialogActions>
      </Dialog>
    </S.Wrapper>
  );
};
