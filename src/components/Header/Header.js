import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { imgPath, DAZN_PUBLIC_LINK, OPENSEA_COLLECTION_LINK } from '../../const';
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
          <a target='_blank' rel='noopener noreferrer' href={DAZN_PUBLIC_LINK}>
            <img
              className='header__dazn-img'
              src={imgPath + 'DAZN-logo.png'}
              alt='DAZN'
            />
          </a>
        </div>
        <ul className='header__nav-list'>
          <a className='header__nav-item' href='#auction'>
            {t('header.nav-list.nav-auction')}
          </a>
          <a className='header__nav-item' href='#faq'>
            {t('header.nav-list.nav-faq')}
          </a>
          <a
            className='header__nav-item'
            target='_blank'
            rel='noopener noreferrer'
            href={DAZN_PUBLIC_LINK}
          >
            {t('header.nav-list.nav-dazn')}
          </a>
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
        {/* TODO: ADD LINK */}
        <a href='' className='header__description-link'>
          {t('header.description.link')}
        </a>
      </div>
      <div className='header__inner'>
        <div className='header__img-wrapper header__img-wrapper--first'>
          <img className='header__logo1' src={imgPath + 'logo.png'} alt='' />
        </div>
        <div className='header__buttons-wrapper'>
          <button
            onClick={() => window.open(OPENSEA_COLLECTION_LINK, '_blank')}
            className='header__CTA'
          >
            {t('header.buttons.btn-one')}
          </button>
          <button
            onClick={() => window.open(DAZN_PUBLIC_LINK, '_blank')}
            className='header__CTA'
          >
            {t('header.buttons.btn-two')}
          </button>
        </div>
        <div className='header__img-wrapper header__img-wrapper--second'>
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
              : imgPath + 'DAZN_NFT_LandingPage_Mobile.png'
          }
          alt='logo'
        />
      </div>
    </header>
  );
};

export default Header;
