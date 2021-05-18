import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  imgPath,
  DAZN_PUBLIC_LINK,
  OPENSEA_COLLECTION_LINK
} from '../../const';
import { useWindowInfo } from '../../hooks/useWindowInfo';
import './Header.scss';

const Header = ({
  isUsedOnSecondaryPage,
  secondaryTitle,
  children,
  promoBanner,
  description,
  language,
  setLanguage,
  changeLanguage,
  betweenLogosSection,
  redeemOnlyTitle,
  displayLanguageSwitcher
}) => {
  const { t } = useTranslation();
  const { isPhone } = useWindowInfo();
  const phone = isPhone();

  useEffect(() => {
    // setLanguage(getLanguageFromStorage());
  }, []);

  return (
    <header className='header'>
      {isUsedOnSecondaryPage ? (
        <nav className='header__navigation-secondary'>
          <div className='header__dazn-logo'>
            <a target='_blank' href={DAZN_PUBLIC_LINK}>
              <img
                className='header__dazn-img'
                src={imgPath + 'DAZN-logo.png'}
                alt='DAZN'
              />
            </a>
          </div>
          <h1 className='header__secondary-title'>{secondaryTitle}</h1>
          {displayLanguageSwitcher && (
            <ul className='header__language-list-secondary'>
              <li
                className={`header__button${
                  language === 'en' ? ' active' : ''
                }`}
                onClick={() => {
                  changeLanguage('en');
                  setLanguage('en');
                }}
              >
                En
              </li>
              <li
                className={`header__button${
                  language === 'es' ? ' active' : ''
                }`}
                onClick={() => {
                  changeLanguage('es');
                  setLanguage('es');
                }}
              >
                Es
              </li>
            </ul>
          )}
        </nav>
      ) : (
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
          {displayLanguageSwitcher && (
            <div className='header__terms-language'>
              <ul className='header__language-list'>
                <li
                  // style={{ visibility: 'hidden' }}
                  className={`header__button${
                    language === 'en' ? ' active' : ''
                  }`}
                  onClick={() => {
                    changeLanguage('en');
                    setLanguage('en');
                  }}
                >
                  En
                </li>
                <li
                  // style={{ visibility: 'hidden' }}
                  className={`header__button${
                    language === 'es' ? ' active' : ''
                  }`}
                  onClick={() => {
                    changeLanguage('es');
                    setLanguage('es');
                  }}
                >
                  Es
                </li>
              </ul>
            </div>
          )}
        </nav>
      )}
      {promoBanner && promoBanner}
      {redeemOnlyTitle && redeemOnlyTitle}
      {description && description}
      <div className='header__inner'>
        <div className='header__img-wrapper header__img-wrapper--first'>
          <img
            className='header__logo1'
            src={imgPath + 'logo.png'}
            alt='logo'
          />
        </div>
        <div className='header__text-wrapper'>{betweenLogosSection}</div>
        <div className='header__img-wrapper header__img-wrapper--second'>
          <img
            className='header__logo3'
            src={imgPath + 'RGB_white_red.png'}
            alt='logo'
          />
        </div>
      </div>
      <div className='header__miscellaneous'>{children}</div>
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
