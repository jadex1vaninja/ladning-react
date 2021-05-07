import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './T&CsPage.scss';
import { useHistory } from 'react-router';
import { TcsContent } from './TcsContent';
import { useTranslation } from 'react-i18next';

const TCsPage = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const getBack = () => {
    history.push('/');
  };
  return (
    <>
      <Header isUsedOnSecondaryPage secondaryTitle='Terms & Conditions' />
      <div className='tcs'>
        <div className='tcs__wrapper'></div>
        <div className='tcs__container'>
          <p className='tcs__tittle'>Terms of Use</p>
          <div className='splitter'></div>
          <TcsContent></TcsContent>
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
