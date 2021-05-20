import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { validationSchema } from '../../utils/validationSchema';
import { imagesPreview } from '../../utils/utils';
import { useDispatch } from 'react-redux';
import { editUser } from '../../redux/userView/userView-actions';
import { useTranslation } from 'react-i18next';

import './UserForm.scss';

export const UserForm = ({ defaultUserName, defaultImg }) => {
  const dispatch = useDispatch();
  const [t] = useTranslation('global');
  const formik = useFormik({
    initialValues: {
      userName: defaultUserName,
      image: defaultImg,
    },
    validationSchema: validationSchema.user,
    onSubmit: values => {
      dispatch(editUser(values.userName, values.image));
    },
  });
  const [imgPreview, setImgPreview] = useState(defaultImg);

  const handleChange = e => {
    formik.setFieldValue('image', e.target.value);
    setImgPreview(e.target.value);
  };
  return (
    <>
      <section className='user-form__img-preview'>
        <img src={imgPreview} alt='user-profile' className='img' />
      </section>

      <form className='user-form' onSubmit={formik.handleSubmit}>
        <div className='flex-space-between'>
          {imagesPreview.map(imagePreview => (
            <div key={imagePreview} className='input-group'>
              <input
                type='radio'
                name='image'
                id={imagePreview}
                onChange={handleChange}
                value={imagePreview}
                className='none'
              />
              <label htmlFor={imagePreview}>
                <img
                  className={
                    formik.values.image === imagePreview
                      ? 'user-form__img user-form__img-border'
                      : 'user-form__img'
                  }
                  src={imagePreview}
                  alt='imgpreview'
                />
              </label>
            </div>
          ))}
        </div>

        <div className='input-group'>
          <input
            className='input-group__input'
            type='text'
            placeholder='&nbsp;'
            name='userName'
            id='userName'
            autoComplete='off'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userName}
            required
          />
          <label className='input-group__label' htmlFor='userName'>
            Username
          </label>
        </div>
        {formik.touched.userName && formik.errors.userName && (
          <div className='m-10'>{formik.errors.userName}</div>
        )}
        <button type='submit' className='button-form w-full'>
          {t('user.submit')}
        </button>
      </form>
    </>
  );
};

UserForm.propTypes = {
  defaultUserName: PropTypes.string,
  defaultImg: PropTypes.string.isRequired,
};

UserForm.defaultProps = {
  defaultUserName: '',
};
