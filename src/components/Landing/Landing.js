import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../Header';
import Cards from '../Cards';
import Footer from '../Footer';
import Registration from '../Registration';
import FeaturedNFT from '../FeaturedNFT';
import FAQs from '../FAQs';
import PromoBanner from '../Header/components/PromoBanner';
import Description from '../Header/components/Description';
import CountdownWrapper from '../CountdownWrapper';
import Link from '../Header/components/Link';
import Heading from '../Header/components/Heading';
import featuredBgRipped from '../../assets/img/featured-bg.png';
import featuredBgBlack from '../../assets/img/featured-nft-black.png';
import {
  RING_WALK_LINK,
  WINNING_MOMENT_LINK,
  OPENSEA_COLLECTION_LINK,
  winningMomentVideoSrc,
  howItStartedVideoSrc
} from '../../const';
import { FeaturedNFT_ID_1, FeaturedNFT_ID_2 } from '../../const/nfts';
import './Landing.scss';

const Landing = () => {
  const [language, setLanguage] = useState('en');
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Header
        language={language}
        setLanguage={setLanguage}
        changeLanguage={changeLanguage}
        isUsedOnSecondaryPage={false}
        promoBanner={<PromoBanner language={language} isRedeemPage={false} />}
        description={<Description isMore text={t('header.description.text')} />}
        betweenLogosSection={
          <>
            <Heading
              className={'header__title'}
              text={t('header.title')}
              type={'h1'}
            />
            <Link
              className={'text-center'}
              secondClassName={'header__text'}
              text={t('header.sub-title')}
              href={OPENSEA_COLLECTION_LINK}
              target={'_blank'}
            />
          </>
        }
        displayLanguageSwitcher
      />
      <main className='root'>
        <FeaturedNFT
          title={t('nft-card.post-fight-title-legendary')}
          description='featured-nft.description.post-fight-highlights-ended'
          bgURL={featuredBgRipped}
          videoSource={winningMomentVideoSrc}
          link={WINNING_MOMENT_LINK}
          featuredId={FeaturedNFT_ID_1}
          sold={3.86}
          soldUSD={14739.83}
        />
        <FeaturedNFT
          withMargin
          title={t('nft-card.post-fight-title-legendary-started')}
          description='featured-nft.description.post-fight-highlights-started'
          bgURL={featuredBgBlack}
          videoSource={howItStartedVideoSrc}
          link={RING_WALK_LINK}
          featuredId={FeaturedNFT_ID_2}
          sold={1.8742}
          soldUSD={7156.83}
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
      </main>
      <Footer />
    </>
  );
};

export default Landing;
