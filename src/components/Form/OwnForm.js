import React from 'react';
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';
import * as Yup from 'yup';
import Input from '../Input/Input';
import './OwnForm.scss';

const OwnForm = ({ initialFormState, onSubmit, closeModalHandler }) => {
  return (
    <Formik
      initialValues={initialFormState}
      validationSchema={Yup.object().shape({
        firstName: Yup.string()
          .required('Required field')
          .min(3, 'Should has at least 3 symbols')
          .matches(/^[A-ZА-Я][a-zа-я]{2,20}|[a-zа-я]{2,20}/, {
            message: 'Must be a string',
            excludeEmptyString: true
          }),
        lastName: Yup.string()
          .required('Required field')
          .min(3, 'Should has at least 3 symbols')
          .matches(/^[A-ZА-Я][a-zа-я]{2,20}|[a-zа-я]{2,20}/, {
            message: 'Must be a string',
            excludeEmptyString: true
          }),
        email: Yup.string()
          .email('Email has been typed incorrect')
          .required('Required field'),
        openseaUserName: Yup.string()
          .required('Required field')
          .min(3, 'At least should have 3 symbols')
          .matches(/^[A-ZА-Я][a-zа-я]{2,20}|[a-zа-я]{2,20}/, {
            message: 'Must be a string',
            excludeEmptyString: true
          }),
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
            closeModalHandler();
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
            text={'Opensea Username'}
            htmlFor={'openseaUserName'}
            name={'openseaUserName'}
            errors={errors.openseaUserName}
            touched={touched.openseaUserName}
          />
          <Input
            text={'Country'}
            htmlFor={'country'}
            name={'country'}
            errors={errors.country}
            touched={touched.country}
          />
          <div className='form-group main-form__submit-wrapper'>
            <button
              type='submit'
              className='main-form__submit-btn'
              disabled={!isValid}
            >
              Submit
            </button>
            {/*<button*/}
            {/*  type='reset'*/}
            {/*  className='btn btn-secondary mr-2'*/}
            {/*  onClick={resetForm}*/}
            {/*>*/}
            {/*  Reset*/}
            {/*</button>*/}
            {/*<button*/}
            {/*  type='button'*/}
            {/*  className='btn btn-danger'*/}
            {/*  onClick={closeModalHandler}*/}
            {/*>*/}
            {/*  Decline*/}
            {/*</button>*/}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default OwnForm;
