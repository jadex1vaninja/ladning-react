import React from 'react';
import { Modal } from 'react-bootstrap';
import { Spinner } from '../shared/SVG/Spinner';
import Item from '../Item';
import OwnForm from '../Form';
import './Reedem.scss';

const Redeem = ({
  isSigned,
  signMessage,
  isEthereum,
  error,
  loading,
  data,
  showModalHandler,
  closeModalHandler,
  showModal,
  initialFormState,
  addExtraToFormState,
  onSubmit,
  closeErrorNotification
}) => {
  console.log(data);
  return (
    <div className='redeem-root'>
      {!isEthereum && (
        <div className='redeem-root__error'>
          <h1>Missing Metamask</h1>
          <p>Install Metamask please</p>
        </div>
      )}
      {error && (
        <div className='redeem-root__error'>
          <p
            className='redeem-root__error-close'
            onClick={closeErrorNotification}
          >
            X
          </p>
          <h1>Error</h1>
          <p>Something goes wrong...</p>
        </div>
      )}

      <div className='redeem-root__preview'>
        <div className='redeem-root__preview-header'>
          <p className='redeem-root__preview-header-text'>NFT</p>
          <p className='redeem-root__preview-header-text'>Token Id</p>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {Boolean(data.length) &&
              data.map((item) => (
                <Item
                  key={item.id}
                  id={item.id}
                  link={item.permalink}
                  name={item.name}
                  openModal={showModalHandler}
                  addExtraToFormState={addExtraToFormState}
                  signMessage={signMessage}
                />
              ))}
          </>
        )}
      </div>
      <Modal
        show={showModal}
        onHide={closeModalHandler}
        backdrop='static'
        keyboard={false}
        centered
        animation={false}
      >
        <Modal.Header closeButton />
        <Modal.Body>
          {isSigned ? (
            <OwnForm
              initialFormState={initialFormState}
              onSubmit={onSubmit}
              closeModalHandler={closeModalHandler}
            />
          ) : (
            <div>Sign transaction please</div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Redeem;
