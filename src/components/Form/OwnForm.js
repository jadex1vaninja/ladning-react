import React from 'react';
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { Spinner } from '../shared/SVG/Spinner';
import Input from '../Input/Input';
import './OwnForm.scss';

const OwnForm = ({ initialFormState, onSubmit, loading }) => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialFormState}
      validationSchema={Yup.object().shape({
        firstName: Yup.string()
          .required('Required field')
          .min(3, 'Should has at least 3 symbols')
          .matches(/^[A-ZА-Я][a-zа-я]{2,20}|[a-zа-я]{2,20}|[A-ZА-Я]{2,20}/, {
            message: 'Must be a string',
            excludeEmptyString: true
          }),
        lastName: Yup.string()
          .required('Required field')
          .min(3, 'Should has at least 3 symbols')
          .matches(/^[A-ZА-Я][a-zа-я]{2,20}|[a-zа-я]{2,20}|[A-ZА-Я]{2,20}/, {
            message: 'Must be a string',
            excludeEmptyString: true
          }),
        email: Yup.string()
          .email('Email has been typed incorrect')
          .required('Required field'),
        country: Yup.string()
          .min(4, 'Should has at least 4 symbols')
          .required('Required field')
      })}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        isValidating,
        resetForm
      }) => (
        <Form
          className='main-form'
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <Input
            text={'First name'}
            htmlFor={'firstName'}
            name={'firstName'}
            errors={errors.firstName}
            touched={touched.firstName}
          />
          <Input
            text={'Last name'}
            htmlFor={'lastName'}
            name={'lastName'}
            errors={errors.lastName}
            touched={touched.lastName}
          />
          <Input
            text={'Email'}
            htmlFor={'email'}
            name={'email'}
            errors={errors.email}
            touched={touched.email}
          />
          <Input
            text={'Country'}
            htmlFor={'country'}
            name={'country'}
            errors={errors.country}
            touched={touched.country}
          />
          <div className='form-group main-form__submit-wrapper'>
            {loading ? (
              <Spinner />
            ) : (
              <button
                type='submit'
                className='main-form__submit-btn'
                disabled={!isValid}
              >
                Submit
              </button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default OwnForm;
