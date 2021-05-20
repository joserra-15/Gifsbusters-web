import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import './ConfirmText.scss';

export const ConfirmText = ({ handleRemove, onCancel, title }) => {
  const [t] = useTranslation('global');

  return (
    <div className='confirm-text'>
      <h3 className='text-center'>
        {t('confirmText.are-you-sure-you-want-to-remove')} <br />
        <span>{title}</span>?
      </h3>
      <div className='flex-space-around'>
        <button className='button-form' type='button' onClick={handleRemove}>
          {t('confirmText.yes')}
        </button>
        <button className='button-form' type='button' onClick={onCancel}>
          {t('confirmText.no')}
        </button>
      </div>
    </div>
  );
};

ConfirmText.propTypes = {
  handleRemove: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
