import { imgPath, vidPath } from './index';

const LEGENDARY_KNOCKOUT_CANELO = {
  type: 'NFTs.type-legendary',
  img: imgPath + 'Legendary_2_Knockout_Canelo_1_1.png',
  video: vidPath + 'Legendary_2_Knockout_Canelo_1_1.gif',
  title: 'nft-card.canelo-legendary-title',
  rarity: 'nft-card.rarity-1',
  description: 'nft-card.canelo-legendary-description',
  isActive: true,
  // isSoldOut:true,
  link:
    '69208789200216951769366063301950903931594320778910349241631506764274239275009'
};

const LEGENDARY_KNOCKOUT_SAUNDERS = {
  type: 'NFTs.type-legendary',
  img: imgPath + 'Legendary_1_Knockout_Saunders_1_1.png',
  video: vidPath + 'Legendary_1_Knockout_Saunders_1_1.gif',
  title: 'nft-card.saunders-legendary-title',
  rarity: 'nft-card.rarity-1',
  description: 'nft-card.saunders-legendary-description',
  isActive: true,
  link:
    '69208789200216951769366063301950903931594320778910349241631506765373750902785'
};

const GOLD_TALE_CANELO = {
  type: 'NFTs.type-gold',
  img: imgPath + 'Gold_1_TaleOfTheTape_Canelo_1_1_Gold.png',
  video: vidPath + 'Gold_1_TaleOfTheTape_Canelo_1_1_Gold.gif',
  title: 'nft-card.canelo-gold-title',
  rarity: 'nft-card.rarity-1',
  description: 'nft-card.canelo-gold-description',
  isActive: true,
  link:
    '69208789200216951769366063301950903931594320778910349241631506766473262530561'
};

const GOLD_TALE_SAUNDERS = {
  type: 'NFTs.type-gold',
  img: imgPath + 'Gold_2_TaleOfTheTape_Saunders_1_1_Gold.png',
  video: vidPath + 'Gold_1_TaleOfTheTape_Saunders_1_1_Gold.gif',
  title: 'nft-card.saunders-gold-title',
  rarity: 'nft-card.rarity-1',
  description: 'nft-card.saunders-gold-description',
  isActive: true,
  link:
    '69208789200216951769366063301950903931594320778910349241631506766473262530561'
};

const SILVER_TALE_CANELO = {
  type: 'NFTs.type-silver',
  img: imgPath + 'Silver_1_A1_TaleOfTheTape_Canelo_1_1_Silver.png',
  video: vidPath + 'Silver_1_A1_TaleOfTheTape_Canelo_1_1_Silver.gif',
  title: 'nft-card.canelo-silver-title',
  rarity: 'nft-card.rarity-50',
  description: 'nft-card.canelo-silver-description',
  isActive: true,
  link:
    '69208789200216951769366063301950903931594320778910349241631506788463495086130'
};

const SILVER_TALE_SAUNDERS = {
  type: 'NFTs.type-silver',
  img: imgPath + 'Silver_2_TaleOfTheTape_Saunders_1_1_Silver.png',
  video: vidPath + 'Silver_2_TaleOfTheTape_Saunders_1_1_Silver.gif',
  title: 'nft-card.saunders-silver-title',
  rarity: 'nft-card.rarity-50',
  description: 'nft-card.saunders-silver-description',
  isActive: true,
  link:
    '69208789200216951769366063301950903931594320778910349241631506787363983458354'
};


const GOLDEN_PREDICTION= {
    type: 'NFTs.type-gold',
    img: imgPath + 'Gold_3_Prediction_RND_1_Gold.png',
    video: vidPath + 'Gold_3_Prediction_RND_1_Gold.gif',
    title: 'nft-card.prediction-decision-title',
    rarity: 'nft-card.rarity-13',
    description: 'nft-card.prediction-decision-description',
    isActive: true,
    collectionLink:"https://opensea.io/assets/dazn-x-canelo-saunders?search[query]=Prediction&search[stringTraits][0][name]=Type&search[stringTraits][0][values][0]=Gold",

};
const BRONZE_PREDICTION = {
  type: 'NFTs.type-bronze',
  img: imgPath + 'Bronze_1_Prediction_RND_1_Bronze.png',
  video: vidPath + 'Bronze_1_Prediction_RND_1_Bronze.gif',
  title: 'nft-card.prediction-decision-title-bronze',
  rarity: 'nft-card.rarity-100',
  description: 'nft-card.prediction-decision-description-bronze',
  isActive: true,
  collectionLink:
    'https://opensea.io/assets/dazn-x-canelo-saunders?search[stringTraits][0][name]=Type&search[stringTraits][0][values][0]=Bronze'
};
const POST_FIGHT_CANELO_LEGENDARY = {
  type: 'NFTs.type-legendary',
  img: imgPath + 'winningCanelo.png',
  title: 'nft-card.post-fight-title-legendary',
  rarity: 'nft-card.rarity-1',
  description: 'nft-card.post-fight-description-legendary',
  isActive: false,
  collectionLink:
    'https://opensea.io/assets/dazn-x-canelo-saunders?search[stringTraits][0][name]=Type&search[stringTraits][0][values][0]=Bronze'
};

const POST_FIGHT_SAUNDERS_LEGENDARY = {
  type: 'NFTs.type-legendary',
  img: imgPath + 'winningSaun.png',
  title: 'nft-card.post-fight-title-legendary',
  rarity: 'nft-card.rarity-1',
  description: 'nft-card.post-fight-description-legendary',
  isActive: false,
  collectionLink:
    'https://opensea.io/assets/dazn-x-canelo-saunders?search[stringTraits][0][name]=Type&search[stringTraits][0][values][0]=Bronze'
};

const POST_FIGHT_CANELO_GOLD = {
  type: 'NFTs.type-gold',
  img: imgPath + 'ringWalkCanelo.png',
  title: 'nft-card.prediction-decision-title-bronze',
  rarity: 'nft-card.rarity-50',
  description: 'nft-card.prediction-decision-description-bronze',
  isActive: false,
  collectionLink:
    'https://opensea.io/assets/dazn-x-canelo-saunders?search[stringTraits][0][name]=Type&search[stringTraits][0][values][0]=Bronze'
};

const POST_FIGHT_SAUNDERS_GOLD = {
  type: 'NFTs.type-gold',
  img: imgPath + 'ringWalksaun.png',
  title: 'nft-card.prediction-decision-title-bronze',
  rarity: 'nft-card.rarity-50',
  description: 'nft-card.prediction-decision-description-bronze',
  isActive: false,
  collectionLink:
    'https://opensea.io/assets/dazn-x-canelo-saunders?search[stringTraits][0][name]=Type&search[stringTraits][0][values][0]=Bronze'
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
    cards: [GOLDEN_PREDICTION, BRONZE_PREDICTION]
  },
  {
    title: 'NFTs.title-post-fight',
    cards: [
      POST_FIGHT_CANELO_LEGENDARY,
      POST_FIGHT_SAUNDERS_LEGENDARY,
      // POST_FIGHT_CANELO_GOLD,
      // POST_FIGHT_SAUNDERS_GOLD
    ]
  }
];
export const FeaturedNFT_ID = LEGENDARY_KNOCKOUT_CANELO.link;
