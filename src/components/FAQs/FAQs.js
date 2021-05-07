import React, { useState } from 'react';
import Accordion from '../Accordion';
import { useTranslation } from 'react-i18next';
import { accordionInitialList } from '../../const/accordion';
import { useHistory } from 'react-router';
import './FAQs.scss';

const FAQs = ({
  show,
  isButtonGetBack,
  btnHandler,
  isRotatedBg,
  isUsedOnSecondaryPage
}) => {
  const [accordion, setAccordion] = useState(accordionInitialList);
  const [active, setActive] = useState(null);
  const history = useHistory();

  const handleActive = (index) => {
    active !== index ? setActive(index) : setActive(null);
  };
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const IS_SPANISH = language === 'es';
  // eslint-disable-next-line no-unused-vars
  const toggle = (index) => {
    const updated = [...accordion];
    const clickedItem = updated[index];
    updated[index] = { ...clickedItem, isExpanded: !clickedItem.isExpanded };
    console.log(updated);
    setAccordion(updated);
  };

  // eslint-disable-next-line no-unused-vars
  const closeAll = () => {
    setActive(null);
  };

  const rotated = isRotatedBg ? 'faq faq--rotated' : 'faq';

  return (
    <div className={rotated} id='faq'>
      {!isUsedOnSecondaryPage && (
        <>
          <h1 className='faq__title'>{t('faq.title')}</h1>
          <p className='faq__close' onClick={closeAll}>
            &#215;
          </p>
        </>
      )}
      {!IS_SPANISH && <p className='faq__text'>{t('faq.sub-title')}</p>}
      <div className='faq__container'>
        <dl className='accordion'>
          {accordion.slice(0, show).map((item, index) => (
            <Accordion
              key={JSON.stringify(item.title)}
              title={item.title}
              description={item.description}
              onClick={() => handleActive(index)}
              expand={active === index}
            />
          ))}
        </dl>
      </div>
      {isButtonGetBack && (
        <div className='faq__btn-wrapper'>
          <button
            className='faq__btn'
            onClick={() => window.open(window.location.origin)}
          >
            {t('terms.go-home')}
          </button>
        </div>
      )}
      {!isButtonGetBack && (
        <div className='faq__btn-wrapper'>
          <button className='faq__btn' onClick={() => window.open('/faq')}>
            {t('terms.more-faqs')}
          </button>
        </div>
      )}
    </div>
  );
};

export default FAQs;
