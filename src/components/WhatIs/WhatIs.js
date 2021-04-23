import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './WhatIs.scss';
const imgPath = process.env.PUBLIC_URL + '/assets/img/';

const WhatIs = () => {
  const [language, setLanguage] = useState('en');
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='whatIs'>
      <div className='whatIs__text-container'>
        <p className='whatIs__title'>{t('what-is-block.title')}</p>
        <p className='whatIs__main-info'>{t('what-is-block.info-text')}</p>
      </div>
    </div>
  );
};

export default WhatIs;
