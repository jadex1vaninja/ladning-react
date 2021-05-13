import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './T&CsPage.scss';
import { useHistory } from 'react-router';
import { TcsContent } from './TcsContent';
import { useTranslation } from 'react-i18next';
import TcsContentEs from './TcsContentEs';
const TCsPage = () => {
  const history = useHistory();
  const getBack = () => {
    history.push('/');
  };

  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en');
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const _language = i18n.language;
  const IS_SPANISH = _language === 'es';
  return (
    <>
      <Header
        language={language}
        setLanguage={setLanguage}
        changeLanguage={changeLanguage}
        isUsedOnSecondaryPage
        secondaryTitle='Terms & Conditions'
      />
      <div className='tcs'>
        <div className='tcs__wrapper'></div>
        <div className='tcs__container'>
          <p className='tcs__tittle'>Terms of Use</p>
          <div className='splitter'></div>
          {IS_SPANISH ? (
            <TcsContentEs></TcsContentEs>
          ) : (
            <TcsContent></TcsContent>
          )}
          <div className='tcs__btn-wrapper'>
            <button className='tcs__btn' onClick={getBack}>
              {t('terms.go-home')}
            </button>
          </div>
        </div>
      </div>
      <Footer isUsedOnSecondaryPage />
    </>
  );
};

export default TCsPage;
