import { imgPath } from './index';

const LEGENDARY_KNOCKOUT_CANELO = {
  type: 'NFTs.type-legendary',
  img: imgPath + 'Legendary_1_Knockout_Saunders_1_1.png',
  title: 'NFTs.nft-card.canelo-legendary-title',
  rarity: 'NFTs.nft-card.rarity-1',
  description: 'NFTs.nft-card.canelo-legendary-description',
  isActive: true,
  link:
    '69208789200216951769366063301950903931594320778910349241631506764274239275009'
};

const LEGENDARY_KNOCKOUT_SAUNDERS = {
  type: 'NFTs.type-legendary',
  img: imgPath + 'Legendary_1_Knockout_Saunders_1_1.png',
  title: 'NFTs.nft-card.saunders-legendary-title',
  rarity: 'NFTs.nft-card.rarity-1',
  description: 'NFTs.nft-card.saunders-legendary-description',
  isActive: true,
  link:
    '69208789200216951769366063301950903931594320778910349241631506765373750902785'
};

const GOLD_TALE_CANELO = {
  type: 'NFTs.type-gold',
  img: imgPath + 'Gold_1_TaleOfTheTape_Canelo_1_1_Gold.png',
  title: 'NFTs.nft-card.canelo-gold-title',
  rarity: 'NFTs.nft-card.rarity-1',
  description: 'NFTs.nft-card.canelo-gold-description',
  isActive: true,
  link:
    '69208789200216951769366063301950903931594320778910349241631506766473262530561'
};

const GOLD_TALE_SAUNDERS = {
  type: 'NFTs.type-gold',
  img: imgPath + 'Gold_2_TaleOfTheTape_Saunders_1_1_Gold.png',
  title: 'NFTs.nft-card.saunders-gold-title',
  rarity: 'NFTs.nft-card.rarity-1',
  description: 'NFTs.nft-card.saunders-gold-description',
  isActive: true,
  link:
    '69208789200216951769366063301950903931594320778910349241631506766473262530561'
};

const SILVER_TALE_CANELO = {
  type: 'NFTs.type-silver',
  img: imgPath + 'Silver_1_A1_TaleOfTheTape_Canelo_1_1_Silver.png',
  title: 'NFTs.nft-card.canelo-silver-title',
  rarity: 'NFTs.nft-card.rarity-50',
  description: 'NFTs.nft-card.canelo-silver-description',
  isActive: true,
  link:
    '69208789200216951769366063301950903931594320778910349241631506788463495086130'
};

const SILVER_TALE_SAUNDERS = {
  type: 'NFTs.type-silver',
  img: imgPath + 'Silver_2_TaleOfTheTape_Saunders_1_1_Silver.png',
  title: 'NFTs.nft-card.saunders-silver-title',
  rarity: 'NFTs.nft-card.rarity-50',
  description: 'NFTs.nft-card.saunders-silver-description',
  isActive: true,
  link:
    '69208789200216951769366063301950903931594320778910349241631506787363983458354'
};

export const NFTs = [
  {
    title: 'NFTs.title-knockout',
    cards: [LEGENDARY_KNOCKOUT_CANELO, LEGENDARY_KNOCKOUT_SAUNDERS]
  },
  {
    title: 'NFTs.title-tale',
    cards: [
      GOLD_TALE_CANELO,
      GOLD_TALE_SAUNDERS,
      SILVER_TALE_CANELO,
      SILVER_TALE_SAUNDERS
    ]
  },
  {
    title: 'NFTs.title-prediction',
    cards: [SILVER_TALE_CANELO, SILVER_TALE_SAUNDERS]
  },
  {
    title: 'NFTs.title-post-fight',
    cards: [
      { ...GOLD_TALE_CANELO, isActive: false },
      { ...GOLD_TALE_SAUNDERS, isActive: false },
      { ...SILVER_TALE_CANELO, isActive: false },
      { ...SILVER_TALE_SAUNDERS, isActive: false }
    ]
  }
];
