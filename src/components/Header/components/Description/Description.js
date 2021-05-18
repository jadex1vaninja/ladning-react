import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Description = ({ isMore, text }) => {
  const [showMore, setShowMore] = useState(false);
  const { t } = useTranslation();

  return (
    <div className='header__description'>
      <p
        className='header__description-text'
        dangerouslySetInnerHTML={{ __html: text }}
      />
      {/* TODO: ADD LINK */}
      {isMore && !showMore && (
        <span
          onClick={() => setShowMore(true)}
          className='header__description-link'
        >
          {t('header.description.link')}
        </span>
      )}
      {showMore && (
        <>
          <br></br>
          <p className='header__description-text'>
            {t('header.read-more.text')}
          </p>
          <br></br>
          <ul className='header__list'>
            <li
              dangerouslySetInnerHTML={{
                __html: t('header.read-more.tale')
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('header.read-more.knockout')
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('header.read-more.prediction')
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('header.read-more.post-fight')
              }}
            />
          </ul>
          <span
            className='header__description-link'
            onClick={() => setShowMore(false)}
          >
            {t('header.description.link-less')}
          </span>
        </>
      )}
    </div>
  );
};

export default Description;
