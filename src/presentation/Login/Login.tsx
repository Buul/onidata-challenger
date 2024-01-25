import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import { isEmpty } from 'lodash';

import LogoGov from '@/assets/logos/gov.svg';
import { Alert, Container, Divider, Form, Typography } from '@/components';
import { clearSigIn, sigIn } from '@/flux/modules/sigIn/actions';
import { useSigIn } from '@/hook/selectors/sigInHooks';
import { useAppDispatch } from '@/hook/store';
import { GenericErrorType } from '@/models/errors';
import { RequestStatus } from '@/models/iRequest';
import { loginSchema } from '@/utils/schemas';
import { isAuthenticated, login } from '@/utils/services/auth';

import * as S from './Login.styled';

export const LoginPresentation: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { status, message, data } = useSigIn();

  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/home');
    }
  }, []);

  useEffect(() => {
    if (status === RequestStatus.error) {
      if (message === GenericErrorType.Request401) {
        setErrorMessage('Email ou senha inválidos!');
      } else {
        setErrorMessage('Falha ao tentar efetuar o login');
      }
    }

    if (status === RequestStatus.success && !isEmpty(data)) {
      login(data.access);
      dispatch(clearSigIn());
      navigate('/home');
    }
  }, [status, message, data]);

  const handleSubmit = () => {
    setErrorMessage('');
    dispatch(
      sigIn.request({
        email: formik.values.email,
        password: formik.values.password,
      })
    );
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: handleSubmit,
    validationSchema: () => loginSchema,
  });

  return (
    <Container>
      <S.LogoWrapper>
        <img alt="logo gov" src={LogoGov} />
      </S.LogoWrapper>

      <Form onSubmit={formik.handleSubmit}>
        <Typography variant="title" align="center">
          Entrar
        </Typography>
        <Typography variant="subTitle" align="center">
          Insira seus dados para autenticar na plataforma
        </Typography>
        <Divider />
        <TextField
          margin="normal"
          error={(formik.touched.email && formik.errors.email && true) || false}
          id="email"
          label="Email"
          placeholder="Digite seu email"
          helperText={(formik.touched.email && formik.errors.email) || ''}
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <TextField
          margin="normal"
          error={
            (formik.touched.password && formik.errors.password && true) || false
          }
          id="password"
          type="password"
          label="Senha"
          placeholder="Digite sua senha"
          helperText={(formik.touched.password && formik.errors.password) || ''}
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <LoadingButton
          variant="contained"
          type="submit"
          size="large"
          loading={status === RequestStatus.fetching}
          sx={{
            margin: '20px 0',
          }}
        >
          Acessar
        </LoadingButton>
        {errorMessage && (
          <Alert spacing="md" fullWidth variant="error">
            {errorMessage}
          </Alert>
        )}
      </Form>
    </Container>
  );
};
