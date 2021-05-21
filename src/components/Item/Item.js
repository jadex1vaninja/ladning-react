import React from 'react';
import Button from '../Button';
import './Item.scss';

const Item = ({
  id,
  name,
  link,
  openModal,
  signMessage,
  hasButton,
  isRedeemed,
  token,
  addExtraToFormState
}) => {
  const sliceText = (string) => {
    return `${String(string).slice(0, 5)}...`;
  };
  // const [isRedeemedState, setIsRedeemedState] = useState(false);

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
              onClick={async () => {
                openModal();
                const signature = await signMessage();
                addExtraToFormState(token, signature);
              }}
              isDisabled={!isRedeemed}
            />
          )}
        </div>
        <p>{sliceText(id)}</p>
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
