import React from 'react';
import { useTranslation } from 'react-i18next';
import { dazn_link } from '../../const';
import { imgPath } from '../Landing/Landing';
import './Footer.scss';

const Footer = () => {
  const { i18n } = useTranslation();
  const language = i18n.language;
  const IS_SPANISH = language === 'es';
  return (
    <footer className='footer'>
      <div className='footer__banner'>
        <img
          className='footer__banner-img'
          src={imgPath + 'new-footer-bg.jpg'}
          alt='footer'
        />
        <div className='footer__face-container'>
          {
            <img
              className='footer__face-img'
              src={
                IS_SPANISH
                  ? imgPath + 'face-fearless-es.png'
                  : imgPath + 'face-fearless.png'
              }
              alt='face the fearless'
            />
          }
        </div>
        <div className='footer__inner'>
          <div className='footer__img-wrapper'>
            <img
              className='footer__logo1'
              src={imgPath + 'Canelo-Logo.png'}
              alt='canelo-logo'
            />
          </div>
          <div className='footer__text-wrapper'>
            <a target='_blank' rel='noreferrer' href={dazn_link}>
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
              src={imgPath + 'RGB_white_red.png'}
              alt=''
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
