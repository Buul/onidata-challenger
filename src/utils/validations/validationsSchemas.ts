import * as Yup from 'yup';

import { validCpf } from './cpf';
import { isDate, isPastDate } from './date';

export default {
  Required() {
    return Yup.string().required('Campo obrigatório.');
  },
  FileRequired() {
    return Yup.string().required('Adicione um arquivo.');
  },
  Email() {
    return Yup.string()
      .email('E-mail incorreto.')
      .required('Campo não pode estar vazio.');
  },
  Cpf() {
    return Yup.string()
      .required('Você precisa informar o seu CPF.')
      .test('cpf', 'Verifique os seus dados', (value: string) => {
        if (value) {
          return validCpf(value);
        }
        return true;
      });
  },
  BirthDate() {
    return Yup.string()
      .required('Campo obrigatório.')
      .test('validDate', 'Data inválida.', value => {
        if (value) {
          return isDate(value) && isPastDate(value);
        }
        return true;
      });
  },
  Cep() {
    return Yup.string()
      .required('Campo obrigatório.')
      .test('validCep', 'Cep inválido.', value => {
        if (value) {
          const cepNoMask = value.replace('-', '');
          return cepNoMask.length === 8;
        }
        return false;
      });
  },
};
