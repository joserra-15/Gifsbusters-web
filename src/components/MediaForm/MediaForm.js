import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { validationSchema } from '../../utils/validationSchema';
import { useDispatch } from 'react-redux';
import { Spinner } from '../Spinner/Spinner';

import './MediaForm.scss';

export const MediaForm = ({
  defaultTitle,
  defaultType,
  handleCancel,
  handleSubmit,
  loading,
}) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { title: defaultTitle, type: defaultType },
    validationSchema: validationSchema.mediaForm,
    onSubmit: values => handleSubmit(values),
  });

  return loading ? (
    <Spinner />
  ) : (
    <form className='mediaForm' onSubmit={formik.handleSubmit}>
      <div className='input-group'>
        <input
          type='text'
          className='input-group__input'
          name='title'
          id='title'
          placeholder='&nbsp;'
          autoComplete='off'
          onChange={formik.handleChange}
          value={formik.values.title}
          required
        />
        <label className='input-group__label' htmlFor='title'>
          Title
        </label>
      </div>
      {formik.touched.title && formik.errors.title && (
        <div className='m-10'>{formik.errors.title}</div>
      )}

      <div className='flex-space-between'>
        <div className='input-group'>
          <input
            type='radio'
            name='type'
            id='typeGif'
            checked={formik.values.type === 'gif'}
            onChange={() => formik.setFieldValue('type', 'gif')}
            value='gif'
          />
          <label htmlFor='typeGif'>Gif</label>
        </div>

        <div className='input-group'>
          <input
            type='radio'
            name='type'
            id='typeMeme'
            checked={formik.values.type === 'meme'}
            onChange={() => formik.setFieldValue('type', 'meme')}
            value='meme'
          />
          <label htmlFor='typeMeme'>Meme</label>
        </div>
      </div>
      {formik.touched.type && formik.errors.type && (
        <div className='m-10'>{formik.errors.type}</div>
      )}

      <div className='flex-space-around w-full'>
        <button type='button' className='button-form' onClick={handleCancel}>
          cancel
        </button>
        <button type='submit' className='button-form'>
          submit
        </button>
      </div>
    </form>
  );
};

MediaForm.propTypes = {
  defaultTitle: PropTypes.string,
  defaultType: PropTypes.string,
  handleCancel: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

MediaForm.defaultProps = {
  defaultTitle: '',
  defaultType: 'gif',
};
