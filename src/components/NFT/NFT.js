import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { LINK_TO_LIVE } from '../../const';
import useOutsideClick from '@rooks/use-outside-click';
import './NFT.scss';

const NFT = ({
  img,
  video,
  type,
  title,
  description,
  rarity,
  isActive,
  link,
  isSoldOut,
  collectionLink,
  cta,
  grayscale,
  comingSoon,
  subitems
}) => {
  const { t } = useTranslation();
  const [text, setText] = useState('');
  const [showRound, setShowRound] = useState(false);
  const ctaRef = useRef();
  useOutsideClick(ctaRef, ()=>{setShowRound(false)});
  const [isSliced, setIsSliced] = useState(true);
  const separateType = type.split('-').pop();
  const MAX_SYMBOLS = 140;

  const sliceText = (string) => {
    return `${string.slice(0, MAX_SYMBOLS)}...`;
  };

  const showFullText = () => {
    setIsSliced(false);
    setText((prevState) => {
      return prevState;
    });
  };

  useEffect(() => {
    setText(t(description));
  }, [t]);

  console.log(subitems);

  return (
    <>
      <div className='card-wrap'>
        {comingSoon && (
          <div className='coming-soon'>{t('nft-card.coming-soon')}</div>
        )}
        <div
          className={`cards-root__card-content ${
            !isActive && 'cards-root__card-content--disabled'
          } ${(isSoldOut || grayscale) && 'cards-root__card-content--soldout'}`}
        >
          <div className={!isActive && 'cards-root__card-content--disabled'} />
          {video ? (
            <img
              className='cards-root__card-img'
              src={img}
              alt='card'
              onMouseOver={(e) => (e.currentTarget.src = video)}
              onMouseOut={(e) => (e.currentTarget.src = img)}
            />
          ) : (
            <img className='cards-root__card-img' src={img} alt='card' />
          )}
          {isSoldOut && (
            <div className='cards-root__soldout-block'>
              {t('') || 'SOLD OUT'}
            </div>
          )}
          <div className='cards-root__content-wrapper'>
            <div className='cards-root__inner'>
              <h4
                className={`cards-root__card-title cards-root__card-title--${separateType}`}
              >
                {t(type)}
              </h4>
              <h3
                className='first-description'
                dangerouslySetInnerHTML={{ __html: t(title) }}
              />
              <div className='cards-root__hr' />
            </div>
            <div className='cards-root__auction-wrapper'>
              <p
                className='cards-root__amount'
                dangerouslySetInnerHTML={{ __html: t(rarity) }}
              />
              <div>
                {isSliced ? (
                  <>
                    <span
                      className='cards-root__desc'
                      dangerouslySetInnerHTML={{
                        __html: sliceText(text)
                      }}
                    />
                    <span
                      className='cards-root__show-more'
                      onClick={showFullText}
                    >
                      Read more
                    </span>
                  </>
                ) : (
                  <span
                    className='cards-root__desc'
                    dangerouslySetInnerHTML={{
                      __html: text
                    }}
                  />
                )}
              </div>
              {subitems ? (
                <>
                  <span
                    ref={ctaRef}
                    onClick={() => setShowRound(true)}
                    className='cards-root__link'
                  >
                    {t(cta || 'NFTs.link-text')}
                  </span>
                  {showRound && (
                    <div>
                      {subitems.map((e) => (
                        <>
                          <div className='round-link'>
                            <a
                              className='round-link__item'
                              target='_blank'
                              rel='noreferrer'
                              href={e.link}
                            >
                              {e.name}
                            </a>
                          </div>
                        </>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  rel='noopener noreferrer'
                  className='cards-root__link'
                  target='_blank'
                  href={link ? LINK_TO_LIVE + link : collectionLink}
                >
                  {t(cta || 'NFTs.link-text')}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NFT;
