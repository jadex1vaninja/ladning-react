/* eslint-disable no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { dazn_link, imgPath } from '../../const';
import './Video.scss';

const Video = () => {
  const { t } = useTranslation();

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
          <a target='_blank' rel='noreferrer' href={dazn_link}>
            <img
              src={imgPath + 'DAZN-logo.png'}
              alt='logo'
              className='video__logo'
            />
          </a>
        </div>
        <img
          src={imgPath + 'promo2.png'}
          alt='title'
          className='video__title'
        />
        <span className='video__pre-fight' dangerouslySetInnerHTML={{__html:t('video-block.banner-text')}}></span>
      </div>
    </div>
  );
};

export default Video;
