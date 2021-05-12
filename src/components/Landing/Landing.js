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
import './Landing.scss';

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
        />
        <FeaturedNFT
          withMargin
          title={t('nft-card.post-fight-title-legendary-started')}
          description='featured-nft.description.post-fight-highlights-started'
          bgURL={featuredBgBlack}
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
