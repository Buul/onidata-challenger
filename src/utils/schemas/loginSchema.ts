import * as Yup from 'yup';

import ValidationRules from '../validations/validationsSchemas';

export const loginSchema = Yup.object().shape({
  email: ValidationRules.Email(),
  password: ValidationRules.Required(),
});
