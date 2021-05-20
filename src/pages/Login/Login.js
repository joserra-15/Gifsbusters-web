import React from 'react';
import { Link } from 'react-router-dom';
import Tab from '../../components/Tab';
import ROUTES from '../../routes';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import {
  signInWithEmailRequest,
  signUpWithGoogleRequest,
} from '../../redux/auth/auth-actions';
import { validationSchema } from '../../utils/validationSchema';
import { useTranslation } from 'react-i18next';

export const Login = () => {
  const dispatch = useDispatch();
  const [t] = useTranslation('global');
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema.login,
    onSubmit: values => {
      dispatch(signInWithEmailRequest(values.email, values.password));
    },
  });

  function handleLoginWithGoogle(e) {
    e.preventDefault();
    dispatch(signUpWithGoogleRequest());
  }

  return (
    <div className='App-container-login container'>
      <div className='form-container'>
        <Tab />
        <form className='form' onSubmit={formik.handleSubmit}>
          <div className='input-group'>
            <input
              className='input-group__input'
              type='text'
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
          <div className='input-group'>
            <input
              className='input-group__input'
              type='password'
              name='password'
              placeholder='&nbsp;'
              id='password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              required
            />
            <label className='input-group__label' htmlFor='password'>
              {t('login.password')}
            </label>
          </div>
          {formik.touched.password && formik.errors.password && (
            <div className='m-10'>{formik.errors.password}</div>
          )}
          <div className='flex-space-between m-10'>
            <Link to={ROUTES.RESET_PASSWORD}>{t('login.forgot-password')}</Link>
          </div>
          <button type='submit' className='button-form w-full'>
            {t('login.submit')}
          </button>
        </form>
      </div>
      <button
        type='button'
        className='button-form m-20'
        onClick={handleLoginWithGoogle}>
        <FcGoogle /> | {t('login.login-with-google')}
      </button>
    </div>
  );
};
