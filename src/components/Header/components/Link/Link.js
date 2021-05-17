import React from 'react';

const Link = ({ className, secondClassName, href, target, text }) => {
  return (
    <a className={className} target={target} href={href}>
      <span className={secondClassName}>{text}</span>
    </a>
  );
};

export default Link;
