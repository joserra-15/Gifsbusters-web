import * as Yup from 'yup';

export const validationSchema = {
  login: Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .min(6, 'Must be 6 characters or more')
      .required('Required'),
  }),
  ResetPassword: Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
  }),
};
