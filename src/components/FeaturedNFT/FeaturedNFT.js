import React from 'react';
import { useTranslation } from 'react-i18next';
import Countdown from 'react-countdown';
import { imgPath } from '../../const';
import './FeaturedNFT.scss';

const FeaturedNFT = () => {
  const { t } = useTranslation();
  const date = new Date('May 8, 2021 07:00:00 GMT-04:00');

  const renderer = ({ days, minutes, seconds }) => {
    return (
      <div className='cards-root__time-section'>
        <p className='cards-root__time-chunk'>
          <span className='cards-root__time-value'>{days}</span>
          <span className='cards-root__indicator'>
            {t('marketplace.countdown.days')}
          </span>
        </p>
        {/*<p className='cards-root__time-chunk'>*/}
        {/*  <span className='cards-root__time-value'>{hours}</span>*/}
        {/*  <span className='cards-root__indicator'>*/}
        {/*    {t('marketplace.countdown.hours')}*/}
        {/*  </span>*/}
        {/*</p>*/}
        <p className='cards-root__time-chunk'>
          <span className='cards-root__time-value'>{minutes}</span>
          <span className='cards-root__indicator'>
            {t('marketplace.countdown.minutes')}
          </span>
        </p>
        <p className='cards-root__time-chunk'>
          <span className='cards-root__time-value'>{seconds}</span>
          <span className='cards-root__indicator'>
            {t('marketplace.countdown.seconds')}
          </span>
        </p>
      </div>
    );
  };

  return (
    <div className='featured'>
      <div className='featured__img-wrapper'>
        <img src={imgPath + 'own-it.png'} alt='card' />
      </div>
      <div className='featured__content'>
        <h6 className='featured__sub-title'>FEATURED NFT </h6>
        <h1 className='featured__title'>KNOCKOUT – CANELO EDITION</h1>
        <div className='featured__type'>
          <h2 className='featured__rarity'>1 of 1</h2>
          <h2 className='featured__edition featured__edition--legendary'>
            Legendary Edition
          </h2>
        </div>
        <div className='featured__details'>
          <div className='featured__price-block'>
            <h2 className='featured__price-title'>Current price</h2>
            <p className='featured__price-value'>40</p>
            <p className='featured__price-sign'>ETH</p>
          </div>
          <div className='featured__countdown-block'>
            <h2>auction ending in</h2>
            <Countdown date={date} daysInHours={true} renderer={renderer} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNFT;
