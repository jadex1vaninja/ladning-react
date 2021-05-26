import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import _ from 'lodash';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Redeem from '../../components/Redeem';
import Button from '../../components/Button';
import PromoBanner from '../../components/Header/components/PromoBanner';
import Description from '../../components/Header/components/Description';
import { ETHEREUM, API_KEY, API_OWNER, API_LAMBDA } from '../../const';
import Heading from '../../components/Header/components/Heading';
import MyModal from '../../components/MyModal';
import './RedeemPage.scss';

const RedeemPage = () => {
  const CODE_GENERATOR = Math.floor(Math.random() * 1e21);
  const [provider, setProvider] = useState(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [isEthereum, setIsEthereum] = useState(false);
  const [isRedeemed, setIsRedeemed] = useState(false);
  const [isMetamaskModal, setIsMetamaskModal] = useState(false);
  const [walletID, setWalletID] = useState('');
  const [signature, setSignature] = useState(null);
  const [isSigned, setIsSigned] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [data, setData] = useState([]);
  const [dataAll, setDataAll] = useState([]);
  const [secretMessage, setSecretMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [initialFormState, setInitialFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    walletID,
    signature,
    message: secretMessage,
    token_id: null
  });
  const [language, setLanguage] = useState('en');
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  // A Web3Provider wraps a standard Web3 provider, which is
  // what Metamask injects as window.ethereum into each page
  let signer;
  if (provider) signer = provider.getSigner();

  const signMessage = async () => {
    try {
      const signature = await signer.signMessage(secretMessage);
      setSignature(signature);
      setIsSigned(true);
      return signature;
    } catch (e) {
      console.log('error');
      console.error(e);
      setIsSigned(false);
      handleCloseModal();
    }
  };

  const closeErrorNotification = () => {
    setError(false);
  };

  const fetchData = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_OWNER + id}`, {
        headers: {
          'X-API-KEY': API_KEY
        }
      });
      const { assets } = response.data;
      setData(assets);
    } catch (e) {
      console.error('Ошибка:', e);
    } finally {
      setLoading(false);
    }
  };

  const fetchDataAll = async () => {
    setLoading(true);
    try {
      console.log('starting fetch data');
      const response = await axios.get(`${API_LAMBDA}/nfts`);
      const { nfts } = response.data;
      setDataAll(nfts);
    } catch (e) {
      console.error('Ошибка:', e);
    } finally {
      setLoading(false);
    }
  };

  const connectWallet = async () => {
    setLoading(true);
    try {
      if (isEthereum) {
        const accounts = await ETHEREUM.request({
          method: 'eth_requestAccounts',
          params: [
            {
              eth_accounts: {}
            }
          ]
        });
        // const mockID = '0xfb52b9ff03ccc774f14e50fd6463af25462a3673';

        setWalletID(_.head(accounts));
        return _.head(accounts);
      }
      console.log('WALLET HAS BEEN CONNECTED');
    } catch (e) {
      console.error(e);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleShowModal = () => setShowModal(true);

  const handleCloseModal = () => {
    setShowModal(false);
    setIsSigned(false);
  };

  const addExtraToFormState = (token) => {
    setInitialFormState((prevState) => ({
      ...prevState,
      token_id: token
    }));
  };

  const onSubmit = async (values) => {
    setSubmitLoading(true);
    try {
      const response = await axios.post(`${API_LAMBDA}/redeem`, {
        ...values,
        message: secretMessage,
        signature,
        walletID
      });
      const data = response.data;
      if (data.error) {
        setError(true);
        setErrorMessage(data);
      } else {
        setIsRedeemed(true);
      }
      handleCloseModal();
    } catch (error) {
      console.error('Ошибка:', error);
    } finally {
      handleCloseModal();
      setSubmitLoading(false);
    }
  };

  const clickHandler = async () => {
    if (!isMetamaskModal && !isEthereum) {
      setIsMetamaskModal(true);
      return;
    }
    const walletId = await connectWallet();
    await fetchData(walletId);
  };

  const signMessageHandler = async () => {
    await signMessage();
  };

  useEffect(() => {
    ETHEREUM && setProvider(new ethers.providers.Web3Provider(ETHEREUM));
    ETHEREUM ? setIsEthereum(true) : setIsEthereum(false);
    ETHEREUM ? setIsMetamaskModal(false) : setIsMetamaskModal(true);

    fetchDataAll();
    setSecretMessage(`${CODE_GENERATOR}`);
  }, []);

  return (
    <>
      <Header
        language={language}
        setLanguage={setLanguage}
        changeLanguage={changeLanguage}
        isUsedOnSecondaryPage
        promoBanner={<PromoBanner language={language} isRedeemPage />}
        description={
          <Description isMore={false} text={t('header.description-redeem')} />
        }
        betweenLogosSection={
          <Button
            ctaText={
              !walletID
                ? t('header.buttons.wallet')
                : t('header.buttons.wallet-connected')
            }
            onClick={clickHandler}
            isDisabled={!!walletID}
          />
        }
        redeemOnlyTitle={
          <Heading
            type={'h1'}
            className={'header__title-redemption'}
            text={'Redemption'}
          />
        }
        displayLanguageSwitcher={false}
      />
      <Redeem
        walletID={walletID}
        data={data}
        dataAll={dataAll}
        initialFormState={initialFormState}
        error={error}
        closeModalHandler={handleCloseModal}
        showModalHandler={handleShowModal}
        showModal={showModal}
        onSubmit={onSubmit}
        addExtraToFormState={addExtraToFormState}
        loading={loading}
        submitLoading={submitLoading}
        closeErrorNotification={closeErrorNotification}
        isSigned={isSigned}
        signMessage={signMessageHandler}
        secretMessage={secretMessage}
        errorMessage={errorMessage}
        isRedeemed={isRedeemed}
        closeRedeemWindow={() => {
          setIsRedeemed(false);
          window.location.reload();
        }}
      />
      <Footer isUsedOnSecondaryPage />
      <MyModal
        showModal={isMetamaskModal}
        closeModal={() => setIsMetamaskModal(false)}
        showCloseBtn
      >
        <div className='redeem-root__error'>
          <h1>Missing Metamask</h1>
          <p>
            Please install{' '}
            <a
              className='Metamask'
              href='https://metamask.io/download.html'
              target='_blank'
            >
              metamask
            </a>
          </p>
          <button onClick={() => window.location.reload()}>Refresh page</button>
        </div>
      </MyModal>
    </>
  );
};

export default RedeemPage;
