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
    img: imgPath + 'nft-legend.png',
    title: 'canelo-legendary-title',
    rarity: 'rarity-1',
    description: 'canelo-legendary-description'
  },
  {
    type: 'legendary',
    img: imgPath + 'nft-legend.png',
    title: 'saunders-legendary-title',
    rarity: 'rarity-1',
    description: 'saunders-legendary-description'
  },
  {
    type: 'gold',
    img: imgPath + 'nft-gold.png',
    title: 'canelo-gold-title',
    rarity: 'rarity-1',
    description: 'canelo-gold-description'
  },
  {
    type: 'gold',
    img: imgPath + 'nft-gold.png',
    title: 'saunders-gold-title',
    rarity: 'rarity-1',
    description: 'saunders-gold-description'
  },
  {
    type: 'gold',
    img: imgPath + 'nft-gold.png',
    title: 'prediction-decision-title',
    rarity: 'rarity-13',
    description: 'prediction-decision-description'
  },
  {
    type: 'silver',
    img: imgPath + 'nft-legend.png',
    title: 'canelo-silver-title',
    rarity: 'rarity-50',
    description: 'canelo-silver-description'
  },
  {
    type: 'silver',
    img: imgPath + 'nft-legend.png',
    title: 'saunders-silver-title',
    rarity: 'rarity-50',
    description: 'saunders-silver-description'
  },
  {
    type: 'bronze',
    img: imgPath + 'nft-bronze.png',
    title: 'prediction-decision-title-bronze',
    rarity: 'rarity-100',
    description: 'prediction-decision-description-bronze'
  }
];


export const dazn_link =
  'https://www.dazn.com/?utm_source=NFT&utm_medium=referral&utm_campaign=NFT';