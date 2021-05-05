import React from 'react';
import NFT from '../NFT';
import NFTWrapper from '../NFTWrapper';
import { NFTs } from '../../const/nfts';
import './Cards.scss';

const Cards = () => {
  return (
    <section id="cards" className='cards-root'>
      {NFTs.map((element) => (
        <NFTWrapper title={element.title} length={element.cards.length}>
          {element.cards.map((card) => (
            <NFT
              key={Math.floor(Math.random() * 1000000)}
              {...card}
            />
          ))}
        </NFTWrapper>
      ))}
    </section>
  );
};

export default Cards;
