import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './App.css';

function CurrencySingle(currencyObj) {
    return (
      <tr>
        <td>EUR: {currencyObj.EUR}</td>
        <td>JPY: {currencyObj.JPY}</td>
        <td>CAD: {currencyObj.CAD}</td>
      </tr>
    )
  }

  export default CurrencySingle;