import React from 'react';
import _ from 'lodash';
import { Spinner } from '../shared/SVG/Spinner';
import Item from '../Item';
import OwnForm from '../Form';
import MyModal from '../MyModal';
import './Reedem.scss';

const Redeem = ({
  walletID,
  isSigned,
  signMessage,
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
  const findCoincidence = (allItems, myItems) => {
    const listOfDifference = _.differenceBy(allItems, myItems, 'token_id').map(
      (e) => ({
        ...e,
        hasButton: false
      })
    );

    const listOfMatches = _.intersectionBy(allItems, myItems, 'token_id').map(
      (e) => {
        let checkIfIHaveRedeemed = false;
        if (e.whoRedeemed) {
          checkIfIHaveRedeemed = e.whoRedeemed.includes(walletID.toUpperCase());
        }
        return {
          ...e,
          checkIfIHaveRedeemed,
          hasButton: !checkIfIHaveRedeemed
        };
      }
    );
    console.log(listOfMatches);
    return _.sortBy([...listOfMatches, ...listOfDifference], ['name']);
  };

  const renderData = findCoincidence(dataAll, data);

  return (
    <div className='redeem-root'>
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
                  token={item.token_id}
                  isRedeemed={item.isRedeemed}
                />
              ))}
          </>
        )}
      </div>
      <MyModal
        showModal={showModal}
        closeModal={closeModalHandler}
        isSigned={isSigned}
        showCloseBtn
      >
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
      </MyModal>
    </div>
  );
};

export default Redeem;
