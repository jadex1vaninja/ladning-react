import React from 'react';
import { useTranslation } from 'react-i18next';

const Accordion = ({ title, description, expand, onClick }) => {
  const { t } = useTranslation();

  const isArray = Array.isArray(description);

  return (
    <div>
      <dt className={expand ? 'title is-expanded' : 'title'} onClick={onClick}>
        {t(title)}
      </dt>
      <dd className={expand ? 'content is-expanded' : 'content'}>
        {isArray ? (
          description.map((elem) => (
            <p dangerouslySetInnerHTML={{ __html: t(elem) }}></p>
          ))
        ) : (
          <p
            dangerouslySetInnerHTML={{
              __html: t(description)
            }}
          ></p>
        )}
      </dd>
    </div>
  );
};

export default Accordion;
