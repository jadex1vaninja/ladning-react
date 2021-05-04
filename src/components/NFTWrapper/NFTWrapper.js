import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import './NFTWrapper.scss';

const NFTWrapper = ({ title, length, children }) => {
  const { t } = useTranslation();
  const slidesToShow = length < 3 ? 2 : 3;
  const settings = {
    speed: 500,
    cssEase: 'linear',
    useTransform: false,
    slidesToShow,
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
          slidesToShow,
          slidesToScroll: 1,
          arrows: true
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow,
          slidesToScroll: 1,
          arrows: true
        }
      }
    ]
  };

  return (
    <>
      <div className='nft-wrapper'>
        <h2 className='nft-wrapper__title'>{t(title)}</h2>
      </div>
      <div className='nft-wrapper__inner'>
        <Slider {...settings}>{children}</Slider>
      </div>
    </>
  );
};

export default NFTWrapper;
