import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { AiOutlineMinusSquare } from 'react-icons/ai';

import './ModalLayout.scss';

Modal.setAppElement('#root');

export const ModalLayout = ({ isOpen, handleClose, children, ...props }) => {
  return (
    <Modal
      className='Modal'
      overlayClassName='Overlay'
      onRequestClose={handleClose}
      isOpen={isOpen}
      closeTimeoutMS={200}
      {...props}>
      <section>
        <button
          type='button'
          className='button-bg-none button-icon modal-button-close'
          onClick={handleClose}>
          <AiOutlineMinusSquare />
        </button>
      </section>
      <section className='modal-wrapper'>{children}</section>
    </Modal>
  );
};

ModalLayout.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
