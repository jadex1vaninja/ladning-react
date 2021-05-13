import React from 'react';
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';
import * as Yup from 'yup';
import Input from '../Input/Input';

const OwnForm = ({ initialFormState, onSubmit, closeModalHandler }) => {
  return (
    <Formik
      initialValues={initialFormState}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .required('Required field')
          .min(3, 'Should has at least 3 symbols')
          .matches(/^[A-ZА-Я][a-zа-я]{2,20}|[a-zа-я]{2,20}/, {
            message: 'Must be a string',
            excludeEmptyString: true
          }),
        email: Yup.string()
          .email('Email has been typed incorrect')
          .required('Required field'),
        street: Yup.string()
          .required('Required field')
          .min(3, 'At least should have 3 symbols')
          .matches(/^[A-ZА-Я][a-zа-я]{2,20}|[a-zа-я]{2,20}/, {
            message: 'Must be a string',
            excludeEmptyString: true
          }),
        city: Yup.string()
          .required('Required field')
          .min(3, 'At least should have 3 symbols')
          .matches(/^[A-ZА-Я][a-zа-я]{2,20}|[a-zа-я]{2,20}/, {
            message: 'Must be a string',
            excludeEmptyString: true
          }),
        state: Yup.string()
          .required('Required field')
          .min(3, 'At least should have 3 symbols')
          .matches(/[A-ZА-Я][a-zа-я]{2,20}|[a-zа-я]{2,20}/, {
            message: 'Must be a string',
            excludeEmptyString: true
          }),
        zipcode: Yup.number()
          .positive()
          .integer()
          .typeError('Must be a number')
          .required('Required field'),

        country: Yup.string()
          .min(4, 'Should has at least 4 symbols')
          .required('Required field'),
        additional: Yup.string()
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
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <Input
            text={'First name / Last Name'}
            htmlFor={'name'}
            name={'name'}
            errors={errors.name}
            touched={touched.name}
          />
          <Input
            text={'Email'}
            htmlFor={'email'}
            name={'email'}
            errors={errors.email}
            touched={touched.email}
          />
          <Input
            text={'Street'}
            htmlFor={'street'}
            name={'street'}
            errors={errors.street}
            touched={touched.street}
          />
          <Input
            text={'City'}
            htmlFor={'city'}
            name={'city'}
            errors={errors.city}
            touched={touched.city}
          />
          <Input
            text={'State'}
            htmlFor={'state'}
            name={'state'}
            errors={errors.state}
            touched={touched.state}
          />
          <Input
            text={'Zipcode'}
            htmlFor={'zipcode'}
            name={'zipcode'}
            errors={errors.zipcode}
            touched={touched.zipcode}
          />
          <Input
            text={'Country'}
            htmlFor={'country'}
            name={'country'}
            errors={errors.country}
            touched={touched.country}
          />
          <Input
            text={'Additional info'}
            htmlFor={'additional'}
            name={'additional'}
            errors={errors.additional}
            touched={touched.additional}
          />
          <div className='form-group'>
            <button
              type='submit'
              className='btn btn-primary mr-2'
              disabled={!isValid}
            >
              Confirm
            </button>
            <button
              type='reset'
              className='btn btn-secondary mr-2'
              onClick={resetForm}
            >
              Reset
            </button>
            <button
              type='button'
              className='btn btn-danger'
              onClick={closeModalHandler}
            >
              Decline
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default OwnForm;
