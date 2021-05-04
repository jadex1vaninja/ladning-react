import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LINK_TO_LIVE } from '../../const';
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
  cta
}) => {
  const { t } = useTranslation();
  const [text, setText] = useState('');
  const [isSliced, setIsSliced] = useState(true);
  const separateType = type.split('-').pop();
  const MAX_SYMBOLS = 170;

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

  return (
    <div
      className={`cards-root__card-content ${
        !isActive && 'cards-root__card-content--disabled'
      } ${isSoldOut && 'cards-root__card-content--soldout'}`}
    >
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
        <div className='cards-root__soldout-block'>{t('') || 'SOLD OUT'}</div>
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
          <p
            className='cards-root__desc'
            dangerouslySetInnerHTML={{
              __html: isSliced ? sliceText(text) : text
            }}
          />
          {isSliced && (
            <span className='cards-root__show-more' onClick={showFullText}>
              Read more
            </span>
          )}
          <a
            rel='noopener noreferrer'
            className='cards-root__link'
            target='_blank'
            href={link ? LINK_TO_LIVE + link : collectionLink}
          >
            {t(cta || 'NFTs.link-text')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NFT;
