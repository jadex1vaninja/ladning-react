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
        <Cards />
        <Video />
        <WhatIs />
      </main>
      <Footer />
    </>
  );
};

export default Landing;
