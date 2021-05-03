import React from 'react';
import { useTranslation } from 'react-i18next';

const NFT = ({ img, type, title, description, rarity, link }) => {
  const { t } = useTranslation();

  return (
    <div className='cards-root__card-content'>
      <img src={img} alt='card' />
      <div className='cards-root__content-wrapper'>
        <div className='cards-root__inner'>
          <h4
            className={`cards-root__card-title cards-root__card-title--${type}`}
          >
            {type}
          </h4>
          <h3
            className='first-description'
            dangerouslySetInnerHTML={{ __html: t(`nft-card.${title}`) }}
          ></h3>
          <div className='cards-root__hr'></div>
        </div>
        <div className='cards-root__auction-wrapper'>
          <p className='cards-root__amount'>{t(`nft-card.${rarity}`)}</p>
          <p
            className='cards-root__desc'
            dangerouslySetInnerHTML={{ __html: t(`nft-card.${description}`) }}
          ></p>
          <a className='cards-root__link'>
            {t('nft-card.${link}')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NFT;
