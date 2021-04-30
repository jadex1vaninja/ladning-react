import React from 'react';
import { useTranslation } from 'react-i18next';
import './NFT.scss';

const NFT = ({ img, type, title, description, rarity, isActive }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`cards-root__card-content ${
        !isActive && 'cards-root__card-content--disabled'
      }`}
    >
      <img src={img} alt='card' />
      <div className='cards-root__content-wrapper'>
        <div className='cards-root__inner'>
          <h4
            className={`cards-root__card-title cards-root__card-title--${type}`}
          >
            {type}
          </h4>
          <h3 className='first-description'>{title}</h3>
          <div className='cards-root__hr'></div>
        </div>
        <div className='cards-root__auction-wrapper'>
          <p className='cards-root__amount'>{rarity}</p>
          <p className='cards-root__desc'>{description}</p>
          <a className='cards-root__link' href=''>
            {t('marketplace.ntfs.legendary.link')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NFT;
