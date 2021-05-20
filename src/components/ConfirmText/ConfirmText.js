import React from 'react';
import PropTypes from 'prop-types';

import './ConfirmText.scss';

export const ConfirmText = ({ handleRemove, onCancel, title }) => {
  return (
    <div className='confirm-text'>
      <h3 className='text-center'>
        Are you sure you want to remove <br />
        <span>{title}</span>?
      </h3>
      <div className='flex-space-around'>
        <button className='button-form' type='button' onClick={handleRemove}>
          Yes
        </button>
        <button className='button-form' type='button' onClick={onCancel}>
          No
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
