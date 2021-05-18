import React, { useState } from 'react';
import Button from '../Button';
import './Item.scss';

const Item = ({
  id,
  name,
  link,
  openModal,
  signMessage,
  hasButton,
  isRedeemed
}) => {
  const [isRedeemedState, setIsRedeemedState] = useState(false);

  return (
    <div className='item'>
      <div className='item__name'>
        <h2>
          <a href={link} target='_blank'>
            {name}
          </a>
        </h2>
      </div>
      <div className='item__description'>
        <div className='item__btn-wrapper'>
          {hasButton && (
            <Button
              extraClassName='redeem-btn'
              ctaText='Redeem'
              onClick={() => {
                openModal();
                signMessage()
                  .then(() => {
                    setIsRedeemedState(true);
                  })
                  .catch(() => setIsRedeemedState(false));
              }}
              isDisabled={!!isRedeemedState}
            />
          )}
        </div>
        <p>{id}</p>
      </div>
      <div className='item__status'>
        <div
          className={
            isRedeemed ? 'item__sign item__sign--redeemed' : 'item__sign'
          }
        />
      </div>
    </div>
  );
};

export default Item;
