import React from 'react';
import Header from '../Header';
import Cards from '../Cards';
import Video from '../Video/Video';
import WhatIs from '../WhatIs';
import Footer from '../Footer';
import Registration from '../Registration';
import OwnItSection from '../OwnItSection';
import './Landing.scss';

export const imgPath = process.env.PUBLIC_URL + '/assets/img/';

const Landing = () => {
  return (
    <>
      <Header />
      <main className='root'>
        <OwnItSection />
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
