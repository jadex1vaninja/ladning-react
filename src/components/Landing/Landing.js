import React from 'react';
import Header from '../Header';
import Cards from '../Cards';
import Footer from '../Footer';
import Registration from '../Registration';
import FeaturedNFT from '../FeaturedNFT';
import FAQs from '../FAQs';
import PromoBanner from '../Header/components/PromoBanner';
import TermsConditions from '../TermsConditions';
import './Landing.scss';

const Landing = () => {
  return (
    <>
      <Header isUsedOnSecondaryPage={false} promoBanner={<PromoBanner />} />
      <main className='root'>
        <FeaturedNFT />
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
