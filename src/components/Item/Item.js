import React from 'react';
import './Item.scss';

const Item = ({
  id,
  name,
  description,
  imageUrl,
  link,
  handleModal,
  handleID
}) => {
  return (
    <div className='item'>
      <div className='item__img'>
        <a
          className='item__link'
          href={link}
          rel='noopener noreferrer'
          target='_blank'
        >
          <img src={imageUrl} alt={name} />
        </a>
      </div>
      <div className='item__name'>
        <h2>{name}</h2>
      </div>
      <div className='item__description'>
        <p>{description}</p>
      </div>
      <div className='item__btn-wrap'>
        <button
          id={id}
          className='item__btn'
          onClick={() => {
            handleModal();
            handleID(id);
          }}
        >
          Redeem
        </button>
      </div>
    </div>
  );
};

export default Item;
