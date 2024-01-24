import { FC, useEffect } from 'react';
import InputMask from 'react-input-mask';
import { Grid, TextField } from '@mui/material';
import { FormikProps } from 'formik';
import { isEmpty } from 'lodash';

import { getAddress } from '@/flux/modules/address/actions';
import { useAddress } from '@/hook/selectors/addressHooks';
import { useAppDispatch } from '@/hook/store';
import { RequestStatus } from '@/models/iRequest';

type FormValues = {
  email: string;
  cpf: string;
  firstName: string;
  lastName: string;
  password: string;
  gender: string;
  birthDate: string;
  cep: string;
  city: string;
  uf: string;
  address: string;
  district: string;
  complement: string;
};

type Props = {
  formik: FormikProps<FormValues>;
};

export const AddressForm: FC<Props> = ({ formik }) => {
  const dispatch = useAppDispatch();
  const { status, data } = useAddress();

  useEffect(() => {
    if (status === RequestStatus.success && !isEmpty(data)) {
      formik.setFieldValue('address', data.logradouro);
      formik.setFieldValue('district', data.bairro);
      formik.setFieldValue('city', data.localidade);
      formik.setFieldValue('uf', data.uf);
    }
  }, [status, data]);

  const emptyAddressForm = () => {
    formik.setFieldValue('address', '');
    formik.setFieldValue('district', '');
    formik.setFieldValue('city', '');
    formik.setFieldValue('uf', '');
    formik.setFieldTouched('address', false);
    formik.setFieldTouched('district', false);
    formik.setFieldTouched('city', false);
    formik.setFieldTouched('uf', false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
    const cep = e.target.value.replace(/\D/g, '');
    if (cep.length === 8) {
      dispatch(getAddress.request(cep));
    } else {
      emptyAddressForm();
    }
  };

  return (
    <>
      <Grid item xs={12}>
        <InputMask
          mask="99999-999"
          maskPlaceholder={null}
          value={formik.values.cep}
          onChange={onChange}
          onBlur={formik.handleBlur}
        >
          <TextField
            id="cep"
            label="CEP"
            placeholder="Digite seu CEP"
            fullWidth
            error={(formik.touched.cep && formik.errors.cep && true) || false}
            helperText={(formik.touched.cep && formik.errors.cep) || ''}
            variant="outlined"
          />
        </InputMask>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          error={
            (formik.touched.address && formik.errors.address && true) || false
          }
          id="address"
          label="Endereço"
          placeholder="Digite seu endereço"
          helperText={(formik.touched.address && formik.errors.address) || ''}
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          error={
            (formik.touched.district && formik.errors.district && true) || false
          }
          id="district"
          label="Bairro"
          placeholder="Digite seu bairro"
          helperText={(formik.touched.district && formik.errors.district) || ''}
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.district}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          error={(formik.touched.city && formik.errors.city && true) || false}
          id="city"
          label="Cidade"
          placeholder="Digite sua cidade"
          helperText={(formik.touched.city && formik.errors.city) || ''}
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          error={(formik.touched.uf && formik.errors.uf && true) || false}
          id="uf"
          label="Estado"
          placeholder="Digite seu estado"
          helperText={(formik.touched.uf && formik.errors.uf) || ''}
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.uf}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          error={
            (formik.touched.complement && formik.errors.complement && true) ||
            false
          }
          id="complement"
          label="Complemento"
          placeholder="Digite o complemento"
          helperText={
            (formik.touched.complement && formik.errors.complement) || ''
          }
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.complement}
        />
      </Grid>
    </>
  );
};
