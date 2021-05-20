import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { HiOutlineUpload } from 'react-icons/hi';
import { validationSchema } from '../../utils/validationSchema';
import Dropzone from '../../components/Dropzone';
import MediaForm from '../../components/MediaForm';
import { uploadMedia, uploadReset } from '../../redux/upload/upload-actions';
import { uploadSelector } from '../../redux/upload/upload-selectors';
import { useTranslation } from 'react-i18next';

import './Upload.scss';

export const Upload = () => {
  const dispatch = useDispatch();
  const [t] = useTranslation('global');
  const { isUploading, uploadSucces } = useSelector(uploadSelector);
  const [loadFile, setIsLoadFile] = useState(null);
  const formik = useFormik({
    initialValues: { url: '' },
    validationSchema: validationSchema.upload,
    onSubmit: values => {
      setIsLoadFile(values.url);
    },
  });

  useEffect(() => {
    dispatch(uploadReset());
    return () => {
      setIsLoadFile(null);
    };
  }, [dispatch]);

  useEffect(() => {
    if (uploadSucces) {
      setIsLoadFile(null);
    }
  }, [uploadSucces]);

  const handleUploadFiles = file => {
    setIsLoadFile(file);
  };

  const handleCancel = useCallback(() => {
    setIsLoadFile(null);
  }, []);

  const handleSubmit = ({ type, title }) => {
    dispatch(uploadMedia({ file: loadFile, type, title }));
  };

  return (
    <div className='container'>
      <div className='upload'>
        {loadFile ? (
          <MediaForm
            handleCancel={handleCancel}
            handleSubmit={handleSubmit}
            loading={isUploading}
            success={uploadSucces}
          />
        ) : (
          <>
            <section>
              <h3>{t('upload.upload-files')}</h3>
              <Dropzone
                onFileSelected={files => {
                  handleUploadFiles(files[0]);
                }}
              />
            </section>
            <section>
              <h3>{t('upload.any-url')}</h3>
              <form
                className='w-full flex flex-align-center'
                onSubmit={formik.handleSubmit}>
                <input
                  type='text'
                  className='input-group__input'
                  name='url'
                  id='url'
                  autoComplete='off'
                  placeholder={t('upload.enter-any-media-or-GIF-URL')}
                  aria-label='url'
                  onChange={formik.handleChange}
                  value={formik.values.url}
                />
                <button
                  type='submit'
                  className='button-form button-min-width button-icon p-0'>
                  <HiOutlineUpload />
                </button>
              </form>
              {formik.touched.url && formik.errors.url && (
                <div className='m-10'>{formik.errors.url}</div>
              )}
            </section>
          </>
        )}
      </div>
    </div>
  );
};
