import React from 'react';
import Slider from 'react-slick';
import Countdown from 'react-countdown';
import Header from './components/Header';
import './main.scss';
import { useTranslation } from 'react-i18next';
const imgPath = process.env.PUBLIC_URL + '/assets/img/';

function App() {
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
      <div className='card__time-section'>
        <p className='card__time-chunk'>
          <span className='card__time-value'>{days}</span>
          <span className='card__indicator'>
            {t('marketplace.countdown.days')}
          </span>
        </p>
        <p className='card__time-chunk'>
          <span className='card__time-value'>{hours}</span>
          <span className='card__indicator'>
            {t('marketplace.countdown.hours')}
          </span>
        </p>
        <p className='card__time-chunk'>
          <span className='card__time-value'>{minutes}</span>
          <span className='card__indicator'>
            {t('marketplace.countdown.minutes')}
          </span>
        </p>
        <p className='card__time-chunk'>
          <span className='card__time-value'>{seconds}</span>
          <span className='card__indicator'>
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
        <section className='card'>
          <h2>{t('marketplace.title')}</h2>
          <div className='card__countdown'>
            <h3 className='card__countdown-title'>
              {t('marketplace.countdown.title')}
            </h3>
            <Countdown
              date={'2021-05-08T00:00:00'}
              daysInHours={true}
              renderer={renderer}
            />
            <p className='card__sub-title'>
              {t('marketplace.countdown.sub-title')}
            </p>
          </div>
          <div className='card__card-wrapper'>
            <Slider {...settings}>
              <div className='card__card-content'>
                <img src={imgPath + 'ntf-card1.png'} alt='card' />
                <div className='card__content-wrapper'>
                  <div>
                    <h4>LEGENDARY</h4>
                    <h3 className='first-description'>Canelo VS</h3>
                    <h3 className='second-description'>Saunders</h3>
                    <p className='card__sub-caption'>EXCLUSIVE NFTs</p>
                  </div>
                  <div className='card__auction-wrapper'>
                    <a>
                      <p>Limited Edition</p>
                      <p>Auction</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className='card__card-content'>
                <img src={imgPath + 'ntf-card2.png'} alt='card' />
                <div className='card__content-wrapper'>
                  <div>
                    <h4>CONCRETE</h4>
                    <h3 className='first-description'>Canelo VS</h3>
                    <h3 className='second-description'>Saunders</h3>
                    <p className='card__sub-caption'>EXCLUSIVE NFTs</p>
                  </div>
                  <div className='card__auction-wrapper'>
                    <a>
                      <p>Limited Edition</p>
                      <p>Auction</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className='card__card-content'>
                <img src={imgPath + 'ntf-card3.png'} alt='card' />
                <div className='card__content-wrapper'>
                  <div>
                    <h4>DIAMOND</h4>
                    <h3 className='first-description'>Canelo VS</h3>
                    <h3 className='second-description'>Saunders</h3>
                    <p className='card__sub-caption'>EXCLUSIVE NFTs</p>
                  </div>
                  <div className='card__auction-wrapper'>
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

        {/* <!-- Video block --> */}
        <div className='video'>
          <img
            src={imgPath + 'video-section-bg.png'}
            className='video__banner-img'
            alt='video'
          />
          <img
            src={imgPath + 'video-section-bg-mobile.png'}
            className='video__banner-img-mobile'
            alt='video'
          />
          <div className='video__main-content'>
            <img
              src={imgPath + 'title.png'}
              alt='title'
              className='video__title'
            />
            <span className='video__pre-fight'>
              {t('video-block.banner-text')}
            </span>
            <div className='video__sub-content'>
              <img
                src={imgPath + 'DAZN-logo.png'}
                alt='logo'
                className='video__logo'
              />
              <span className='video__coming-soon'>
                {t('video-block.text')}
              </span>
            </div>
          </div>
        </div>

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

        {/* <!-- What is an nft block --> */}
        <div className='whatIs'>
          <img
            className='whatIs__boarder'
            src={imgPath + 'what-boarder.png'}
            alt='boarder'
          />
          <img
            className='whatIs__mobile-boarder'
            src={imgPath + 'what-boarder-mobile.png'}
            alt='boarder'
          />
          <div className='whatIs__text-container'>
            <p className='whatIs__title'>{t('what-is-block.title')}</p>
            <p className='whatIs__main-info'>{t('what-is-block.info-text')}</p>
          </div>
        </div>
      </main>
      <footer className='footer'>
        <div className='footer__banner'>
          <img
            className='footer__banner-img'
            src={imgPath + 'footer-bg.jpg'}
            alt=''
          />
          <div className='footer__inner'>
            <div className='footer__img-wrapper'>
              <img
                className='footer__logo1'
                src={imgPath + 'logo.png'}
                alt=''
              />
            </div>
            <div className='footer__text-wrapper'>
              <img
                className='footer__logo2'
                src={imgPath + 'DAZN-logo.png'}
                alt=''
              />
            </div>
            <div className='footer__img-wrapper'>
              <img
                className='footer__logo3'
                src={imgPath + 'matchroom-logo.png'}
                alt=''
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
