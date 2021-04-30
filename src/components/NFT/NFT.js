import React from 'react';
import { useTranslation } from 'react-i18next';
import { LINK_TO_LIVE } from '../../const';
import './NFT.scss';

const NFT = ({ img, type, title, description, rarity, isActive, link }) => {
  const { t } = useTranslation();
  const separateType = type.split('-').pop();

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
            className={`cards-root__card-title cards-root__card-title--${separateType}`}
          >
            {t(type)}
          </h4>
          <h3
            className='first-description'
            dangerouslySetInnerHTML={{ __html: t(title) }}
          />
          <div className='cards-root__hr' />
        </div>
        <div className='cards-root__auction-wrapper'>
          <p className='cards-root__amount'>{t(rarity)}</p>
          <p className='cards-root__desc'>{t(description)}</p>
          <a className='cards-root__link' href={LINK_TO_LIVE + link}>
            {t('NFTs.link-text')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NFT;
