/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { dazn_link } from '../../const';
import './Video.scss';
const imgPath = process.env.PUBLIC_URL + '/assets/img/';

const Video = () => {
  const [language, setLanguage] = useState('en');
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='video'>
      <img
        src={imgPath + 'new-video-section-bg.png'}
        className='video__banner-img'
        alt='video'
      />
      <img
        src={imgPath + 'new-video-section-bg-mobile.png'}
        className='video__banner-img-mobile'
        alt='video'
      />
      <div className='video__main-content'>
        <div className='video__sub-content'>
          <a target='_blank' href={dazn_link}>
            <img
              src={imgPath + 'DAZN-logo.png'}
              alt='logo'
              className='video__logo'
            />
          </a>
        </div>
        <img src={imgPath + 'title.png'} alt='title' className='video__title' />
        <span className='video__pre-fight'>{t('video-block.banner-text')}</span>
      </div>
    </div>
  );
};

export default Video;
