import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './FAQsPage.scss';
import FAQs from '../../components/FAQs';

const FAQsPage = () => {
  const history = useHistory();

  const getBack = () => {
    history.push('/');
  };

  return (
    <>
      <Header isUsedOnSecondaryPage secondaryTitle='FAQs' />
      <FAQs
        show={10}
        isButtonGetBack
        btnHandler={getBack}
        isRotatedBg
        isUsedOnSecondaryPage
      />
      <Footer />
    </>
  );
};

export default FAQsPage;
