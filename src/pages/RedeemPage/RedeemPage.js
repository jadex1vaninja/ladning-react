import React, { useEffect, useState } from 'react';
// import { ethers } from 'ethers';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Redeem from '../../components/Redeem';
import Button from '../../components/Button';
import { API_URL, ETHEREUM } from '../../const';
import './RedeemPage.scss';
import PromoBanner from '../../components/Header/components/PromoBanner';

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
  const API = `https://rinkeby-api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20&owner=`;
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
      const response = await fetch(`${API + walletID}`);
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
    <>
      <Header isUsedOnSecondaryPage secondaryTitle='Redemption'>
        <Button
          ctaText='Connect Wallet'
          onClick={connectWallet}
          isDisabled={!!walletID}
        />
        {walletID && (
          <Button
            ctaText='View items'
            onClick={fetchData}
            isDisabled={!!data.length}
          />
        )}
      </Header>
      <Redeem
        data={data}
        initialFormState={initialFormState}
        error={error}
        closeModalHandler={handleCloseModal}
        showModalHandler={handleShowModal}
        showModal={showModal}
        onSubmit={onSubmit}
        handleClickedID={handleClickedID}
        isEthereum={isEthereum}
        loading={loading}
        closeErrorNotification={closeErrorNotification}
      />
      <Footer isUsedOnSecondaryPage />
    </>
  );
};

export default RedeemPage;
