import React from 'react';
import { useTranslation } from 'react-i18next';
import { imgPath } from '../Landing/Landing';
import './OwnItSection.scss';

const OwnItSection = () => {
  const { t } = useTranslation();

  return (
    <section className='own-it'>
      <div className='own-it__item-wrapper'>
        <div className='own-it__item'>
          <img src={imgPath + 'nft-legend.png'} alt='card' />
          <div className='own-it__item-content'>
            <h2>{t('own-it-block.title')}</h2>
            <p>{t('own-it-block.description-part-one')}</p>
            <div className='own-it__sub-caption-section'>
              <p>{t('own-it-block.description-part-two')}</p>
              <p>{t('own-it-block.description-date')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnItSection;
