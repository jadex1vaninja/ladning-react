import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { imgPath } from '../../const';
import { useWindowInfo } from '../../hooks/useWindowInfo';
import './Header.scss';

const Header = () => {
  const [language, setLanguage] = useState('en');
  const { t, i18n } = useTranslation();
  const { isPhone } = useWindowInfo();
  const phone = isPhone();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const getLanguageFromStorage = () => {
    const lang = localStorage.getItem('i18nextLng') || 'en';
    return lang;
  };

  useEffect(() => {
    setLanguage(getLanguageFromStorage());
  }, []);

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
          <li className='header__nav-item'>
            {t('header.nav-list.nav-auction')}
          </li>
          <li className='header__nav-item'>{t('header.nav-list.nav-faq')}</li>
          <li className='header__nav-item'>{t('header.nav-list.nav-dazn')}</li>
        </ul>
        <div className='header__terms-language'>
          <ul className='header__terms-list'>
            <li className='header__terms-item'>
              <a href='#terms'>{t('header.list.list-t&c')}</a>
            </li>
            <li className='header__terms-item'>
              <a href='#terms'>{t('header.list.list-privacy')}</a>
            </li>
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
          {t('header.description.text')}
        </p>
        <a href='' className='header__description-link'>
          {t('header.description.link')}
        </a>
      </div>
      <div className='header__inner'>
        <div className='header__img-wrapper'>
          <img className='header__logo1' src={imgPath + 'logo.png'} alt='' />
        </div>
        <div className='header__buttons-wrapper'>
          <button className='header__CTA'>{t('header.buttons.btn-one')}</button>
          <button className='header__CTA'>{t('header.buttons.btn-two')}</button>
        </div>
        <div className='header__img-wrapper'>
          <img
            className='header__logo3'
            src={imgPath + 'matchroom-logo.png'}
            alt=''
          />
        </div>
      </div>
      <div className='header__banner'>
        <img
          className='header__banner-img'
          src={
            !phone
              ? imgPath + 'DAZN-header-bg.png'
              : imgPath + 'DAZN_NFT_Website_Mobile_01.png'
          }
          alt='logo'
        />
      </div>
    </header>
  );
};

export default Header;
