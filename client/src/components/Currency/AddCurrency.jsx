import React, { useState } from 'react';
import './AddCurrency.css'; // Importing the corresponding CSS file

const AddCurrency = () => {
  const [currencyCode, setCurrencyCode] = useState('');
  const [countryId, setCountryId] = useState('');
  const [conversionRate, setConversionRate] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/currency', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currencyCode,
          countryId,
          conversionRate,
        }),
      });
      if (response.ok) {
        console.log('Currency added successfully');
        // Optionally reset the form
        setCurrencyCode('');
        setCountryId('');
        setConversionRate('');
      } else {
        console.error('Failed to add currency');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="add-currency-container">
      <h2>Add Currency</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Currency Code"
          value={currencyCode}
          onChange={(e) => setCurrencyCode(e.target.value)}
        />
        <input
          type="text"
          placeholder="Country ID"
          value={countryId}
          onChange={(e) => setCountryId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Conversion Rate"
          value={conversionRate}
          onChange={(e) => setConversionRate(e.target.value)}
        />
      </div>
      <div className="button-group">
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddCurrency;
