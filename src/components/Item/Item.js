import React, { useState, useRef } from 'react';
import { Tooltip, Overlay } from 'react-bootstrap';
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
  const sliceText = (string) => {
    return `${String(string).slice(0, 5)}...`;
  };
  const [isRedeemedState, setIsRedeemedState] = useState(false);
  // const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <div className='item'>
      <div className='item__name'>
        <h2>
          <a href={link} target='_blank'>
            {name}
          </a>
        </h2>
      </div>
      <div
        className='item__description'
        style={hasButton ? { justifyContent: 'space-between' } : {}}
      >
        <div className='item__btn-wrapper'>
          {hasButton && (
            <Button
              extraClassName='redeem-btn'
              ctaText='Redeem'
              onClick={() => {
                openModal();
                signMessage()
                  .then(() => {
                    // setIsRedeemedState(true);
                  })
                  .catch(() => setIsRedeemedState(false));
              }}
              isDisabled={!!isRedeemedState}
            />
          )}
        </div>
        <p
          // onMouseEnter={() => setShow(true)}
          // onMouseLeave={() => setShow(false)}
          ref={target}
        >
          {sliceText(id)}
          {/*<Overlay target={target.current} show={show} placement={'right'}>*/}
          {/*  {(props) => (*/}
          {/*    <Tooltip id='tooltip' {...props}>*/}
          {/*      {id}*/}
          {/*    </Tooltip>*/}
          {/*  )}*/}
          {/*</Overlay>*/}
        </p>
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
