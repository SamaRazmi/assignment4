import React, { useState } from 'react';
import './UpdateCurrency.css';

const UpdateCurrency = () => {
  const [currencyCode, setCurrencyCode] = useState('');
  const [newRate, setNewRate] = useState('');

  const handleCurrencyCodeChange = (e) => {
    setCurrencyCode(e.target.value);
  };

  const handleNewRateChange = (e) => {
    setNewRate(e.target.value);
  };

  const handleUpdateCurrency = async () => {
    try {
      // Fetch all currencies
      const allCurrencies = await fetch('http://localhost:3001/api/currency');
      const currencies = await allCurrencies.json();

      // Find the currency with the desired currencyCode
      const currencyToUpdate = currencies.find(
        (currency) => currency.currencyCode === currencyCode
      );

      if (!currencyToUpdate) {
        throw new Error('Currency not found');
      }

      // Use the currency's ID to update the conversion rate
      const response = await fetch(
        `http://localhost:3001/api/currency/${currencyToUpdate.id}/${newRate}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ newRate: parseFloat(newRate) }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to update currency');
      }

      // Optionally clear the form fields
      setCurrencyCode('');
      setNewRate('');

      console.log('Currency updated successfully');
    } catch (error) {
      console.error('Error updating currency:', error.message);
    }
  };

  return (
    <div className="update-currency-container">
      <h2>Update Currency</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Currency Code"
          value={currencyCode}
          onChange={handleCurrencyCodeChange}
        />
        <input
          type="text"
          placeholder="New Rate"
          value={newRate}
          onChange={handleNewRateChange}
        />
      </div>
      <div className="button-group">
        <button onClick={handleUpdateCurrency}>Update Rate</button>
      </div>
    </div>
  );
};

export default UpdateCurrency;
