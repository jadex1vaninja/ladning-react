import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../Header';
import Cards from '../Cards';
import Footer from '../Footer';
import Registration from '../Registration';
import FeaturedNFT from '../FeaturedNFT';
import FAQs from '../FAQs';
import PromoBanner from '../Header/components/PromoBanner';
import CountdownWrapper from '../CountdownWrapper';
import TermsConditions from '../TermsConditions';
import featuredBgRipped from '../../assets/img/featured-bg.png';
import featuredBgBlack from '../../assets/img/featured-nft-black.png';
import { RING_WALK_LINK, WINNING_MOMENT_LINK } from '../../const';
import './Landing.scss';
import { FeaturedNFT_ID_1, FeaturedNFT_ID_2 } from '../../const/nfts';

const winningMomentVideoSrc =
  'https://storage.opensea.io/files/cddcb2cc6ec9719248caf6f9358881e9.mp4';
const howItStartedVideoSrc =
  'https://storage.opensea.io/files/6a01f47ea67d96cb2d302b4de628005c.mp4';

const Landing = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header isUsedOnSecondaryPage={false} promoBanner={<PromoBanner />} />
      <main className='root'>
        <FeaturedNFT
          title={t('nft-card.post-fight-title-legendary')}
          description='featured-nft.description.post-fight-highlights-ended'
          bgURL={featuredBgRipped}
          videoSource={winningMomentVideoSrc}
          link={WINNING_MOMENT_LINK}
          featuredId={FeaturedNFT_ID_1}
        />
        <FeaturedNFT
          withMargin
          title={t('nft-card.post-fight-title-legendary-started')}
          description='featured-nft.description.post-fight-highlights-started'
          bgURL={featuredBgBlack}
          videoSource={howItStartedVideoSrc}
          link={RING_WALK_LINK}
          featuredId={FeaturedNFT_ID_2}
        />
        <CountdownWrapper title={t('featured-nft.countdown.title')} />
        <Cards />
        <FAQs
          show={4}
          isButtonGetBack={false}
          isRotatedBg={false}
          isUsedOnSecondaryPage={false}
        />
        <Registration />
        {/* <TermsConditions /> */}
      </main>
      <Footer />
    </>
  );
};

export default Landing;
