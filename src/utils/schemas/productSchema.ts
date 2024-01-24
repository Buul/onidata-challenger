import * as Yup from 'yup';

import ValidationRules from '../validations/validationsSchemas';

export const productSchema = Yup.object().shape({
  name: ValidationRules.Required(),
  price: ValidationRules.Required(),
  inventory: ValidationRules.Required(),
  sales: ValidationRules.Required(),
  brandName: ValidationRules.Required(),
  imageSrc: ValidationRules.FileRequired(),
});
