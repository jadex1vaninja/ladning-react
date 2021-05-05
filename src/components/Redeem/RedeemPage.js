import React, { useState, useEffect } from 'react';
// import { ethers } from 'ethers';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Modal, Form } from 'react-bootstrap';
import { Spinner } from '../shared/SVG/Spinner';
import Item from '../Item';
import Input from '../Input/Input';
import { ETHEREUM, API_URL } from '../../const';
import './ReedemPage.scss';

const RedeemPage = () => {
  // A Web3Provider wraps a standard Web3 provider, which is
  // what Metamask injects as window.ethereum into each page
  // const provider = new ethers.providers.Web3Provider(window.ethereum);
  // const signer = provider.getSigner();

  // const signMessage = async () => {
  //   try {
  //     const signature = await signer.signMessage('Hello there');
  //     console.log(signature);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  const [error, setError] = useState(false);
  const [isEthereum, setIsEthereum] = useState(false);
  const [walletID, setWalletID] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [initialFormState, setInitialFormState] = useState({
    name: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    additional: ''
  });

  useEffect(() => {
    ETHEREUM ? setIsEthereum(true) : setIsEthereum(false);
  }, []);

  const closeErrorNotification = () => {
    setError(false);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL + walletID}`);
      const { assets } = await response.json();
      setData(assets);
    } catch (e) {
      console.error('Ошибка:', e);
    } finally {
      setLoading(false);
    }
  };

  const connectWallet = async () => {
    setLoading(true);

    //if you have closed Metamask window [X]
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 10000);

    try {
      if (ETHEREUM) {
        const accounts = await ETHEREUM.send('eth_requestAccounts');
        const {
          result: [ID]
        } = accounts;
        setWalletID(ID);
      }
    } catch (e) {
      console.error(e);
      setError(true);
    } finally {
      setLoading(false);
      clearTimeout(timeOut);
    }
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleClickedID = (id) => {
    const item = data.find((item) => item.id === id);
    setInitialFormState((prevState) => ({
      ...prevState,
      walletID,
      itemId: item.id,
      itemName: item.name,
      itemDescription: item.description,
      itemLink: item.permalink
    }));
  };

  const onSubmit = async (values) => {
    console.log('VALUES', values);
    handleCloseModal();
  };
  return (
    <h1 style={{color: "white", fontSsize: "48px", textAlign: "center", paddingTop: "100px"}}>
      Coming Soon
    </h1>
  );
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
      {loading ? (
        <Spinner />
      ) : (
        <div className='redeem-root__button-wrapper'>
          <button
            className='redeem-root__btn'
            disabled={!!walletID}
            onClick={connectWallet}
          >
            Connect wallet
          </button>
          {walletID && (
            <button
              className='redeem-root__btn-two'
              disabled={!!data.length}
              onClick={fetchData}
            >
              View items
            </button>
          )}
        </div>
      )}
      <div className='redeem-root__preview'>
        {Boolean(data.length) &&
          data.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              imageUrl={item.image_thumbnail_url}
              link={item.permalink}
              handleModal={handleShowModal}
              handleID={handleClickedID}
            />
          ))}
      </div>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
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
                    onClick={handleCloseModal}
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

export default RedeemPage;
