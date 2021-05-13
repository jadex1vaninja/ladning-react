import React from 'react';
import Countdown from 'react-countdown';
import { useTranslation } from 'react-i18next';
import './CountdownWrapper.scss';

const CountdownWrapper = ({ title }) => {
  const { t } = useTranslation();

  const renderer = ({ days, hours, minutes, seconds }) => {
    const DOUBLE_NUM = 10;
    return (
      <div className={'featured__time-section'}>
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
            {Number(hours) < DOUBLE_NUM ? `0${hours}` : hours}
          </span>
          <span className='featured__indicator'>
            {t('featured-nft.countdown.hours')}
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
    <div className='countdown-wrapper'>
      <h2 className='countdown-wrapper__title'>{title}</h2>
      <Countdown
        date={new Date('May 16, 2021 05:00:00 GMT+03:00')}
        daysInHours={true}
        renderer={renderer}
      />
    </div>
  );
};

export default CountdownWrapper;
