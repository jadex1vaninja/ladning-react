import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Countdown from 'react-countdown';
import { API_URL, CONTRACT_ADDRESS, imgPath, LINK_TO_LIVE } from '../../const';
// import { FeaturedNFT_ID } from '../../const/nfts';
import './FeaturedNFT.scss';
import axios from 'axios';

const FeaturedNFT = ({
  withMargin,
  title,
  description,
  bgURL,
  videoSource,
  FeaturedNFT_ID,
  link
}) => {
  const { t } = useTranslation();
  const [text, setText] = useState('');
  const [isRolled, setIsRolled] = useState(false);

  const [nftFromApi, setNft] = useState({
    orders: [{ closing_date: new Date('May 8, 2021 07:00:00 GMT-04:00') }]
  });
  // UNcoment when auction will be setted up;
  let [createdOrder, highestBid] = nftFromApi.orders;

  highestBid = highestBid || createdOrder;
  const paymentInfo = highestBid ? highestBid.payment_token_contract : null;
  const tokenPrice = paymentInfo
    ? highestBid.base_price / 10 ** highestBid.payment_token_contract.decimals
    : 0;
  const usdPrice = paymentInfo
    ? tokenPrice * highestBid.payment_token_contract.usd_price
    : 0;
  const ethPrice = paymentInfo
    ? tokenPrice * highestBid.payment_token_contract.eth_price
    : 0;

  // const renderer = ({ days, hours, minutes, seconds }) => {
  //   const DOUBLE_NUM = 10;
  //   return (
  //     <div className={'featured__time-section'}>
  //       <p className='featured__time-chunk'>
  //         <span className='featured__time-value'>
  //           {Number(days) < DOUBLE_NUM ? `0${days}` : days}
  //         </span>
  //         <span className='featured__indicator'>
  //           {t('featured-nft.countdown.days')}
  //         </span>
  //       </p>
  //       <p className='featured__time-chunk'>
  //         <span className='featured__time-value'>
  //           {Number(hours) < DOUBLE_NUM ? `0${hours}` : hours}
  //         </span>
  //         <span className='featured__indicator'>
  //           {t('featured-nft.countdown.hours')}
  //         </span>
  //       </p>
  //       <p className='featured__time-chunk'>
  //         <span className='featured__time-value'>
  //           {Number(minutes) < DOUBLE_NUM ? `0${minutes}` : minutes}
  //         </span>
  //         <span className='featured__indicator'>
  //           {t('featured-nft.countdown.minutes')}
  //         </span>
  //       </p>
  //       <p className='featured__time-chunk'>
  //         <span className='featured__time-value'>
  //           {Number(seconds) < DOUBLE_NUM ? `0${seconds}` : seconds}
  //         </span>
  //         <span className='featured__indicator'>
  //           {t('featured-nft.countdown.seconds')}
  //         </span>
  //       </p>
  //     </div>
  //   );
  // };
  useEffect(() => {
    apiCall();
    const intervalTime = 1000 * 60 * 5; // 5min
    const interval = setInterval(apiCall, intervalTime);
    return clearInterval(interval);
  }, []);
  const apiCall = useCallback(async () => {
    const response = await axios.get(
      `${API_URL}/asset/${CONTRACT_ADDRESS}/${FeaturedNFT_ID}`
    );
    setNft(response.data);
  }, []);

  const MAX_SYMBOLS = 140;

  const sliceText = (string) => {
    return `${string.slice(0, MAX_SYMBOLS)}...`;
  };

  const showFullText = () => {
    setIsRolled(false);
    setText((prevState) => {
      return prevState;
    });
  };

  const showShortText = () => {
    setIsRolled(true);
  };

  useEffect(() => {
    setText(t(description));
    setIsRolled(true);
  }, [t]);

  return (
    <div
      className='featured'
      id='auction'
      style={{ backgroundImage: `url(${bgURL})` }}
    >
      <div className={'featured__inner-wrapper'}>
        <div className='featured__img-wrapper'>
          <video
            controlslist='nodownload'
            loop
            muted
            playsinline=''
            autoplay=''
            poster={imgPath + 'Legendary_2_Knockout_Canelo_1_1.png'}
          >
            <source src={videoSource} />
            <img
              src={imgPath + 'Legendary_2_Knockout_Canelo_1_1.png'}
              alt='card'
            />
          </video>
        </div>
        <div className='featured__content'>
          <h6 className='featured__sub-title'>{t('featured-nft.sub-title')}</h6>
          <h1 className='featured__title'> {title}</h1>
          <div className='featured__type'>
            <h2 className='featured__rarity'>{t('featured-nft.rarity')}</h2>
            <h2 className='featured__edition featured__edition--legendary'>
              {t('featured-nft.type')}
            </h2>
          </div>
          <div className='featured__details'>
            <div className='featured__price-block'>
              <h2 className='featured__price-title'>
                {t('featured-nft.price.title')}
              </h2>
              <p className='featured__price-value'>{ethPrice}</p>
              <p className='featured__price-sign'>
                {t('featured-nft.price.sign')}
              </p>
              <p>
                <small class='featured__price-dollar'>${usdPrice}</small>
              </p>
            </div>
            <div className='featured__countdown-block'>
              {isRolled ? (
                <>
                  <h2
                    className='featured__countdown-title'
                    dangerouslySetInnerHTML={{ __html: sliceText(text) }}
                  ></h2>
                  <p
                    className='featured__countdown-link'
                    onClick={showFullText}
                  >
                    Read more
                  </p>
                </>
              ) : (
                <>
                  <h2
                    className='featured__countdown-title'
                    dangerouslySetInnerHTML={{ __html: text }}
                  >
                  </h2>
                  <p
                    className='featured__countdown-link'
                    onClick={showShortText}
                  >
                    Read less
                  </p>
                </>
              )}
              {/*<h2 className='featured__countdown-title'>*/}
              {/*  {t('featured-nft.countdown.title')}*/}
              {/*</h2>*/}
              {/*<Countdown*/}
              {/*  date={new Date('May 8, 2021 23:00:00 GMT-04:00')}*/}
              {/*  daysInHours={true}*/}
              {/*  renderer={renderer}*/}
              {/*/>*/}
            </div>
          </div>
          <div className='featured__CTA-wrap'>
            <button
              onClick={() => {
                // window.open(LINK_TO_LIVE + FeaturedNFT_ID, '_blank');
                window.open(link, '_blank');
              }}
              className='featured__CTA'
            >
              {t('featured-nft.CTA')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNFT;
