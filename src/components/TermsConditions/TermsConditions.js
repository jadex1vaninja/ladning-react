import React from 'react';
import { useTranslation } from 'react-i18next';
import './TermsConditions.scss';

const TermsConditions = () => {
  const { t } = useTranslation();

  return (
    <div className='terms' id='terms'>
      <h1 className='terms__title'>{t('terms.title')}</h1>
      <div className='terms__btn-wrapper'>
        {/* TODO: LINK */}
        <a className='terms__CTA' target="_blank" href=''>
          {t('terms.CTA-one')}
        </a>
        <a className='terms__CTA' target="_blank" href=''>
          {t('terms.CTA-two')}
        </a>
      </div>
    </div>
  );
};

export default TermsConditions;
