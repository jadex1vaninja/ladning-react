import React, { useEffect } from 'react';
import _ from 'lodash';
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
  const mockAllItems = dataAll.map((el) => ({ ...el, isRedeemed: false }));
  const mockMyItems = data
    .map((el) => ({ ...el, isRedeemed: false }))
    .filter((el) => !el.isRedeemed);

  const findCoincidence = (allItems, myItems) => {
    const listOfDoesntMatches = allItems
      .filter((element) => {
        return myItems.every((el) => el.token_id !== element.token_id);
      })
      .map((e) => ({
        ...e,
        hasButton: false
      }));

    const listOfMatches = _.intersectionBy(allItems, myItems, 'token_id').map(
      (e) => {
        return {
          ...e,
          hasButton: true
        };
      }
    );
    console.log(listOfMatches);
    return [...listOfMatches, ...listOfDoesntMatches];
  };

  const renderData = findCoincidence(mockAllItems, mockMyItems);
  console.log(renderData);
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
            {Boolean(renderData.length) &&
              renderData.map((item) => (
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
        className='redeem-root__modal'
        show={showModal}
        onHide={closeModalHandler}
        backdrop='static'
        keyboard={false}
        centered
        animation={false}
      >
        <Modal.Header className='redeem-root__modal-head' closeButton />
        <Modal.Body className='redeem-root__modal-body'>
          {isSigned ? (
            <OwnForm
              initialFormState={initialFormState}
              onSubmit={onSubmit}
              closeModalHandler={closeModalHandler}
            />
          ) : (
            <div className='redeem-root__alert'>
              <div className='redeem-root__alert-head'>
                Sign transaction please:
              </div>
              <div className='redeem-root__alert-body'>
                <p className='redeem-root__alert-body-text'>Secret Code:</p>
                <p className='redeem-root__alert-body-value'>{secretMessage}</p>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Redeem;
