import React from 'react';
import { useTranslation } from 'react-i18next';
import { imgPath, DAZN_PUBLIC_LINK } from '../../const';
import './Footer.scss';

const Footer = ({ isUsedOnSecondaryPage }) => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const IS_SPANISH = language === 'es';
  console.log(isUsedOnSecondaryPage, 'sad');
  console.log('footer' + (isUsedOnSecondaryPage ? ' low-height' : ''));
  return (
    <footer className={'footer' + (isUsedOnSecondaryPage ? ' low-height' : '')}>
      <div className='footer__banner'>
        <img
          className='footer__banner-img'
          src={imgPath + 'new-footer-bg.png'}
          alt='footer'
        />
        <div className='footer__face-container'>
          <img
            className='footer__face-img'
            src={
              IS_SPANISH
                ? imgPath + 'face-fearless-es.png'
                : imgPath + 'face-fearless.png'
            }
            alt='face the fearless'
          />
        </div>
        {!isUsedOnSecondaryPage && (
          <div className='footer__sign-block'>
            <div className='footer__btn-wrapper'>
              {/* TODO: LINK */}
              <a className='footer__CTA' target='_blank' href='/tcs'>
                {t('terms.CTA-one')}
              </a>
              <a className='footer__CTA' target='_blank' href='/privacy-policy'>
                {t('terms.CTA-two')}
              </a>
            </div>
          </div>
        )}
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
