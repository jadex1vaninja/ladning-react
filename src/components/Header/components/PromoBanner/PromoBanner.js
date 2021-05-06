import React from 'react';
import { useTranslation } from 'react-i18next';
import { imgPath } from '../../../../const';

const PromoBanner = () => {
  const { t } = useTranslation();

  return (
    <div className='header__promo'>
      <img
        className='header__promo-img'
        src={imgPath + 'promo.png'}
        alt='promo'
      />
      <p
        className='header__promo-text'
        dangerouslySetInnerHTML={{ __html: t('header.promo-text') }}
      />
    </div>
  );
};

export default PromoBanner;
