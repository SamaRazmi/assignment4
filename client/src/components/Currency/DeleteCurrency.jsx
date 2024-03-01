import React, { useState, useEffect } from 'react';
import './DeleteCurrency.css';

const DeleteCurrency = () => {
  const [currencyCode, setCurrencyCode] = useState('');
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const fetchCurrencies = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/currency');
      const data = await response.json();
      setCurrencies(data);
    } catch (error) {
      console.error('Error fetching currencies:', error);
    }
  };

  const handleCurrencyCodeChange = (e) => {
    setCurrencyCode(e.target.value);
  };

  const handleDeleteCurrency = async () => {
    try {
      const currency = currencies.find(
        (curr) => curr.currencyCode === currencyCode
      );
      if (!currency) {
        console.error('Currency not found');
        return;
      }

      const response = await fetch(
        `http://localhost:3001/api/currency/${currency.id}`,
        {
          method: 'DELETE',
        }
      );

      if (response.ok) {
        console.log('Currency deleted successfully');
        // Optionally clear the form field
        setCurrencyCode('');
        // Refresh currencies after deletion
        fetchCurrencies();
      } else {
        console.error('Failed to delete currency');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="delete-currency-container">
      <h2>Delete Currency</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Currency Code"
          value={currencyCode}
          onChange={handleCurrencyCodeChange}
        />
      </div>
      <div className="button-group">
        <button type="button" onClick={handleDeleteCurrency}>
          Delete Currency
        </button>
      </div>
    </div>
  );
};

export default DeleteCurrency;
