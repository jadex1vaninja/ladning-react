import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Modal, Form } from 'react-bootstrap';
import { Spinner } from '../shared/SVG/Spinner';
import Item from '../Item';
import Input from '../Input/Input';
import './Reedem.scss';

const Redeem = ({
  isEthereum,
  error,
  loading,
  data,
  showModalHandler,
  closeModalHandler,
  showModal,
  initialFormState,
  handleClickedID,
  onSubmit,
  closeErrorNotification
}) => {
  console.log(data);
  return (
    <div className='redeem-root'>
      {!isEthereum && (
        <div className='redeem-root__error'>
          <h1>Missing Metamask</h1>
          <p>Install Metamask please</p>
        </div>
      )}
      {error && (
        <div className='redeem-root__error'>
          <p
            className='redeem-root__error-close'
            onClick={closeErrorNotification}
          >
            X
          </p>
          <h1>Error</h1>
          <p>Something goes wrong...</p>
        </div>
      )}

      <div className='redeem-root__preview'>
        <div className='redeem-root__preview-header'>
          <p className='redeem-root__preview-header-text'>NFT</p>
          <p className='redeem-root__preview-header-text'>Token Id</p>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {Boolean(data.length) &&
              data.map((item) => (
                <Item
                  key={item.id}
                  id={item.id}
                  link={item.permalink}
                  name={item.name}
                />
              ))}
          </>
        )}
      </div>
      <Modal
        show={showModal}
        onHide={closeModalHandler}
        backdrop='static'
        keyboard={false}
        centered
        animation={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Redeem;
