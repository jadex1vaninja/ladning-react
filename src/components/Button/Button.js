import React from 'react';
import './Button.scss';

const Button = ({ ctaText, onClick, isDisabled, extraClassName = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`CTA ${extraClassName}`}
      disabled={isDisabled}
    >
      {ctaText}
    </button>
  );
};

export default Button;
