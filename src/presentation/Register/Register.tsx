import { FC, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import { Button, Grid, MenuItem, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useFormik } from 'formik';
import moment from 'moment';

import { Alert, Container, Form, Typography } from '@/components';
import { clearUser, createUser } from '@/flux/modules/user/actions';
import { useUser } from '@/hook/selectors/userHooks';
import { useAppDispatch } from '@/hook/store';
import { RequestStatus } from '@/models/iRequest';
import { registerSchema } from '@/utils/schemas';

import { AddressForm } from './AddressForm';

export const RegisterPresentation: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { status } = useUser();

  const [message, setMessage] = useState<string>('');
  const [birthDate, setBirthDate] = useState(null);

  useEffect(() => {
    if (status === RequestStatus.success) {
      setMessage('Usuário cadastrado com sucesso!');
      dispatch(clearUser());
    }
  }, [status]);

  const handleSubmit = () => {
    setMessage('');
    const {
      email,
      cpf,
      firstName,
      lastName,
      password,
      gender,
      birthDate: birthDateStr,
      cep,
      city,
      uf,
      address,
      district,
      complement,
    } = formik.values;

    dispatch(
      createUser.request({
        nome: firstName,
        sobrenome: lastName,
        cpf: cpf.replace(/\D/g, ''),
        sexo: gender,
        dt_nascimento: birthDateStr,
        cep,
        cidade: city,
        estado: uf,
        logradouro: address,
        bairro: district,
        complemento: complement,
        email,
        senha: password,
      })
    );
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      cpf: '',
      firstName: '',
      lastName: '',
      password: '',
      gender: '',
      birthDate: '',
      cep: '',
      city: '',
      uf: '',
      address: '',
      district: '',
      complement: '',
    },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: handleSubmit,
    validationSchema: () => registerSchema,
  });

  return (
    <Container style={{ height: '100vh' }}>
      <Typography variant="title" align="center" spacing="xs">
        Registre-se
      </Typography>

      <Typography variant="subTitle" align="center">
        INFORME OS SEUS DADOS PESSOAIS E ENDEREÇO
      </Typography>
      <Form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              error={
                (formik.touched.firstName && formik.errors.firstName && true) ||
                false
              }
              id="firstName"
              label="Nome"
              placeholder="Digite seu nome"
              helperText={
                (formik.touched.firstName && formik.errors.firstName) || ''
              }
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              error={
                (formik.touched.lastName && formik.errors.lastName && true) ||
                false
              }
              id="lastName"
              label="Sobrenome"
              placeholder="Digite seu sobrenome"
              value={formik.values.lastName}
              helperText={
                (formik.touched.lastName && formik.errors.lastName) || ''
              }
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputMask
              mask="999.999.999-99"
              maskPlaceholder={null}
              value={formik.values.cpf}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <TextField
                id="cpf"
                label="CPF"
                placeholder="Digite seu CPF"
                fullWidth
                error={
                  (formik.touched.cpf && formik.errors.cpf && true) || false
                }
                helperText={(formik.touched.cpf && formik.errors.cpf) || ''}
                variant="outlined"
              />
            </InputMask>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              value={formik.values.email}
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
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              error={
                (formik.touched.password && formik.errors.password && true) ||
                false
              }
              value={formik.values.password}
              id="password"
              type="password"
              label="Senha"
              placeholder="Digite sua senha"
              helperText={
                (formik.touched.password && formik.errors.password) || ''
              }
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              id="gender"
              select
              label="Sexo"
              value={formik.values.gender}
              variant="outlined"
              onChange={(e: React.ChangeEvent<{ value: string }>) => {
                formik.setFieldValue('gender', e.target.value);
              }}
              onBlur={(e: React.ChangeEvent<{ value: string }>) => {
                if (!e.target.value) {
                  formik.setFieldTouched('gender', true, true);
                }
                formik.handleBlur(e);
              }}
              helperText={(formik.touched.gender && formik.errors.gender) || ''}
              fullWidth
              error={
                (formik.touched.gender && formik.errors.gender && true) || false
              }
            >
              <MenuItem value="FEMININO">FEMININO</MenuItem>
              <MenuItem value="MASCULINO">MASCULINO</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} md={4}>
            <DatePicker
              disableFuture
              label="Data de nascimento"
              format="DD/MM/YYYY"
              value={birthDate}
              onChange={(value: any) => {
                if (value) {
                  setBirthDate(value);
                  formik.setFieldValue(
                    'birthDate',
                    moment(value?.$d.toISOString()).format('DD/MM/YYYY'),
                    true
                  );
                } else {
                  formik.setFieldValue('birthDate', '');
                }
              }}
              slotProps={{
                textField: {
                  onBlur: formik.handleBlur,
                  id: 'birthDate',
                  fullWidth: true,
                  variant: 'outlined',
                  error:
                    (formik.touched.birthDate &&
                      formik.errors.birthDate &&
                      true) ||
                    false,
                  helperText:
                    (formik.touched.birthDate && formik.errors.birthDate) || '',
                },
              }}
            />
          </Grid>
          <AddressForm formik={formik} />

          <Grid item xs={12}>
            <LoadingButton
              fullWidth
              variant="contained"
              type="submit"
              size="large"
              loading={status === RequestStatus.fetching}
            >
              Salvar
            </LoadingButton>
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" fullWidth onClick={() => navigate('/')}>
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
      </Form>
    </Container>
  );
};
