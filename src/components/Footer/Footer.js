import React from 'react';
import { imgPath } from '../../const';
import './Footer.scss';

const Footer = () => {
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
        <div className='footer__inner'>
          <div className='footer__img-wrapper'>
            <img className='footer__logo1' src={imgPath + 'logo.png'} alt='' />
          </div>
          <div className='footer__text-wrapper'>
            <a href='https://www.dazn.com/?utm_source=NFT&utm_medium=referral&utm_campaign=NFT'>
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
              alt=''
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
