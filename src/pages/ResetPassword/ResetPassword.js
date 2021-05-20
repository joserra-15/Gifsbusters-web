import React from 'react';
import Tab from '../../components/Tab';
import { useFormik } from 'formik';
import { validationSchema } from '../../utils/validationSchema';
import { useDispatch } from 'react-redux';
import { sendPasswordResetEmail } from '../../redux/auth/auth-actions';
import { useTranslation } from 'react-i18next';

export const ResetPassword = () => {
  const dispatch = useDispatch();
  const [t] = useTranslation('global');
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema.ResetPassword,
    onSubmit: values => {
      dispatch(sendPasswordResetEmail(values.email));
    },
  });
  return (
    <div className='App-container-login container'>
      <div className='form-container'>
        <Tab />
        <form className='form' onSubmit={formik.handleSubmit}>
          <div className='input-group'>
            <input
              className='input-group__input'
              type='email'
              placeholder='&nbsp;'
              name='email'
              id='email'
              autoComplete='off'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              required
            />
            <label className='input-group__label' htmlFor='email'>
              Email
            </label>
          </div>
          {formik.touched.email && formik.errors.email && (
            <div className='m-10'>{formik.errors.email}</div>
          )}
          <button type='submit' className='button-form w-full'>
            {t('login.submit')}
          </button>
        </form>
      </div>
    </div>
  );
};
