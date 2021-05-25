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
import { ETHEREUM, STORAGE_KEY, API_KEY } from '../../const';
// import { MY_NFTS } from '../../const/myNFTs';
import Heading from '../../components/Header/components/Heading';
import MyModal from '../../components/MyModal';
import './RedeemPage.scss';

const RedeemPage = () => {
  const collectionId = 'dazn-x-canelo-saunders';
  const API_ALL = `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=25&collection=${collectionId}`;
  const LOCAL_API_LAMDA = 'http://localhost:3000/api';
  const API_LAMBDA = 'https://ladma-dazn.vercel.app/api';
  const API_SINGLE_ASSET =
    'https://api.opensea.io/api/v1/asset/0x495f947276749ce646f68ac8c248420045cb7b5e/';

  const API_OWNER = `${API_ALL}&owner=`;
  const CODE_GENERATOR = Math.floor(Math.random() * 1e21);

  const [provider, setProvider] = useState(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [isEthereum, setIsEthereum] = useState(false);
  const [isRedeemed, setIsRedeemed] = useState(false);

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
    openseaUserName: '',
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
      console.log('Message has been signed :', signature);
      return signature;
    } catch (e) {
      console.log('error');
      console.error(e);
      setIsSigned(false);
      handleCloseModal();
      // throw new Error('error');
    }
  };

  const closeErrorNotification = () => {
    setError(false);
  };

  const setToLocaleStorage = (id) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(id));
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
      return assets;
    } catch (e) {
      console.error('Ошибка:', e);
    } finally {
      setLoading(false);
    }
  };

  const fetchDataAll = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_LAMBDA}/nfts`);
      const { nfts } = response.data;
      setDataAll(nfts);
    } catch (e) {
      console.error('Ошибка:', e);
    } finally {
      setLoading(false);
    }
  };

  const fetchSingleAsset = async (data) => {
    try {
      if (!data.length) return;
      const firstElementId = _.head(data).token_id;

      const response = await axios.get(API_SINGLE_ASSET + firstElementId, {
        headers: {
          'X-API-KEY': API_KEY
        },
        params: {
          account_address: walletID
        }
      });

      const {
        ownership: {
          owner: {
            user: { username }
          }
        }
      } = response.data;

      return username;
    } catch (e) {
      console.error(e);
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
        setToLocaleStorage(ID);
        return ID;
      }
      console.log('WALLET HAS BEEN CONNECTED');
    } catch (e) {
      console.error(e);
      setError(true);
    } finally {
      setLoading(false);
      clearTimeout(timeOut);
    }
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setIsSigned(false);
  };

  const addExtraToFormState = (token, signature) => {
    setInitialFormState((prevState) => ({
      ...prevState,
      walletID,
      signature: signature,
      message: secretMessage,
      token_id: token
    }));
  };

  const onSubmit = async (values) => {
    setSubmitLoading(true);
    try {
      const response = await fetch(`${API_LAMBDA}/redeem`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const json = await response.json();
      if (json.error) {
        setError(true);
        setErrorMessage(json);
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
    const id = await connectWallet();
    console.log(id, 'id');
    const data = await fetchData(id);
    console.log(data, 'data');
    const userName = await fetchSingleAsset(data);

    setInitialFormState((prevState) => ({
      ...prevState,
      openseaUserName: userName
    }));
  };

  useEffect(() => {
    ETHEREUM && setProvider(new ethers.providers.Web3Provider(ETHEREUM));
    ETHEREUM ? setIsEthereum(true) : setIsEthereum(false);
    // ETHEREUM && setWalletID(ETHEREUM.selectedAddress);

    fetchDataAll();
    setSecretMessage(`${CODE_GENERATOR}`);
  }, []);

  useEffect(() => {
    const walletKeyFromStorage =
      JSON.parse(localStorage.getItem(STORAGE_KEY)) || null;
    setWalletID(walletKeyFromStorage);
  }, []);

  useEffect(() => {
    setSecretMessage(`${CODE_GENERATOR}`);
  }, [isSigned]);

  useEffect(() => {
    // walletID && setData(MY_NFTS);
    if(!walletID) return;
    
    walletID && assetHandler(walletID);
  }, [walletID]);

  const assetHandler= async (id)=> {
    const data = await fetchData(id);
    console.log(data, 'data');
    const userName = await fetchSingleAsset(data);

    setInitialFormState((prevState) => ({
      ...prevState,
      openseaUserName: userName
    }));
  }
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
            ctaText={t('header.buttons.wallet')}
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
        signMessage={signMessage}
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
        showModal={!isEthereum}
        closeModal={() => {}}
        showCloseBtn={false}
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
