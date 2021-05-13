import React, { useState } from 'react';
import Button from '../Button';
import './Item.scss';

const Item = ({ id, name,link, openModal, signMessage }) => {
  const [isRedeemed, setIsRedeemed] = useState(false);
  return (
    <div className='item'>
      <div className='item__name'>
        <h2>
          <a href={link} target="_blank">
          {name}

          </a>
        </h2>
      </div>
      <div className='item__description'>
        <div className='item__btn-wrapper'>
          <Button
            ctaText='Redeem'
            onClick={() => {
              openModal();
              signMessage()
                .then(() => setIsRedeemed(true))
                .catch(() => setIsRedeemed(false));
            }}
            isDisabled={!!isRedeemed}
          />
        </div>
        <p>{id}</p>
      </div>
    </div>
  );
};

export default Item;
