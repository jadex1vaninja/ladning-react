/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useTranslation } from 'react-i18next';
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
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true
        }
      }
    ]
  };

  return (
    <section className='cards-root'>
      <div className='cards-root__inner'>
        <h2 className='cards-root__title'>{t('marketplace.title')}</h2>
      </div>
      <div className='cards-root__card-wrapper'>
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
