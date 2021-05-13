import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './FAQsPage.scss';
import FAQs from '../../components/FAQs';
import { useTranslation } from 'react-i18next';

const FAQsPage = () => {
  const history = useHistory();

  const getBack = () => {
    history.push('/');
  };
  const { t } = useTranslation();
  return (
    <>
      <Header isUsedOnSecondaryPage secondaryTitle={t('faq.title')} />
      <FAQs
        show={10}
        isButtonGetBack
        btnHandler={getBack}
        isRotatedBg
        isUsedOnSecondaryPage
      />
      <Footer isUsedOnSecondaryPage />
    </>
  );
};

export default FAQsPage;
