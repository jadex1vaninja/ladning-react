import React, { useState, useEffect } from 'react';
import './ReedemPage.scss';

const RedeemPage = () => {
  const [error, setError] = useState(false);
  const [isEthereum, setIsEthereum] = useState(false);

  const closeErrorNotification = () => {
    setError(false);
  };

  const check = async () => {
    try {
      const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
          window.ethereum ? resolve() : reject();
        }, 1000);
      });
    } catch (e) {
      setError(true);
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
      <button className='redeem-root__btn' onClick={check}>
        Connect wallet
      </button>
    </div>
  );
};

export default RedeemPage;
