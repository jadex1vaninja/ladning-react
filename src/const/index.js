export const ETHEREUM = window.ethereum;
export const API_URL = `https://rinkeby-api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20&owner=`;
export const PHONE = 320;
export const TABLET = 768;
export const DESKTOP = 1024;
export const DESKTOP_LARGE = 1440;
export const DESKTOP_EXTRA_LARGE = 1920;
export const imgPath = process.env.PUBLIC_URL + '/assets/img/';
export const LINK_TO_LIVE = `https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/`;

export const NFTS = [
  {
    type: 'legendary',
    img: imgPath + 'nft-legend.png',
    title: 'Knockout - Canelo',
    rarity: '1/1',
    description:
      'THE WINNING BID WILL RECEIVE 2 TICKETS TO THE NEXT MATCHROOM CANELO FIGHT + SIGNED GLOVES FROM CANELO + A PERSONALIZED VIDEO'
  },
  {
    type: 'legendary',
    img: imgPath + 'nft-legend.png',
    title: 'Knockout - Saunders',
    rarity: '1/1',
    description:
      'THE WINNING BID WILL RECEIVE 2 TICKETS TO THE NEXT MATCHROOM SAUNDERS FIGHT + SIGNED GLOVES FROM SAUNDERS + A PERSONALIZED VIDEO'
  },
  {
    type: 'gold',
    img: imgPath + 'nft-gold.png',
    title: 'Tale of the Tape - Canelo',
    rarity: '1/1',
    description: 'SIGNED GLOVES + ANNUAL DAZN SUBSCRIPTION'
  },
  {
    type: 'gold',
    img: imgPath + 'nft-gold.png',
    title: 'Tale of the Tape - Saunders',
    rarity: '1/1',
    description: 'SIGNED GLOVES + ANNUAL DAZN SUBSCRIPTION'
  },
  {
    type: 'gold',
    img: imgPath + 'nft-gold.png',
    title: 'Prediction - Rounds 1-13',
    rarity: '13 (1 per round)',
    description:
      'FOR THE ROUND THE FIGHT ENDS IN ONLY, 2 TICKETS TO A FUTURE MATCHROOM FIGHT'
  },
  {
    type: 'silver',
    img: imgPath + 'nft-legend.png',
    title: 'Tale of the Tape - Canelo',
    rarity: '50',
    description:
      'IF CANELO WINS THIS NFT UNLOCKS AN ANNUAL DAZN SUBSCRIPTION + ALL NFT HOLDERS ENTERED INTO A DRAW FOR 1 PERSONALIZED VIDEO FROM CANELO'
  },
  {
    type: 'silver',
    img: imgPath + 'nft-legend.png',
    title: 'Tale of the Tape - Saunders',
    rarity: '50',
    description:
      'IF SAUNDERS WINS THIS NFT UNLOCKS AN ANNUAL DAZN SUBSCRIPTION + ALL NFT HOLDERS ENTERED INTO A DRAW FOR 1 PERSONALIZED VIDEO FROM SAUNDERS'
  },
  {
    type: 'bronze',
    img: imgPath + 'nft-bronze.png',
    title: 'Prediction - Rounds 1-13',
    rarity: '100 (per round)',
    description:
      'FOR THE ROUND THE FIGHT ENDS IN ONLY, ANNUAL DAZN SUBSCRIPTION'
  }
];
