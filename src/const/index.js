export const ETHEREUM = window.ethereum;
export const API_URL = `https://rinkeby-api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20&owner=`;
export const PHONE = 320;
export const TABLET = 768;
export const DESKTOP = 1024;
export const DESKTOP_LARGE = 1440;
export const DESKTOP_EXTRA_LARGE = 1920;
export const imgPath = process.env.PUBLIC_URL + '/assets/img/';

export const NFTS = [
  {
    type: 'legendary',
    img: imgPath + 'Legendary_2_Knockout_Canelo_1_1.png',
    title: 'canelo-legendary-title',
    rarity: 'rarity-1',
    description: 'canelo-legendary-description',
    link: 'early-link',
  },
  {
    type: 'legendary',
    img: imgPath + 'Legendary_1_Knockout_Saunders_1_1.png',
    title: 'saunders-legendary-title',
    rarity: 'rarity-1',
    description: 'saunders-legendary-description',
    link: 'early-link',
  },
  {
    type: 'gold',
    img: imgPath + 'Gold_1_TaleOfTheTape_Canelo_1_1_Gold.png',
    title: 'canelo-gold-title',
    rarity: 'rarity-1',
    description: 'canelo-gold-description',
    link: 'early-link',
  },
  {
    type: 'gold',
    img: imgPath + 'Gold_2_TaleOfTheTape_Saunders_1_1_Gold.png',
    title: 'saunders-gold-title',
    rarity: 'rarity-1',
    description: 'saunders-gold-description',
    link: 'early-link',
  },
  {
    type: 'gold',
    img: imgPath + 'Gold_3_Prediction_RND_1_Gold.png',
    title: 'prediction-decision-title',
    rarity: 'rarity-13',
    description: 'prediction-decision-description',
    link: 'early-link',
  },
  {
    type: 'silver',
    img: imgPath + 'Silver_1_A1_TaleOfTheTape_Canelo_1_1_Silver.png',
    title: 'canelo-silver-title',
    rarity: 'rarity-50',
    description: 'canelo-silver-description',
    link: 'late-link',
  },
  {
    type: 'silver',
    img: imgPath + 'Silver_2_TaleOfTheTape_Saunders_1_1_Silver.png',
    title: 'saunders-silver-title',
    rarity: 'rarity-50',
    description: 'saunders-silver-description',
    link: 'late-link',
  },
  {
    type: 'bronze',
    img: imgPath + 'Bronze_1_Prediction_RND_1_Bronze.png',
    title: 'prediction-decision-title-bronze',
    rarity: 'rarity-100',
    description: 'prediction-decision-description-bronze',
    link: 'late-link',
  }
];

export const dazn_link =
  'https://www.dazn.com/?utm_source=NFT&utm_medium=referral&utm_campaign=NFT';
