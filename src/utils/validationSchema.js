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
  upload: Yup.object({
    url: Yup.string()
      .url('Enter correct url!')
      .required('Please enter website'),
  }),
  mediaForm: Yup.object({
    title: Yup.string()
      .min(3, 'Must be 3 characters or more')
      .max(30, 'Must be 3 characters or less')
      .required('Please enter title'),
    type: Yup.string().required('A radio option is required'),
  }),
  user: Yup.object({
    userName: Yup.string()
      .min(3, 'Must be 3 characters or more')
      .max(30, 'Must be 3 characters or less')
      .required('Please enter username'),
    image: Yup.string().required('A radio option is required'),
  }),
  search: Yup.object({
    filter: Yup.array().min(1).required('Required'),
    search: Yup.string().required('Please enter search'),
  }),
};
