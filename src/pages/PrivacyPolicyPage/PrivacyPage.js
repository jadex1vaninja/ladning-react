import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './PrivacyPage.scss';
import { useHistory } from 'react-router';
import { PrivacyContent } from './Content';
import { useTranslation } from 'react-i18next';
import PrivacyPageEs from './PrivacyPageEs';

const PrivacyPage = () => {
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
        secondaryTitle={t('terms.CTA-two')}
      />
      <div className='privacy'>
        <div className='privacy__wrapper'></div>
        <div className='privacy__container'>
          <p className='privacy__tittle'>{t('terms.CTA-two')}</p>
          <div className='splitter'></div>
          {IS_SPANISH ? (
            <PrivacyPageEs></PrivacyPageEs>
          ) : (
            <PrivacyContent></PrivacyContent>
          )}

          <div className='privacy__btn-wrapper'>
            <button className='privacy__btn' onClick={getBack}>
              {t('terms.go-home')}
            </button>
          </div>
        </div>
      </div>
      <Footer isUsedOnSecondaryPage />
    </>
  );
};

export default PrivacyPage;
