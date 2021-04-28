import React from 'react';
import Header from '../Header';
import Cards from '../Cards';
import Video from '../Video/Video';
import WhatIs from '../WhatIs';
import Footer from '../Footer';
import Registration from '../Registration';
import OwnItSection from '../OwnItSection';
import FeaturedNFT from '../FeaturedNFT';
import FAQs from '../FAQs';
import TermsConditions from '../TermsConditions';
import './Landing.scss';

const Landing = () => {
  return (
    <>
      <Header />
      <main className='root'>
        <FeaturedNFT />
        <FAQs />
        {/*<OwnItSection />*/}
        <Registration />
        <TermsConditions />
        {/*<Cards />*/}
        {/*<Video />*/}
        {/*<WhatIs />*/}
      </main>
      <Footer />
    </>
  );
};

export default Landing;
