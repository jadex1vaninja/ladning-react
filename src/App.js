import React,{ useEffect} from 'react';
import Slider from "react-slick";
import Countdown, { zeroPad, calcTimeDelta } from 'react-countdown';
import "./main.scss";
const imgPath = process.env.PUBLIC_URL + '/assets/img/';


function App() {
  const onSubmit = async(evt)=>{
    evt.preventDefault()
  const email = document.querySelector("#email").value;
  const name = document.querySelector("#name").value ?? '';
  const surname = document.querySelector("#surname").value ?? '';
  if(!email || !name || !surname) return;

  const res = await fetch(
    `https://mailapi.vercel.app/api/send-mail?email=${email}&name=${name}&surname=${surname}`
  );
  const data = await res.json();

  window.scrollTo(0, 0);
  window.location.reload();
  }
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
          arrows: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  }

  const renderer = ({days, hours, minutes, seconds}) => {
    return (
        <div className='card__time-section'>
          <p className='card__time-chunk'>
            <span className='card__time-value'>{days}</span><span className='card__indicator'>days</span>
          </p>
          <p className='card__time-chunk'>
            <span className='card__time-value'>{hours}</span>
            <span className='card__indicator'>hrs</span>
          </p>
          <p className='card__time-chunk'>
            <span className='card__time-value'>{minutes}</span><span className='card__indicator'>mins</span>
          </p>
          <p className='card__time-chunk'>
            <span className='card__time-value'>{seconds}</span><span className='card__indicator'>secs</span>
          </p>

        </div>
    )
  }

  return (
    <>
      <header className="header">
        <div className="header__banner">
          <img
            className="header__banner-img"
            src={imgPath+'header-bg-new-desktop.png'}
            alt=""
          />
          <img
            className="header__banner-img header__banner-img--mobile"
            src={imgPath+'header-img.png'}
            alt=""
          />
          <div className="header__inner">
            <div className="header__img-wrapper">
              <img className="header__logo1" src={imgPath+'logo.png'} alt="" />
            </div>
            <div className="header__text-wrapper">
              {/* <!-- <img className="header__logo2" src={imgPath+'may8.png'} alt="" /> --> */}
              <h1 className="header__title">SAT MAY 8</h1>
              <span className="header__text">STREAM LIVE ON DAZN</span>
            </div>
            <div className="header__img-wrapper">
              <img
                className="header__logo3"
                src={imgPath+'matchroom-logo.png'}
                alt=""
              />
            </div>
          </div>
        </div>
      </header>
      <main className="root">
        {/* <!-- Main carousel --> */}
        <section className="carousel">
          <div className="carousel__carousel-wrapper">
            <div className="carousel__carousel-item">
              <div className="carousel__item-logo-section">
                <img src={imgPath+'carousel-card.png'} alt="card" />
                <img src={imgPath+'carousel-card-caption.png'} alt="caption" />
              </div>
              <div className="carousel__item-content">
                <h2>Own a piece of history</h2>
                <p>
                  On May 8, the pound for pound king, Saul Canelo Álvarez will
                  continue his quest to unify the Super Middleweight division
                  when he puts his WBC, WBA and Ring titles on the line against
                  the undefeated WBO Champion Billy Joe Saunders.
                </p>
                <div className="carousel__sub-caption-section">
                  <img src={imgPath+'DAZN-logo.png'} alt="dazn" />
                  <div>
                    <p>
                      You can exclusively own the DAZN Canelo vs Saunders NFTs
                      to add to your sporting NFT collection BUT be quick as
                      these are limited.
                    </p>
                    <a href="#">Want to know more about NFTs?</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Marketplace block --> */}
        <section className="card">
          <h2>Marketplace</h2>
          <div className='card__countdown'>
            <h3 className='card__countdown-title'>The countdown begins</h3>
            <Countdown
                date={'2021-05-08T00:00:00'}
                daysInHours={true}
                renderer={renderer}
            />
            <p className='card__sub-title'>The DAZN NFT marketplace is open on the 8th May 2021</p>
          </div>
          <div className="card__card-wrapper">
          <Slider {...settings}>
            <div className="card__card-content">
              <img src={imgPath+'ntf-card1.png'} alt="card" />
              <div className="card__content-wrapper">
                <div>
                  <h4>LEGENDARY</h4>
                  <h3 className="first-description">Canelo VS</h3>
                  <h3 className="second-description">Saunders</h3>
                  <p className="card__sub-caption">EXCLUSIVE NFTs</p>
                </div>
                <div className="card__auction-wrapper">
                  <a>
                    <p>Limited Edition</p>
                    <p>Auction</p>
                  </a>
                </div>
              </div>
            </div>
             <div className="card__card-content">
              <img src={imgPath+'ntf-card2.png'} alt="card" />
              <div className="card__content-wrapper">
                <div>
                  <h4>CONCRETE</h4>
                  <h3 className="first-description">Canelo VS</h3>
                  <h3 className="second-description">Saunders</h3>
                  <p className="card__sub-caption">EXCLUSIVE NFTs</p>
                </div>
                <div className="card__auction-wrapper">
                  <a>
                    <p>Limited Edition</p>
                    <p>Auction</p>
                  </a>
                </div>
              </div>
            </div> 
             <div className="card__card-content">
              <img src={imgPath+'ntf-card3.png'} alt="card" />
              <div className="card__content-wrapper">
                <div>
                  <h4>DIAMOND</h4>
                  <h3 className="first-description">Canelo VS</h3>
                  <h3 className="second-description">Saunders</h3>
                  <p className="card__sub-caption">EXCLUSIVE NFTs</p>
                </div>
                <div className="card__auction-wrapper">
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
        <div className="video">
          <img
            src={imgPath+'video-section-bg.png'}
            className="video__banner-img"
            alt="video"
          />
          <img
            src={imgPath+'video-section-bg-mobile.png'}
            className="video__banner-img-mobile"
            alt="video"
          />
          <div className="video__main-content">
            <img
              src={imgPath+'title.png'}
              alt="title"
              className="video__title"
            />
            <span className="video__pre-fight">PRE-FIGHT HIGHLIGHTS</span>
            <div className="video__sub-content">
              <img
                src={imgPath+'DAZN-logo.png'}
                alt="logo"
                className="video__logo"
              />
              <span className="video__coming-soon">COMING SOON</span>
            </div>
          </div>
        </div>

        {/* <!-- Register block --> */}
        <div className="register">
          <div className="register__title">
            <span>REGISTER FOR THE DROP</span>
          </div>
          <div className="register__main-content">
            <span>
              Be the first to find out more about the first ever DAZN NFT drop,
              register here:
            </span>
            <div className="register__form">
              <img src={imgPath+'DAZN-NTF.png'} alt="logo" />
              <form onSubmit={onSubmit}>
                <input required id="name" placeholder="Forename" />
                <input required id="surname" placeholder="Surname" />
                <input required type="email" id="email" placeholder="Email" />
                <div className="register__submit">
                  <img src={imgPath+'DAZN-NTF.png'} alt="logo" />
                  <button type="submit"  id="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* <!-- What is an nft block --> */}
        <div className="whatIs">
          <img
            className="whatIs__boarder"
            src={imgPath+'what-boarder.png'}
            alt="boarder"
          />
          <img
            className="whatIs__mobile-boarder"
            src={imgPath+'what-boarder-mobile.png'}
            alt="boarder"
          />
          <div className="whatIs__text-container">
            <p className="whatIs__title">WHAT IS AN NFT?</p>
            <p className="whatIs__main-info">
              A non-fungible token is a unit of data stored on a digital ledger,
              called a blockchain, that certifies a digital asset to be unique
              and therefore not interchangeable. NFTs can be used to represent
              items such as photos, videos, audio and other types of digital
              files.
            </p>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer__banner">
          <img
            className="footer__banner-img"
            src={imgPath+'footer-bg.jpg'}
            alt=""
          />
          <div className="footer__inner">
            <div className="footer__img-wrapper">
              <img className="footer__logo1" src={imgPath+'logo.png'} alt="" />
            </div>
            <div className="footer__text-wrapper">
              <img
                className="footer__logo2"
                src={imgPath+'DAZN-logo.png'}
                alt=""
              />
            </div>
            <div className="footer__img-wrapper">
              <img
                className="footer__logo3"
                src={imgPath+'matchroom-logo.png'}
                alt=""
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
