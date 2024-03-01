import React, { useState } from 'react';
import './Conversion.css'; // Importing the corresponding CSS file

const Conversion = () => {
  const [currencyFrom, setCurrencyFrom] = useState('');
  const [amount, setAmount] = useState('');
  const [currencyTo, setCurrencyTo] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);

  const handleConvert = () => {
    // Placeholder for conversion logic
    console.log('Converting:', amount, currencyFrom, 'to', currencyTo);
    // Placeholder for setting converted amount
    setConvertedAmount('123.45'); // Example converted amount
  };

  return (
    <div className="conversion-container">
      <h2>Conversion</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Currency Code From"
          value={currencyFrom}
          onChange={(e) => setCurrencyFrom(e.target.value)}
        />
        <input
          type="text"
          placeholder="Currency Code To"
          value={currencyTo}
          onChange={(e) => setCurrencyTo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="button-group">
        <button type="button" onClick={handleConvert}>
          Convert
        </button>
      </div>
      {convertedAmount && <p>Converted Amount: {convertedAmount}</p>}
    </div>
  );
};

export default Conversion;
