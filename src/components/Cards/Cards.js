/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useTranslation } from 'react-i18next';
import Countdown from 'react-countdown';
import Slider from 'react-slick';
import NFT from '../NFT';
import { NFTS } from '../../const';
import './Cards.scss';

const Cards = () => {
  const { t } = useTranslation();

  const settings = {
    speed: 500,
    cssEase: 'linear',
    useTransform: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true
        }
      }
    ]
  };
  const date = new Date('May 8, 2021 07:00:00 GMT-04:00');

  const renderer = ({ days, hours, minutes, seconds }) => {
    const DOUBLE_NUM = 10;
    return (
      <div className='cards-root__time-section'>
        <p className='cards-root__time-chunk'>
          <span className='cards-root__time-value'>
            {Number(days) < DOUBLE_NUM ? `0${days}` : days}
          </span>
          <span className='cards-root__indicator'>
            {t('marketplace.countdown.days')}
          </span>
        </p>
        <p className='cards-root__time-chunk'>
          <span className='cards-root__time-value'>
            {Number(hours) < DOUBLE_NUM ? `0${hours}` : hours}
          </span>
          <span className='cards-root__indicator'>
            {t('marketplace.countdown.hours')}
          </span>
        </p>
        <p className='cards-root__time-chunk'>
          <span className='cards-root__time-value'>
            {Number(minutes) < DOUBLE_NUM ? `0${minutes}` : minutes}
          </span>
          <span className='cards-root__indicator'>
            {t('marketplace.countdown.minutes')}
          </span>
        </p>
        <p className='cards-root__time-chunk'>
          <span className='cards-root__time-value'>
            {Number(seconds) < DOUBLE_NUM ? `0${seconds}` : seconds}
          </span>
          <span className='cards-root__indicator'>
            {t('marketplace.countdown.seconds')}
          </span>
        </p>
      </div>
    );
  };

  return (
    <section className='cards-root'>
      <h2 className='cards-root__title'>{t('marketplace.title')}</h2>
      <div className='cards-root__countdown'>
        <Countdown date={date} daysInHours={true} renderer={renderer} />
        <p className='cards-root__text'>
          {t('marketplace.countdown.text-purchase-one')}
        </p>
        <p className='cards-root__text'>
          {t('marketplace.countdown.text-purchase-two')}
        </p>
      </div>
      <div className='cards-root__card-wrapper' id='carousel'>
        <Slider {...settings}>
          {NFTS.map((element) => (
            <NFT
              key={Math.floor(Math.random() * 1000)}
              type={element.type}
              title={element.title}
              img={element.img}
              description={element.description}
              rarity={element.rarity}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Cards;
