import React from 'react';
import Header from '../Header';
import Cards from '../Cards';
import { useTranslation } from 'react-i18next';
import './Landing.scss';
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
};

export default Landing;
