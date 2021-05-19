import React from 'react';
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
  const mockAllItems = dataAll.map((el) => ({
    ...el,
    isRedeemed: Math.floor(Math.random() * 10) >= 5 //assign random value
  }));
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
          hasButton: true,
          isRedeemed: false // just for dev
        };
      }
    );

    return _.sortBy([...listOfMatches, ...listOfDoesntMatches], ['name']);
  };

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
            Nft name
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
              renderData.map((item, index) => (
                <Item
                  key={item.id}
                  id={item.id}
                  link={item.permalink}
                  name={item.name}
                  openModal={showModalHandler}
                  addExtraToFormState={addExtraToFormState}
                  signMessage={signMessage}
                  hasButton={item.hasButton}
                  isRedeemed={
                    renderData.length === index + 1 || item.isRedeemed
                  } //TO-DO: replace with api data, Mock Last item as redeemed
                />
              ))}
          </>
        )}
      </div>
      <Modal
        className={
          isSigned
            ? 'redeem-root__modal redeem-root__modal--form'
            : 'redeem-root__modal'
        }
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
            <OwnForm initialFormState={initialFormState} onSubmit={onSubmit} />
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
