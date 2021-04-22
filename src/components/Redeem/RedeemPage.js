import React, { useState, useEffect } from 'react';
import { Spinner } from '../shared/SVG/Spinner';
import Item from '../Item';
import './ReedemPage.scss';

const RedeemPage = () => {
  const [error, setError] = useState(false);
  const [isEthereum, setIsEthereum] = useState(false);
  const [walletID, setWalletID] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const API_URL = `https://rinkeby-api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20&owner=${walletID}`;

  const closeErrorNotification = () => {
    setError(false);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
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
    try {
      if (window.ethereum) {
        const result = await window.ethereum.enable();
        setWalletID(result);
      }
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.ethereum ? setIsEthereum(true) : setIsEthereum(false);
  }, []);

  return (
    <div className='redeem-root'>
      {(error || !isEthereum) && (
        <div className='redeem-root__error'>
          <p
            onClick={closeErrorNotification}
            style={{ textAlign: 'right', cursor: 'pointer' }}
          >
            X
          </p>
          <h1>Error</h1>
          {!isEthereum && <p>Install Metamask plz</p>}
          {error && <p>Oops</p>}
        </div>
      )}
      {loading ? (
        <Spinner />
      ) : (
        <div className='redeem-root__button-wrapper'>
          <button className='redeem-root__btn' onClick={connectWallet}>
            Connect wallet
          </button>
          {walletID && (
            <button className='redeem-root__btn-two' onClick={fetchData}>
              Get data
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
            />
          ))}
      </div>
    </div>
  );
};

export default RedeemPage;
