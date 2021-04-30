import React, { useState } from 'react';
import Accordion from '../Accordion';
import { useTranslation } from 'react-i18next';
import { accordionInitialList } from '../../const/accordion';
import './FAQs.scss';

const FAQs = () => {
  const [accordion, setAccordion] = useState(accordionInitialList);
  const [active, setActive] = useState(null);
  const { t } = useTranslation();

  const handleActive = (index) => {
    active !== index ? setActive(index) : setActive(null);
  };

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

  return (
    <div className='faq'>
      <h1 className='faq__title'>{t('faq.title')}</h1>
      <p className='faq__close' onClick={closeAll}>
        &#215;
      </p>
      <p className='faq__text'>{t('faq.sub-title')}</p>
      <div className='faq__container'>
        <dl className='accordion'>
          {accordion.map((item, index) => (
            <Accordion
              title={item.title}
              description={item.description}
              onClick={() => handleActive(index)}
              expand={active === index}
            />
          ))}
        </dl>
      </div>
    </div>
  );
};

export default FAQs;
