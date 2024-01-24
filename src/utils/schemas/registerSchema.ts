import * as Yup from 'yup';

import ValidationRules from '../validations/validationsSchemas';

export const registerSchema = Yup.object().shape({
  email: ValidationRules.Email(),
  cpf: ValidationRules.Cpf(),
  firstName: ValidationRules.Required(),
  lastName: ValidationRules.Required(),
  password: ValidationRules.Required(),
  gender: ValidationRules.Required(),
  birthDate: ValidationRules.BirthDate(),
  cep: ValidationRules.Cep(),
  city: ValidationRules.Required(),
  uf: ValidationRules.Required(),
  address: ValidationRules.Required(),
  district: ValidationRules.Required(),
});
