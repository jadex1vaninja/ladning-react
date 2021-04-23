import React from 'react';
import { useTranslation } from 'react-i18next';
import './WhatIs.scss';

const WhatIs = () => {
  const { t } = useTranslation();

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
