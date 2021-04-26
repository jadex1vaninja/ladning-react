import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { imgPath } from '../Landing/Landing';
import { useWindowInfo } from '../../hooks/useWindowInfo';
import './Header.scss';

const Header = () => {
  const [language, setLanguage] = useState('en');
  const { t, i18n } = useTranslation();
  const { isPhone } = useWindowInfo();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className='header'>
      <nav className='header__navigation'>
        <div className='header__dazn-logo'>
          <a href='https://www.dazn.com/?utm_source=NFT&utm_medium=referral&utm_campaign=NFT'>
            <img
              className='header__dazn-img'
              src={imgPath + 'DAZN-logo.png'}
              alt='DAZN'
            />
          </a>
        </div>
        <ul className='header__nav-list'>
          <li className='header__nav-item'>VIEW AUCTION</li>
          <li className='header__nav-item'>FAQs</li>
          <li className='header__nav-item'>DAZN</li>
        </ul>
        <div className='header__terms-language'>
          <ul className='header__terms-list'>
            <li className='header__terms-item'>T&Cs</li>
            <li className='header__terms-item'>Privacy Policy</li>
          </ul>
          <ul className='header__language-list'>
            <li
              className={`header__button${language === 'en' ? ' active' : ''}`}
              onClick={() => {
                changeLanguage('en');
                setLanguage('en');
              }}
            >
              En
            </li>
            <li
              className={`header__button${language === 'es' ? ' active' : ''}`}
              onClick={() => {
                changeLanguage('es');
                setLanguage('es');
              }}
            >
              Es
            </li>
          </ul>
        </div>
      </nav>
      <div className='header__promo'>
        <img
          className='header__promo-img'
          src={imgPath + 'promo.png'}
          alt='promo'
        />
        <p className='header__promo-text'>{t('header.promo-text')}</p>
      </div>
      <div className='header__description'>
        <p className='header__description-text'>
          The biggest fight of the year is set for May 8 at AT&T Stadium in
          Arlington, Texas, as WBA, WBC and Ring Magazine champion and the
          number one pound-for-pound fighter in the world, Canelo Alvarez, meets
          Billy Joe Saunders, the holder of the WBO belt, in a battle for super
          middleweight supremacy.
        </p>
        <a href='' className='header__description-link'>
          Read more about the NFT Drop
        </a>
      </div>
      <div className='header__inner'>
        <div className='header__img-wrapper'>
          <img className='header__logo1' src={imgPath + 'logo.png'} alt='' />
        </div>
        <div className='header__text-wrapper'>
          <h1 className='header__title'>{t('header.title')}</h1>
          <span className='header__text'>{t('header.sub-title')}</span>
        </div>
        <div className='header__img-wrapper'>
          <img
            className='header__logo3'
            src={imgPath + 'matchroom-logo.png'}
            alt=''
          />
        </div>
      </div>
      <div className='header__link-wrap'>
        <p className='header__link-text'>
          {t('header.link-text-one')}{' '}
          <a
            className='header__link'
            target='_blank'
            href='https://www.dazn.com/?utm_source=NFT&utm_medium=referral&utm_campaign=NFT'
          >
            {t('header.link-text-two')}
          </a>{' '}
          {t('header.link-text-three')}
        </p>
      </div>
      {!isPhone() && (
        <div className='header__banner'>
          <img
            className='header__banner-img'
            src={imgPath + 'bg_header.png'}
            alt='logo'
          />
        </div>
      )}
    </header>
  );
};

export default Header;
