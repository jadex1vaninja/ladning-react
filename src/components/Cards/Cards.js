/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useTranslation } from 'react-i18next';
import Countdown from 'react-countdown';
import Slider from 'react-slick';
import { imgPath } from '../Landing/Landing';
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
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true
        }
      }
    ]
  };
const date = new Date('May 8, 2021 07:00:00 GMT-04:00');

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className='cards-root__time-section'>
        <p className='cards-root__time-chunk'>
          <span className='cards-root__time-value'>{days}</span>
          <span className='cards-root__indicator'>
            {t('marketplace.countdown.days')}
          </span>
        </p>
        <p className='cards-root__time-chunk'>
          <span className='cards-root__time-value'>{hours}</span>
          <span className='cards-root__indicator'>
            {t('marketplace.countdown.hours')}
          </span>
        </p>
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
    <section className='cards-root'>
      <h2 className='cards-root__title'>{t('marketplace.title')}</h2>
      <div className='cards-root__countdown'>
        <Countdown
          // date={'2021-05-08T00:00:00'}
          date={date}
          daysInHours={true}
          renderer={renderer}
        />
        <p className='cards-root__text'>
          {t('marketplace.countdown.text-purchase-one')}
        </p>
        <p className='cards-root__text'>
          {t('marketplace.countdown.text-purchase-two')}
        </p>
      </div>
      <div className='cards-root__card-wrapper'>
        <Slider {...settings}>
          <div className='cards-root__card-content'>
            <img src={imgPath + 'nft-legend.png'} alt='card' />
            <div className='cards-root__content-wrapper'>
              <div className='cards-root__inner'>
                <h4 className='cards-root__card-title cards-root__card-title--legend'>
                  {t('marketplace.ntfs.legendary.name')}
                </h4>
                <h3 className='first-description'>
                  {t('marketplace.ntfs.legendary.title.first')}
                </h3>
                <h3 className='second-description'>
                  {t('marketplace.ntfs.legendary.title.second')}
                </h3>
                <div className='cards-root__hr'></div>
              </div>
              <div className='cards-root__auction-wrapper'>
                <p className='cards-root__amount'>1/1</p>
                <p className='cards-root__desc'>
                  {t('marketplace.ntfs.legendary.description')}
                </p>
                <a className='cards-root__link' href=''>
                  {t('marketplace.ntfs.legendary.link')}
                </a>
              </div>
            </div>
          </div>
          <div className='cards-root__card-content'>
            <img src={imgPath + 'nft-gold.png'} alt='card' />
            <div className='cards-root__content-wrapper'>
              <div className='cards-root__inner'>
                <h4 className='cards-root__card-title cards-root__card-title--gold'>
                  {t('marketplace.ntfs.gold.name')}
                </h4>
                <h3 className='first-description'>
                  {t('marketplace.ntfs.gold.title.first')}
                </h3>
                <h3 className='second-description'>
                  {t('marketplace.ntfs.gold.title.second')}
                </h3>
                <div className='cards-root__hr'></div>
              </div>
              <div className='cards-root__auction-wrapper'>
                <p className='cards-root__amount'>1/50</p>
                <p className='cards-root__desc'>
                  {t('marketplace.ntfs.gold.description')}
                </p>
                <a className='cards-root__link' href=''>
                  {t('marketplace.ntfs.gold.link')}
                </a>
              </div>
            </div>
          </div>
          <div className='cards-root__card-content'>
            <img src={imgPath + 'nft-bronze.png'} alt='card' />
            <div className='cards-root__content-wrapper'>
              <div className='cards-root__inner'>
                <h4 className='cards-root__card-title cards-root__card-title--bronze'>
                  {t('marketplace.ntfs.bronze.name')}
                </h4>
                <h3 className='first-description'>
                  {t('marketplace.ntfs.bronze.title.first')}
                </h3>
                <h3 className='second-description'>
                  {t('marketplace.ntfs.bronze.title.second')}
                </h3>
                <div className='cards-root__hr'></div>
              </div>
              <div className='cards-root__auction-wrapper'>
                <p className='cards-root__amount'>1/100</p>
                <p className='cards-root__desc'>
                  {t('marketplace.ntfs.bronze.description')}
                </p>
                <a className='cards-root__link' href=''>
                  {t('marketplace.ntfs.bronze.link')}
                </a>
              </div>
            </div>
          </div>
          <div className='cards-root__card-content'>
            <img src={imgPath + 'nft-legend.png'} alt='card' />
            <div className='cards-root__content-wrapper'>
              <div className='cards-root__inner'>
                <h4 className='cards-root__card-title cards-root__card-title--legend'>
                  {t('marketplace.ntfs.legendary.name')}
                </h4>
                <h3 className='first-description'>
                  {t('marketplace.ntfs.legendary.title.first')}
                </h3>
                <h3 className='second-description'>
                  {t('marketplace.ntfs.legendary.title.second')}
                </h3>
                <div className='cards-root__hr'></div>
              </div>
              <div className='cards-root__auction-wrapper'>
                <p className='cards-root__amount'>1/1</p>
                <p className='cards-root__desc'>
                  {t('marketplace.ntfs.legendary.description')}
                </p>
                <a className='cards-root__link' href=''>
                  {t('marketplace.ntfs.legendary.link')}
                </a>
              </div>
            </div>
          </div>
          <div className='cards-root__card-content'>
            <img src={imgPath + 'nft-gold.png'} alt='card' />
            <div className='cards-root__content-wrapper'>
              <div className='cards-root__inner'>
                <h4 className='cards-root__card-title cards-root__card-title--gold'>
                  {t('marketplace.ntfs.gold.name')}
                </h4>
                <h3 className='first-description'>
                  {t('marketplace.ntfs.gold.title.first')}
                </h3>
                <h3 className='second-description'>
                  {t('marketplace.ntfs.gold.title.second')}
                </h3>
                <div className='cards-root__hr'></div>
              </div>
              <div className='cards-root__auction-wrapper'>
                <p className='cards-root__amount'>1/50</p>
                <p className='cards-root__desc'>
                  {t('marketplace.ntfs.gold.description')}
                </p>
                <a className='cards-root__link' href=''>
                  {t('marketplace.ntfs.gold.link')}
                </a>
              </div>
            </div>
          </div>
          <div className='cards-root__card-content'>
            <img src={imgPath + 'nft-bronze.png'} alt='card' />
            <div className='cards-root__content-wrapper'>
              <div className='cards-root__inner'>
                <h4 className='cards-root__card-title cards-root__card-title--bronze'>
                  {t('marketplace.ntfs.bronze.name')}
                </h4>
                <h3 className='first-description'>
                  {t('marketplace.ntfs.bronze.title.first')}
                </h3>
                <h3 className='second-description'>
                  {t('marketplace.ntfs.bronze.title.second')}
                </h3>
                <div className='cards-root__hr'></div>
              </div>
              <div className='cards-root__auction-wrapper'>
                <p className='cards-root__amount'>1/100</p>
                <p className='cards-root__desc'>
                  {t('marketplace.ntfs.bronze.description')}
                </p>
                <a className='cards-root__link' href=''>
                  {t('marketplace.ntfs.bronze.link')}
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Cards;
