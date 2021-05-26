export const ETHEREUM = window.ethereum;
export const API_KEY = '919ec8c06a8b476cbbc34f2e40ef7cc7';
export const API_URL = `https://api.opensea.io/api/v1`;
export const PHONE = 320;
export const TABLET = 768;
export const DESKTOP = 1024;
// export const DESKTOP_LARGE = 1440;
// export const DESKTOP_EXTRA_LARGE = 1920;
export const collectionId = 'dazn-x-canelo-saunders';
export const API_ALL = `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=25&collection=${collectionId}`;
export const LOCAL_API_LAMDA = 'http://localhost:3000/api';
export const API_LAMBDA = 'https://ladma-dazn.vercel.app/api';
export const API_OWNER = `${API_ALL}&owner=`;
export const imgPath = process.env.PUBLIC_URL + '/assets/img/';
export const vidPath = process.env.PUBLIC_URL + '/assets/video/';
export const CONTRACT_ADDRESS = '0x495f947276749ce646f68ac8c248420045cb7b5e';
export const LINK_TO_LIVE = `https://opensea.io/assets/${CONTRACT_ADDRESS}/`;
export const DAZN_PUBLIC_LINK =
  'https://www.dazn.com/?utm_source=NFT&utm_medium=referral&utm_campaign=NFT';
export const OPENSEA_COLLECTION_LINK =
  'https://opensea.io/assets/dazn-x-canelo-saunders?search[resultModel]=ASSETS&search[toggles][0]=ON_AUCTION';
export const RING_WALK_LINK =
  'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/69208789200216951769366063301950903931594320778910349241631506802757146247169';
export const WINNING_MOMENT_LINK =
  'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/69208789200216951769366063301950903931594320778910349241631506803856657874945';
export const winningMomentVideoSrc =
  'https://storage.opensea.io/files/cddcb2cc6ec9719248caf6f9358881e9.mp4';
export const howItStartedVideoSrc =
  'https://storage.opensea.io/files/6a01f47ea67d96cb2d302b4de628005c.mp4';

export const NFTS = [
  {
    type: 'legendary',
    img: imgPath + 'nft-legend.png',
    video: vidPath + 'nft-legend.gif',
    title: 'Knockout - Canelo',
    rarity: '1/1',
    description:
      'THE WINNING BID WILL RECEIVE 2 TICKETS TO THE NEXT MATCHROOM CANELO FIGHT + SIGNED GLOVES FROM CANELO + A PERSONALIZED VIDEO'
  },
  {
    type: 'legendary',
    img: imgPath + 'nft-legend.png',
    video: vidPath + 'nft-legend.gif',
    title: 'Knockout - Saunders',
    rarity: '1/1',
    description:
      'THE WINNING BID WILL RECEIVE 2 TICKETS TO THE NEXT MATCHROOM SAUNDERS FIGHT + SIGNED GLOVES FROM SAUNDERS + A PERSONALIZED VIDEO'
  },
  {
    type: 'gold',
    img: imgPath + 'nft-gold.png',
    video: vidPath + 'nft-gold.gif',
    title: 'Tale of the Tape - Canelo',
    rarity: '1/1',
    description: 'SIGNED GLOVES + ANNUAL DAZN SUBSCRIPTION'
  },
  {
    type: 'gold',
    img: imgPath + 'nft-gold.png',
    video: vidPath + 'nft-gold.gif',
    title: 'Tale of the Tape - Saunders',
    rarity: '1/1',
    description: 'SIGNED GLOVES + ANNUAL DAZN SUBSCRIPTION'
  },
  {
    type: 'gold',
    img: imgPath + 'nft-gold.png',
    video: vidPath + 'nft-gold.gif',
    title: 'Prediction - Rounds 1-13',
    rarity: '13 (1 per round)',
    description:
      'FOR THE ROUND THE FIGHT ENDS IN ONLY, 2 TICKETS TO A FUTURE MATCHROOM FIGHT'
  },
  {
    type: 'silver',
    img: imgPath + 'nft-legend.png',
    video: vidPath + 'nft-gold.gif',
    title: 'Tale of the Tape - Canelo',
    rarity: '50',
    description:
      'IF CANELO WINS THIS NFT UNLOCKS AN ANNUAL DAZN SUBSCRIPTION + ALL NFT HOLDERS ENTERED INTO A DRAW FOR 1 PERSONALIZED VIDEO FROM CANELO'
  },
  {
    type: 'silver',
    img: imgPath + 'nft-legend.png',
    video: vidPath + 'nft-legend.gif',
    title: 'Tale of the Tape - Saunders',
    rarity: '50',
    description:
      'IF SAUNDERS WINS THIS NFT UNLOCKS AN ANNUAL DAZN SUBSCRIPTION + ALL NFT HOLDERS ENTERED INTO A DRAW FOR 1 PERSONALIZED VIDEO FROM SAUNDERS'
  },
  {
    type: 'bronze',
    img: imgPath + 'nft-bronze.png',
    video: vidPath + 'nft-bronze.gif',
    title: 'Prediction - Rounds 1-13',
    rarity: '100 (per round)',
    description:
      'FOR THE ROUND THE FIGHT ENDS IN ONLY, ANNUAL DAZN SUBSCRIPTION'
  }
];
