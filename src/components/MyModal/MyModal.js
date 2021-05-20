import React from 'react';
import { Modal } from 'react-bootstrap';

const MyModal = ({ showModal, closeModal, isSigned, children }) => {
  return (
    <Modal
      className={
        isSigned
          ? 'redeem-root__modal redeem-root__modal--form'
          : 'redeem-root__modal'
      }
      show={showModal}
      onHide={closeModal}
      backdrop='static'
      keyboard={false}
      centered
      animation={false}
    >
      <Modal.Header className='redeem-root__modal-head' closeButton />
      <Modal.Body className='redeem-root__modal-body'>{children}</Modal.Body>
    </Modal>
  );
};

export default MyModal;
