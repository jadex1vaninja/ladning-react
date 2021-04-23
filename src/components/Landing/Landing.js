import React from 'react';
import Header from '../Header';
import Countdown from 'react-countdown';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import './Landing.scss';
import Video from '../Video/Video';
import WhatIs from '../WhatIs';
import Footer from '../Footer';
const imgPath = process.env.PUBLIC_URL + '/assets/img/';

const Landing = () => {
  const { t } = useTranslation();

  const onSubmit = async (evt) => {
    evt.preventDefault();
    const email = document.querySelector('#email').value;
    const name = document.querySelector('#name').value ?? '';
    const surname = document.querySelector('#surname').value ?? '';
    if (!email || !name || !surname) return;

    const res = await fetch(
      `https://mailapi.vercel.app/api/send-mail?email=${email}&name=${name}&surname=${surname}`
    );
    const data = await res.json();

    window.scrollTo(0, 0);
    window.location.reload();
  };
  const settings = {
    speed: 500,
    cssEase: 'linear',
    useTransform: false,
    slidesToShow: 3,
    slidesToScroll: 1,
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
      }
    ]
  };

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className='card1__time-section'>
        <p className='card1__time-chunk'>
          <span className='card1__time-value'>{days}</span>
          <span className='card1__indicator'>
            {t('marketplace.countdown.days')}
          </span>
        </p>
        <p className='card1__time-chunk'>
          <span className='card1__time-value'>{hours}</span>
          <span className='card1__indicator'>
            {t('marketplace.countdown.hours')}
          </span>
        </p>
        <p className='card1__time-chunk'>
          <span className='card1__time-value'>{minutes}</span>
          <span className='card1__indicator'>
            {t('marketplace.countdown.minutes')}
          </span>
        </p>
        <p className='card1__time-chunk'>
          <span className='card1__time-value'>{seconds}</span>
          <span className='card1__indicator'>
            {t('marketplace.countdown.seconds')}
          </span>
        </p>
      </div>
    );
  };

  return (
    <>
      <Header />
      <main className='root'>
        {/* <!-- Main carousel --> */}
        <section className='carousel'>
          <div className='carousel__carousel-wrapper'>
            <div className='carousel__carousel-item'>
              <div className='carousel__item-logo-section'>
                <img src={imgPath + 'carousel-card.png'} alt='card' />
                <img
                  src={imgPath + 'carousel-card-caption.png'}
                  alt='caption'
                />
              </div>
              <div className='carousel__item-content'>
                <h2>{t('own-it-block.title')}</h2>
                <p>{t('own-it-block.description-part-one')}</p>
                <div className='carousel__sub-caption-section'>
                  <img src={imgPath + 'DAZN-logo.png'} alt='dazn' />
                  <div>
                    <p>{t('own-it-block.description-part-two')}</p>
                    <a href='#'>{t('own-it-block.link')}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Marketplace block --> */}
        <section className='card1'>
          <h2>{t('marketplace.title')}</h2>
          <div className='card1__countdown'>
            <h3 className='card1__countdown-title'>
              {t('marketplace.countdown.title')}
            </h3>
            <Countdown
              date={'2021-05-08T00:00:00'}
              daysInHours={true}
              renderer={renderer}
            />
            <p className='card1__sub-title'>
              {t('marketplace.countdown.sub-title')}
            </p>
          </div>
          <div className='card1__card-wrapper'>
            <Slider {...settings}>
              <div className='card1__card-content'>
                <img src={imgPath + 'ntf-card1.png'} alt='card' />
                <div className='card1__content-wrapper'>
                  <div>
                    <h4>LEGENDARY</h4>
                    <h3 className='first-description'>Canelo VS</h3>
                    <h3 className='second-description'>Saunders</h3>
                    <p className='card1__sub-caption'>EXCLUSIVE NFTs</p>
                  </div>
                  <div className='card1__auction-wrapper'>
                    <a>
                      <p>Limited Edition</p>
                      <p>Auction</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className='card1__card-content'>
                <img src={imgPath + 'ntf-card2.png'} alt='card' />
                <div className='card1__content-wrapper'>
                  <div>
                    <h4>CONCRETE</h4>
                    <h3 className='first-description'>Canelo VS</h3>
                    <h3 className='second-description'>Saunders</h3>
                    <p className='card1__sub-caption'>EXCLUSIVE NFTs</p>
                  </div>
                  <div className='card1__auction-wrapper'>
                    <a>
                      <p>Limited Edition</p>
                      <p>Auction</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className='card1__card-content'>
                <img src={imgPath + 'ntf-card3.png'} alt='card' />
                <div className='card1__content-wrapper'>
                  <div>
                    <h4>DIAMOND</h4>
                    <h3 className='first-description'>Canelo VS</h3>
                    <h3 className='second-description'>Saunders</h3>
                    <p className='card1__sub-caption'>EXCLUSIVE NFTs</p>
                  </div>
                  <div className='card1__auction-wrapper'>
                    <a>
                      <p>Limited Edition</p>
                      <p>Auction</p>
                    </a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>

        {/* <!-- Register block --> */}
        <div className='register'>
          <div className='register__title'>
            <span>{t('register.title')}</span>
          </div>
          <div className='register__main-content'>
            <span>{t('register.content-text')}</span>
            <div className='register__form'>
              <img src={imgPath + 'DAZN-NTF.png'} alt='logo' />
              <form onSubmit={onSubmit}>
                <input
                  required
                  id='name'
                  placeholder={t('register.input-name-placeholder')}
                />
                <input
                  required
                  id='surname'
                  placeholder={t('register.input-surname-placeholder')}
                />
                <input
                  required
                  type='email'
                  id='email'
                  placeholder={t('register.input-email-placeholder')}
                />
                <div className='register__submit'>
                  <img src={imgPath + 'DAZN-NTF.png'} alt='logo' />
                  <button type='submit' id='submit'>
                    {t('register.submit-btn-text')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* <!-- Video block --> */}
        <Video />

        {/* <!-- What is an nft block --> */}
        <WhatIs />

         {/* <!-- Footer block --> */}
        <Footer />
      </main>
    </>
  );
};

export default Landing;
