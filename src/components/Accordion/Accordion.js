import React from 'react';
import { useTranslation } from 'react-i18next';

const Accordion = ({ title, description, expand, onClick }) => {
  const { t } = useTranslation();

  return (
    <div>
      <dt className={expand ? 'title is-expanded' : 'title'} onClick={onClick}>
        {t(title)}
      </dt>
      <dd className={expand ? 'content is-expanded' : 'content'}>
        {description.map((elem) => (
          <p dangerouslySetInnerHTML={{ __html: t(elem) }} />
        ))}
      </dd>
    </div>
  );
};

export default Accordion;
