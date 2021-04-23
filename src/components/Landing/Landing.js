import React from 'react';
import Header from '../Header';
import Cards from '../Cards';
import { useTranslation } from 'react-i18next';
import './Landing.scss';
import OwnItSection from '../OwnItSection';
import Registration from '../Registration';

export const imgPath = process.env.PUBLIC_URL + '/assets/img/';

const Landing = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main className='root'>
        <OwnItSection />
        <Registration />

        {/* <!-- Marketplace block --> */}
        <Cards />
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
};

export default Landing;
