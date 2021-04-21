import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.scss';
const imgPath = process.env.PUBLIC_URL + '/assets/img/';

const Header = () => {
  const [language, setLanguage] = useState('en');
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className='header'>
      <div className='header__buttons'>
        <button
          className={`header__button${language === 'es' ? ' active' : ''}`}
          onClick={() => {
            changeLanguage('es');
            setLanguage('es');
          }}
        >
          Es
        </button>
        <button
          className={`header__button${language === 'en' ? ' active' : ''}`}
          onClick={() => {
            changeLanguage('en');
            setLanguage('en');
          }}
        >
          En
        </button>
      </div>
      <div className='header__banner'>
        <img
          className='header__banner-img'
          src={imgPath + 'header-bg-new-desktop.png'}
          alt=''
        />
        <img
          className='header__banner-img header__banner-img--mobile'
          src={imgPath + 'header-img.png'}
          alt=''
        />
        <div className='header__inner'>
          <div className='header__img-wrapper'>
            <img className='header__logo1' src={imgPath + 'logo.png'} alt='' />
          </div>
          <div className='header__text-wrapper'>
            {/* <!-- <img className="header__logo2" src={imgPath+'may8.png'} alt="" /> --> */}
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
      </div>
    </header>
  );
};

export default Header;
