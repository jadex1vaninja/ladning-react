import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './FAQsPage.scss';
import FAQs from '../../components/FAQs';
import { useTranslation } from 'react-i18next';

const FAQsPage = () => {
  const history = useHistory();
  const [language, setLanguage] = useState('en');
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const getBack = () => {
    history.push('/');
  };

  return (
    <>
      <Header
        language={language}
        setLanguage={setLanguage}
        changeLanguage={changeLanguage}
        isUsedOnSecondaryPage
        secondaryTitle={t('faq.title')}
      />
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
