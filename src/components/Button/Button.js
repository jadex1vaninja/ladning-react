import React from 'react';
import './Button.scss';

const Button = ({ ctaText, onClick, isDisabled }) => {
  return (
    <button onClick={onClick} className='CTA' disabled={isDisabled}>
      {ctaText}
    </button>
  );
};

export default Button;
