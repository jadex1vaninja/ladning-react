import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './PrivacyPage.scss';
import { useHistory } from 'react-router';
import { PrivacyContent } from './Content';
import { useTranslation } from 'react-i18next';

const PrivacyPage = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const getBack = () => {
    history.push('/');
  };
  return (
    <>
      <Header isUsedOnSecondaryPage secondaryTitle={t('terms.CTA-two')} />
      <div className='privacy'>
        <div className='privacy__wrapper'></div>
        <div className='privacy__container'>
          <p className='privacy__tittle'>{t('terms.CTA-two')}</p>
          <div className='splitter'></div>
          <PrivacyContent></PrivacyContent>
          <div className='privacy__btn-wrapper'>
            <button className='privacy__btn' onClick={getBack}>
              GO HOME
            </button>
          </div>
        </div>
      </div>
      <Footer isUsedOnSecondaryPage />
    </>
  );
};

export default PrivacyPage;
