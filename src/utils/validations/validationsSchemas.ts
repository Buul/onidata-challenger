import * as Yup from 'yup';

export default {
  Required() {
    return Yup.string().required('Campo obrigatório.');
  },
  Email() {
    return Yup.string()
      .email('E-mail incorreto')
      .required('Campo não pode estar vazio.');
  },
};
