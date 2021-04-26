import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './Registration.scss';

const initialFields = {
  name: '',
  surname: '',
  email: '',
  receiveMessages: false
};

const Registration = () => {
  const { t } = useTranslation();
  const [formFields, setFormFields] = useState(initialFields);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
    setFormFields((prevState) => {
      return {
        ...prevState,
        ...initialFields
      };
    });
  };
  const openModal = () => setShowModal(true);

  const onChange = (event, name) => {
    const { value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const toggleCheckbox = (event) => {
    const { checked } = event.target;

    setFormFields({ ...formFields, receiveMessages: checked });
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const { name, email, surname, receiveMessages } = formFields;

      if (!email || !name || !surname) return;

      const res = await fetch(
        `https://mailapi.vercel.app/api/send-mail?email=${email}&name=${name}&surname=${surname}&receiveMessages=${receiveMessages}`
      );

      // eslint-disable-next-line no-unused-vars
      const data = await res.json();
      // window.scrollTo(0, 0);
      // window.location.reload();
      openModal();
    } catch (e) {
      console.error(e, ' : ERROR');
    }
  };

  return (
    <div className='register' id='subscribe'>
      <div className='register__title'>
        <h2 className='register__title-text'>{t('register.title')}</h2>
      </div>
      <div className='register__main-content'>
        <p>{t('register.content-text')}</p>
        <div className='register__form'>
          <form onSubmit={onSubmit}>
            <input
              required
              id='name'
              value={formFields.name}
              placeholder={t('register.input-firstname-placeholder')}
              onChange={(event) => onChange(event, 'name')}
            />
            <input
              required
              id='surname'
              value={formFields.surname}
              placeholder={t('register.input-lastname-placeholder')}
              onChange={(event) => onChange(event, 'surname')}
            />
            <input
              required
              type='email'
              id='email'
              value={formFields.email}
              placeholder={t('register.input-email-placeholder')}
              onChange={(event) => onChange(event, 'email')}
            />

            <div className='register__form-info'>
              <p>{t('register.form-text')}</p>
              <div className='register__checkbox'>
                <label htmlFor='receiveMessages'>
                  {t('register.checkbox-text')}
                </label>
                <input
                  type='checkbox'
                  id='receiveMessages'
                  onChange={toggleCheckbox}
                />
              </div>
            </div>

            <div className='register__submit'>
              <button type='submit' id='submit'>
                {t('register.submit-btn-text')}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Modal
        className='register__modal'
        show={showModal}
        backdrop='static'
        keyboard={false}
        centered
        animation={false}
      >
        <Modal.Body className='register__modal-content'>
          <div className='register__modal-inner'>
            <h1 className='register__modal-title'>
              {t('register.modal-title')}
            </h1>
            <p className='register__modal-text'>{t('register.modal-text')}</p>
            <div className='register__modal-submit'>
              <button onClick={closeModal} type='button'>
                {t('register.modal-btn')}
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Registration;
