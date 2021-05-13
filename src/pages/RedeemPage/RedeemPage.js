import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { ethers } from 'ethers';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Redeem from '../../components/Redeem';
import Button from '../../components/Button';
import { API_URL, ETHEREUM } from '../../const';
import './RedeemPage.scss';

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
  const collectionId = 'dazn-x-canelo-saunders';
  const API_ALL = `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=25&collection=${collectionId}`;
  const API_OWNER = `${API_ALL}&owner=`;
  const CODE_GENERATOR = Math.floor(Math.random() * 1e16);

  const [provider, setProvider] = useState(null);
  const [error, setError] = useState(false);
  const [isEthereum, setIsEthereum] = useState(false);
  const [walletID, setWalletID] = useState('');
  const [signature, setSignature] = useState(null);
  const [isSigned, setIsSigned] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [dataAll, setDataAll] = useState([]);
  const [secretMessage, setSecretMessage] = useState('');
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
  // A Web3Provider wraps a standard Web3 provider, which is
  // what Metamask injects as window.ethereum into each page
  let signer;
  if (provider) signer = provider.getSigner();

  useEffect(() => {
    ETHEREUM && setProvider(new ethers.providers.Web3Provider(ETHEREUM));
    ETHEREUM ? setIsEthereum(true) : setIsEthereum(false);
    ETHEREUM && setWalletID(ETHEREUM.selectedAddress);

    fetchDataAll();
    setSecretMessage(`${CODE_GENERATOR}`);
  }, []);

  useEffect(() => {
    addExtraToFormState();
  }, [signature]);

  useEffect(() => {
    setSecretMessage(`${CODE_GENERATOR}`);
  }, [isSigned]);

  const signMessage = async () => {
    try {
      const signature = await signer.signMessage(secretMessage);
      setSignature(signature);
      setIsSigned(true);
      console.log('Message has been signed :', signature);
    } catch (e) {
      console.log('error');
      console.error(e);
      setIsSigned(false);
      handleCloseModal();
      throw new Error('error');
    }
  };

  const verifyMessage = async () => {
    try {
      const result = await ethers.utils.verifyMessage(secretMessage, signature);
      const address = await signer.getAddress();
      console.log('Verified', result === address);
    } catch (e) {
      console.error(e);
    }
  };

  const closeErrorNotification = () => {
    setError(false);
  };

  const fetchData = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_OWNER + id}`);
      const { assets } = await response.json();
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
      const response = await fetch(`${API_ALL}`);
      const { assets } = await response.json();
      setDataAll(assets);
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

  const addExtraToFormState = () => {
    setInitialFormState((prevState) => ({
      ...prevState,
      walletID,
      signature,
      message: secretMessage
    }));
  };

  const onSubmit = async (values) => {
    console.log('VALUES', values);
    console.log('api call');
    handleCloseModal();
  };

  // useEffect(() => {
  //   walletID && fetchData(walletID);
  // }, [walletID]);

  return (
    <>
      <Header isUsedOnSecondaryPage secondaryTitle='Redemption'>
        <Button
          ctaText='Connect Wallet'
          onClick={() => {
            connectWallet().then((id) => fetchData(id));
          }}
          isDisabled={!!walletID || !isEthereum}
        />
      </Header>
      <Redeem
        data={data}
        dataAll={dataAll}
        initialFormState={initialFormState}
        error={error}
        closeModalHandler={handleCloseModal}
        showModalHandler={handleShowModal}
        showModal={showModal}
        onSubmit={onSubmit}
        addExtraToFormState={addExtraToFormState}
        isEthereum={isEthereum}
        loading={loading}
        closeErrorNotification={closeErrorNotification}
        isSigned={isSigned}
        signMessage={signMessage}
        secretMessage={secretMessage}
      />
      <Footer isUsedOnSecondaryPage />
    </>
  );
};

export default RedeemPage;
