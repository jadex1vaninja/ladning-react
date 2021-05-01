import React from 'react';
import { useTranslation } from 'react-i18next';
import { imgPath, DAZN_PUBLIC_LINK } from '../../const';
import './Footer.scss';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className='footer'>
      <div className='footer__banner'>
        <img
          className='footer__banner-img'
          src={imgPath + 'new-footer-bg.png'}
          alt='footer'
        />
        <div className='footer__face-container'>
          <img
            className='footer__face-img'
            src={imgPath + 'face-fearless.png'}
            alt='face the fearless'
          />
        </div>
        <div className='footer__sign-block'>
          <p className='footer__text'>{t('footer.text')}</p>
          <a className='footer__CTA' target="_blank" href={DAZN_PUBLIC_LINK}>
            {t('footer.CTA')}
          </a>
        </div>
        <div className='footer__inner'>
          <div className='footer__img-wrapper'>
            <img
              className='footer__logo1'
              src={imgPath + 'logo.png'}
              alt='logo'
            />
          </div>
          <div className='footer__text-wrapper'>
            <a href={DAZN_PUBLIC_LINK}>
              <img
                className='footer__logo2'
                src={imgPath + 'DAZN-logo.png'}
                alt=''
              />
            </a>
          </div>
          <div className='footer__img-wrapper'>
            <img
              className='footer__logo3'
              src={imgPath + 'matchroom-logo.png'}
              alt='logo'
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
