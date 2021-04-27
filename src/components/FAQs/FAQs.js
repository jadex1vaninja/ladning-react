import React, { useState } from 'react';
import Accordion from '../Accordion';
import './FAQs.scss';

const initialState = {
  block1: false,
  block2: false,
  block3: true
};

const FAQs = () => {
  const [state, setState] = useState(initialState);

  const toggle = (index) => () => {
    setState((prevState) => {
      return {
        ...prevState,
        [`block${index}`]: !state[`block${index}`]
      };
    });
  };

  const toggleExpand = (expand = false) => () => {
    setState({
      block1: expand,
      block2: expand,
      block3: expand
    });
  };

  const accordionList = [
    { title: 'First Accordion' },
    { title: 'Second Accordion' },
    { title: 'Third Accordion' }
  ];

  return (
    <div className='faq'>
      <div className='container'>
        <button type='button' className='btn' onClick={toggleExpand(true)}>
          Expand All
        </button>
        <button type='button' className='btn' onClick={toggleExpand()}>
          Collapse All
        </button>
        <dl className='accordion'>
          {accordionList.map((item, index) => (
            <Accordion
              title={item.title}
              onClick={toggle(index + 1)}
              expand={state[`block${index + 1}`]}
            />
          ))}
        </dl>
      </div>
      ;
    </div>
  );
};

export default FAQs;
