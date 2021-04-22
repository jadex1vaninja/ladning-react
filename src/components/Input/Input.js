import React from 'react';
import { ErrorMessage, Field } from 'formik';
import './Input';

const Input = ({ htmlFor, name, errors, text, touched }) => {
  return (
    <div className='form-group'>
      <label htmlFor={htmlFor}>{text}</label>
      <Field
        name={name}
        type='text'
        className={'form-control' + (errors && touched ? ' is-invalid' : '')}
      />
      <ErrorMessage name={name} component='div' className='invalid-feedback' />
    </div>
  );
};

export default Input;
