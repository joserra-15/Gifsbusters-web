import React from 'react';
import { useDispatch } from 'react-redux';
import Tab from '../../components/Tab';
import { useFormik } from 'formik';
import { FcGoogle } from 'react-icons/fc';
import {
  signUpWithEmailRequest,
  signUpWithGoogleRequest,
} from '../../redux/auth/auth-actions';
import { validationSchema } from '../../utils/validationSchema';

export const Register = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema.login,
    onSubmit: values => {
      dispatch(signUpWithEmailRequest(values.email, values.password));
    },
  });

  function handleLoginWithGoogle(e) {
    e.preventDefault();
    dispatch(signUpWithGoogleRequest());
  }

  return (
    <div className='App-container-login'>
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
              Password
            </label>
          </div>
          {formik.touched.password && formik.errors.password && (
            <div className='m-10'>{formik.errors.password}</div>
          )}
          <button type='submit' className='button-form w-full'>
            Submit
          </button>
        </form>
      </div>
      <button
        type='button'
        className='button-form m-20'
        onClick={handleLoginWithGoogle}>
        <FcGoogle /> | Login With Google
      </button>
    </div>
  );
};
