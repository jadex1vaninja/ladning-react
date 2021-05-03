import React from 'react';
import { useTranslation } from 'react-i18next';
import { LINK_TO_LIVE } from '../../const';
import './NFT.scss';

const NFT = ({ img, video, type, title, description, rarity, isActive, link, isSoldOut, collectionLink }) => {
  const { t } = useTranslation();
  const separateType = type.split('-').pop();

  return (
    <div
      className={`cards-root__card-content ${
        !isActive && 'cards-root__card-content--disabled'
      } ${isSoldOut && 'cards-root__card-content--soldout'}`}
    >
      <img className='cards-root__card-img' src={img} alt='card' onMouseOver={this.src = video} onMouseOut={this.src = img} />
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
          ></p>
          <p
            className='cards-root__desc'
            dangerouslySetInnerHTML={{ __html: t(description) }}
          ></p>
          <a
            rel='noopener noreferrer'
            className='cards-root__link'
            target='_blank'
            href={link ? LINK_TO_LIVE + link : collectionLink}
          >
            {t('NFTs.link-text')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NFT;
