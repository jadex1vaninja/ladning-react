import React from 'react';
import { useTranslation } from 'react-i18next';

const NFT = ({ img, type, title, description, rarity }) => {
  const { t } = useTranslation();

  return (
    <div className='cards-root__card-content'>
      <img src={img} alt='card' />
      <div className='cards-root__content-wrapper'>
        <div className='cards-root__inner'>
          <h4 className='cards-root__card-title cards-root__card-title--legend'>
            {type}
          </h4>
          <h3 className='first-description'>{title}</h3>
          <h3 className='second-description'>{description}</h3>
          <div className='cards-root__hr'></div>
        </div>
        <div className='cards-root__auction-wrapper'>
          <p className='cards-root__amount'>{rarity}</p>
          <p className='cards-root__desc'>
            {t('marketplace.ntfs.legendary.description')}
          </p>
          <a className='cards-root__link' href=''>
            {t('marketplace.ntfs.legendary.link')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NFT;
