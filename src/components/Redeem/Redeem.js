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
  dataAll,
  showModalHandler,
  closeModalHandler,
  showModal,
  initialFormState,
  addExtraToFormState,
  onSubmit,
  closeErrorNotification,
  secretMessage
}) => {
  console.log(secretMessage);
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
            {Boolean(data.length) && (
              <h2 className='redeem-root__title'>Your nfts</h2>
            )}
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
                  hasButton
                />
              ))}
            <h2 className='redeem-root__title'>Nfts</h2>
            {Boolean(dataAll.length) &&
              dataAll.map((item) => (
                <Item
                  key={item.id}
                  id={item.id}
                  link={item.permalink}
                  name={item.name}
                  openModal={showModalHandler}
                  addExtraToFormState={addExtraToFormState}
                  signMessage={signMessage}
                  hasButton={false}
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
            <div>
              Sign transaction please: Secret Code: <code>{secretMessage}</code>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Redeem;
