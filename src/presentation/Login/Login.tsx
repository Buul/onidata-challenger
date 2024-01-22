import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import { Button, FormControl, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { isEmpty } from 'lodash';

import { Alert, Container, Form, Typography } from '@/components';
import { clearSigIn, sigIn } from '@/flux/modules/sigIn/actions';
import { useSigIn } from '@/hook/selectors/sigInHooks';
import { useAppDispatch } from '@/hook/store';
import { LoginErrorType } from '@/models/errors';
import { RequestStatus } from '@/models/iRequest';
import { loginSchema } from '@/utils/schemas';
import { login } from '@/utils/services/auth';

export const LoginPresentation: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { status, message, data } = useSigIn();

  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (status === RequestStatus.error) {
      if (message === LoginErrorType.NotAuthorizedException) {
        setErrorMessage('Email ou senha inválidos!');
      } else {
        setErrorMessage('Falha ao tentar efetuar o login');
      }
    }

    if (status === RequestStatus.success && !isEmpty(data)) {
      login(data.token);
      dispatch(clearSigIn());
      navigate('/produto');
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
      <Typography variant="title" align="center" spacing="xs">
        Faça seu Login
      </Typography>

      <Typography variant="subTitle" align="center">
        Informe seu email e senha para ter acesso ao conteúdo.
      </Typography>
      <Form onSubmit={formik.handleSubmit}>
        <FormControl>
          <TextField
            margin="normal"
            error={
              (formik.touched.email && formik.errors.email && true) || false
            }
            id="email"
            label="Email"
            placeholder="Digite seu email"
            helperText={(formik.touched.email && formik.errors.email) || ''}
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </FormControl>
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
          Continuar
        </LoadingButton>
        <Button onClick={() => navigate('/registrar')}>Registre-se</Button>
        {errorMessage && (
          <Alert spacing="md" fullWidth variant="error">
            {errorMessage}
          </Alert>
        )}
      </Form>
    </Container>
  );
};
