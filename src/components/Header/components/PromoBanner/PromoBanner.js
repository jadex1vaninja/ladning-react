import React from 'react';
import { useTranslation } from 'react-i18next';
import { imgPath } from '../../../../const';

const PromoBanner = ({ language, isRedeemPage }) => {
  const { t } = useTranslation();

  return (
    <div
      className={
        isRedeemPage ? 'header__promo header__promo--redeem' : 'header__promo'
      }
    >
      <img
        className='header__promo-img'
        src={imgPath + 'promo.png'}
        alt='promo'
      />
      <p
        style={language === 'es' ? { letterSpacing: 5 } : {}}
        className='header__promo-text'
        dangerouslySetInnerHTML={{ __html: t('header.promo-text') }}
      />
    </div>
  );
};

export default PromoBanner;
