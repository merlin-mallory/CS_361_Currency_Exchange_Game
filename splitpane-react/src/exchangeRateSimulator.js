import React, { useState } from 'react';

function CurrencyList() {

  const [currencyValues, setCurrencyValues] = useState({
    "EUR": 0,
    "JPY": 0,
    "CAD": 0
  });

  const updateCurrencyValues = () => {
    fetch('http://localhost:3003/currencyAfterAdj')
      .then(response => response.json())
      .then(data => setCurrencyValues(data));
  }

  return (
    <div>
      <h2>Currency Change Simulator</h2>
      <ul>
        {Object.keys(currencyValues).map(key => (
          <li key={key}>{key}: {currencyValues[key]}</li>
        ))}
      </ul>
      <button onClick={updateCurrencyValues}>Update</button>
    </div>
  );
}

export default CurrencyList;