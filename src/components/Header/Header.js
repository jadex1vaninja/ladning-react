import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { imgPath } from '../Landing/Landing';
import { useWindowInfo } from '../../hooks/useWindowInfo';
import {dazn_link} from '../../const'
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
      <div className='header__language'>
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
      <div className='header__dazn-logo'>
        <a target='_blank' href={dazn_link}>
          <img
            className='header__dazn-img'
            src={imgPath + 'DAZN-logo.png'}
            alt='DAZN'
          />
        </a>
      </div>
      <div className='header__promo'>
        <img
          className='header__promo-img'
          src={imgPath + 'promo.png'}
          alt='promo'
        />
        <p className='header__promo-text'>{t('header.promo-text')}</p>
      </div>
      <div className='header__inner'>
        <div className='header__img-wrapper'>
          <img className='header__logo1' src={imgPath + 'logo.png'} alt='' />
        </div>
        <div className='header__text-wrapper'>
          <h1 className='header__title'>{t('header.title')}</h1>
          <a target='_blank' href={dazn_link}>
            <span className='header__text'>{t('header.sub-title')}</span>
          </a>
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
          <a href='#subscribe'>
            <button className='header__btn'>Learn More</button>
          </a>
          <a href='#carousel'>
            <button className='header__btn'>SEE ARTWORKS</button>
          </a>
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
