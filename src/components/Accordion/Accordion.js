import React from 'react';

const Accordion = ({ title, description, descriptionTwo, expand, onClick }) => {
  return (
    <div>
      <dt className={expand ? 'title is-expanded' : 'title'} onClick={onClick}>
        {title}
      </dt>
      <dd
        className={expand ? 'content is-expanded' : 'content'}
        onClick={onClick}
      >
        <p>{description}</p>
        <p>{descriptionTwo}</p>
      </dd>
    </div>
  );
};

export default Accordion;
