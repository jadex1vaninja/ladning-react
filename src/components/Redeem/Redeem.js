import React, { useEffect } from 'react';
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
  const mockAllItems = dataAll.map((el) => ({ ...el, isRedeemed: true }));
  const mockMyItems = data.map((el) => ({ ...el, isRedeemed: false }));

  const findCoincidence = (allItems, myItems) => {
    const result = [];

    // for (let i = 0; i < allItems.length; i += 1) {
    //   if (myItems[i].id) {
    //     if (
    //       allItems[i].id === myItems[i].id &&
    //       myItems[i].isRedeemed === false
    //     ) {
    //       const temp = {
    //         ...allItems[i],
    //         isRedeemed: false,
    //         hasButton: true
    //       };
    //       result.push(temp);
    //     }
    //   } else {
    //     const temp = {
    //       ...allItems[i],
    //       hasButton: false
    //     };
    //     result.push(temp);
    //   }
    // }
  };
  // findCoincidence(mockAllItems, mockMyItems);
  const renderData = findCoincidence(mockAllItems, mockMyItems);

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
          <p className='redeem-root__preview-header-text redeem-root__preview-header-text--name'>
            NFT
          </p>
          <p className='redeem-root__preview-header-text redeem-root__preview-header-text--id'>
            Token Id
          </p>
          <p className='redeem-root__preview-header-text redeem-root__preview-header-text--isRedeemed'>
            REDEEMED?
          </p>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {Boolean(mockAllItems.length) &&
              mockAllItems.map((item) => (
                <Item
                  key={item.id}
                  id={item.id}
                  link={item.permalink}
                  name={item.name}
                  openModal={showModalHandler}
                  addExtraToFormState={addExtraToFormState}
                  signMessage={signMessage}
                  hasButton={item.hasButton}
                  isRedeemed={item.isRedeemed} //TO-DO: replace with api data
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
