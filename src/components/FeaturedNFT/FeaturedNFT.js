import React from 'react';
import { useTranslation } from 'react-i18next';
import Countdown from 'react-countdown';
import { imgPath } from '../../const';
import './FeaturedNFT.scss';

const FeaturedNFT = () => {
  const { t } = useTranslation();
  const date = new Date('May 8, 2021 07:00:00 GMT-04:00');

  const renderer = ({ days, minutes, seconds }) => {
    const DOUBLE_NUM = 10;
    return (
      <div className='featured__time-section'>
        <p className='featured__time-chunk'>
          <span className='featured__time-value'>
            {Number(days) < DOUBLE_NUM ? `0${days}` : days}
          </span>
          <span className='featured__indicator'>
            {t('featured-nft.countdown.days')}
          </span>
        </p>
        <p className='featured__time-chunk'>
          <span className='featured__time-value'>
            {Number(minutes) < DOUBLE_NUM ? `0${minutes}` : minutes}
          </span>
          <span className='featured__indicator'>
            {t('featured-nft.countdown.minutes')}
          </span>
        </p>
        <p className='featured__time-chunk'>
          <span className='featured__time-value'>
            {Number(seconds) < DOUBLE_NUM ? `0${seconds}` : seconds}
          </span>
          <span className='featured__indicator'>
            {t('featured-nft.countdown.seconds')}
          </span>
        </p>
      </div>
    );
  };

  return (
    <div className='featured' id="auction">
      <div className='featured__inner-wrapper'>
        <div className='featured__img-wrapper'>
          <img
            src={imgPath + 'Legendary_2_Knockout_Canelo_1_1.png'}
            alt='card'
          />
        </div>
        <div className='featured__content'>
          <h6 className='featured__sub-title'>{t('featured-nft.sub-title')}</h6>
          <h1 className='featured__title'>{t('featured-nft.title')}</h1>
          <div className='featured__type'>
            <h2 className='featured__rarity'>{t('featured-nft.rarity')}</h2>
            <h2 className='featured__edition featured__edition--legendary'>
              {t('featured-nft.type')}
            </h2>
          </div>
          <div className='featured__details'>
            <div className='featured__price-block'>
              <h2 className='featured__price-title'>
                {t('featured-nft.price.title')}
              </h2>
              <p className='featured__price-value'>40</p>
              <p className='featured__price-sign'>
                {t('featured-nft.price.sign')}
              </p>
            </div>
            <div className='featured__countdown-block'>
              <h2 className='featured__countdown-title'>
                {t('featured-nft.countdown.title')}
              </h2>
              <Countdown date={date} daysInHours={true} renderer={renderer} />
            </div>
          </div>
          <div className='featured__CTA-wrap'>
            <button className='featured__CTA'>{t('featured-nft.CTA')}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNFT;
