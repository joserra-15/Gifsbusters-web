import React from 'react';
import { func } from 'prop-types';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import './Dropzone.scss';

export const Dropzone = ({ onFileSelected }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: '.gif, .png, .jpg, .svg',
    maxFiles: 1,
    maxSize: 5242880,
    onDropAccepted: onFileSelected,
  });
  const [t] = useTranslation('global');

  return (
    <div className='flex-justify-center'>
      <section className='dropzone'>
        <div
          {...getRootProps({ className: 'dropzone' })}
          className='dropzone_container'>
          <input {...getInputProps()} id='dropzoneInput' />
          <p className='text-center'>
            {t('upload.drag-n-drop-some-files-here-or-click-to-select-files')}
          </p>
        </div>
      </section>
    </div>
  );
};

Dropzone.propTypes = {
  onFileSelected: func,
};

Dropzone.defaultProps = {
  onFileSelected: _ => {},
};
