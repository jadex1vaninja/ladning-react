import React, { useEffect } from 'react';
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
  submitLoading,
  data,
  dataAll,
  showModalHandler,
  closeModalHandler,
  showModal,
  initialFormState,
  addExtraToFormState,
  onSubmit,
  closeErrorNotification,
  secretMessage,
  errorMessage,
  isRedeemed,
  closeRedeemWindow
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
          checkIfIHaveRedeemed = e.whoRedeemed.includes(walletID.toLowerCase());
        }
        return {
          ...e,
          checkIfIHaveRedeemed,
          hasButton: !checkIfIHaveRedeemed
        };
      }
    );
    return _.sortBy([...listOfMatches, ...listOfDifference], ['name']);
  };

  const renderData = findCoincidence(dataAll, data);
  useEffect(() => {}, [error]);

  return (
    <div className='redeem-root'>
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
                  id={item.token_id}
                  link={item.permalink}
                  name={item.name}
                  openModal={showModalHandler}
                  addExtraToFormState={addExtraToFormState}
                  signMessage={signMessage}
                  hasButton={item.hasButton}
                  token={item.token_id}
                  isRedeemed={
                    item.isRedeemed ||
                    item.checkIfIHaveRedeemed ||
                    item.possibleQuantityOfRedeem ===
                      item.currentQuantityOfRedeem
                  }
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
          <OwnForm
            initialFormState={initialFormState}
            onSubmit={onSubmit}
            loading={submitLoading}
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
      </MyModal>
      <MyModal
        showModal={error}
        showCloseBtn
        closeModal={closeErrorNotification}
      >
        <div className='redeem-root__error'>
          <h4 className='text-center'>{errorMessage.error}</h4>
          <p>Sorry for that...</p>
        </div>
      </MyModal>
      <MyModal showModal={isRedeemed} closeModal={closeRedeemWindow}>
        <div className='redeem-root__error'>
          <p>
            Thank you for redeeming your NFT. We will email you shortly with
            next steps.
          </p>
          <button onClick={() => window.location.reload()}>Ok</button>
        </div>
      </MyModal>
    </div>
  );
};

export default Redeem;
