import React, { useEffect, useState } from 'react';
import {
  DAZN_PUBLIC_LINK,
  imgPath,
  OPENSEA_COLLECTION_LINK
} from '../../../../const';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const [language, setLanguage] = useState('en');
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const getLanguageFromStorage = () => {
    const lang = 'en'; //localStorage.getItem('i18nextLng') || 'en';
    return lang;
  };

  useEffect(() => {
    setLanguage(getLanguageFromStorage());
  }, []);

  return (
    <nav className='header__navigation'>
      <div className='header__dazn-logo'>
        <a target='_blank' href={DAZN_PUBLIC_LINK}>
          <img
            className='header__dazn-img'
            src={imgPath + 'DAZN-logo.png'}
            alt='DAZN'
          />
        </a>
      </div>
      <ul className='header__nav-list'>
        <li className='header__nav-item'>
          <a
            className='header__nav-link c'
            target='_blank'
            href={OPENSEA_COLLECTION_LINK}
          >
            {t('header.nav-list.nav-auction')}
          </a>
        </li>
        <li className='header__nav-item'>
          <a
            className='header__nav-link'
            style={{ textTransform: 'none' }}
            href='/faq'
            target='_blank'
          >
            {t('header.nav-list.nav-faq')}
          </a>
        </li>
        <li className='header__nav-item'>
          <a className='header__nav-link' href='#auction'>
            {t('header.nav-list.nav-artwork')}
          </a>
        </li>
      </ul>
      <div className='header__dazn-logo' style={{ visibility: 'hidden' }}>
        <a target='_blank' href={DAZN_PUBLIC_LINK}>
          <img
            className='header__dazn-img'
            src={imgPath + 'DAZN-logo.png'}
            alt='DAZN'
          />
        </a>
      </div>
      <div className='header__terms-language' style={{ display: 'none' }}>
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
            style={{ visibility: 'hidden' }}
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
  );
};

export default Navigation;
