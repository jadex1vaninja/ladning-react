import React, { useEffect, useState } from 'react';
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
  promoBanner
}) => {
  const [language, setLanguage] = useState('en');
  const [showMore, setShowMore] = useState(false);
  const { t, i18n } = useTranslation();
  const { isPhone } = useWindowInfo();
  const phone = isPhone();
  const IS_SPANISH = language === 'es';
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
          <ul
            className='header__language-list-secondary'
            // style={{ visibility: 'hidden' }}
          >
            <li
              // style={{ visibility: 'hidden' }}
              className={`header__button${language === 'en' ? ' active' : ''}`}
              onClick={() => {
                changeLanguage('en');
                setLanguage('en');
              }}
            >
              En
            </li>
            <li
              // style={{ visibility: 'hidden' }}
              className={`header__button${language === 'es' ? ' active' : ''}`}
              onClick={() => {
                changeLanguage('es');
                setLanguage('es');
              }}
            >
              Es
            </li>
          </ul>
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
        </nav>
      )}
      {promoBanner && promoBanner}
      {!isUsedOnSecondaryPage && (
        <div className='header__description'>
          <p className='header__description-text'>
            {t('header.description.text')}
          </p>
          {/* TODO: ADD LINK */}
          {!showMore && !IS_SPANISH && (
            <span
              onClick={() => setShowMore(true)}
              className='header__description-link'
            >
              {t('header.description.link')}
            </span>
          )}
          {showMore && !IS_SPANISH && (
            <>
              <br></br>
              <p className='header__description-text'>
                {t('header.read-more.text')}
              </p>
              <br></br>
              <ul className='header__list'>
                <li
                  dangerouslySetInnerHTML={{
                    __html: t('header.read-more.tale')
                  }}
                />
                <li
                  dangerouslySetInnerHTML={{
                    __html: t('header.read-more.knockout')
                  }}
                />
                <li
                  dangerouslySetInnerHTML={{
                    __html: t('header.read-more.prediction')
                  }}
                />
                <li
                  dangerouslySetInnerHTML={{
                    __html: t('header.read-more.post-fight')
                  }}
                />
              </ul>
              <span
                className='header__description-link'
                onClick={() => setShowMore(false)}
              >
                {t('header.description.link-less')}
              </span>
            </>
          )}
        </div>
      )}
      {!isUsedOnSecondaryPage && (
        <div className='header__inner'>
          <div className='header__img-wrapper header__img-wrapper--first'>
            <img
              className='header__logo1'
              src={imgPath + 'logo.png'}
              alt='logo'
            />
          </div>

          <div className='header__text-wrapper'>
            <h1 className='header__title'>{t('header.title')}</h1>
            <a
              className='text-center'
              target='_blank'
              href={OPENSEA_COLLECTION_LINK}
            >
              <span className='header__text'>{t('header.sub-title')}</span>
            </a>
          </div>
          <div className='header__img-wrapper header__img-wrapper--second'>
            <img
              className='header__logo3'
              src={imgPath + 'RGB_white_red.png'}
              alt='logo'
            />
          </div>
        </div>
      )}
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
