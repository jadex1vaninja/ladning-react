import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './PrivacyPage.scss';
import { useHistory } from 'react-router';
import { PrivacyContent } from './Content';

const PrivacyPage = () => {
  const history = useHistory();

  const getBack = () => {
    history.push('/');
  };
  return (
    <>
      <Header isUsedOnSecondaryPage secondaryTitle='Privacy Policy' />
      <div className='privacy'>
        <div className='privacy__wrapper'></div>
        <div className='privacy__container'>
          <p className='privacy__tittle'>Privacy Policy</p>
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
