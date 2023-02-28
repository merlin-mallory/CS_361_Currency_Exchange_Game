import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css';

function Simulator() {
    const [currencies, setCurrencies] = useState({})
    // const navigate = useNavigate()

    function clickMe2() {

        
        alert('You clicked me!');
      };

    return (
    <div className="App-simulator">
        <h3>Currency Change Simulator</h3>
        <table id="currenciesBefore">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Value Before Simulation</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>EUR</th>
                    <th>?</th>
                </tr>
                <tr>
                    <th>JPY</th>
                    <th>?</th>
                </tr>
                <tr>
                    <th>CAD</th>
                    <th>?</th>
                </tr>
            </tbody>
        </table>
        <table id="currencyChangeAmount">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Simulated Price Change</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>EUR</th>
                    <th>?</th>
                </tr>
                <tr>
                    <th>JPY</th>
                    <th>?</th>
                </tr>
                <tr>
                    <th>CAD</th>
                    <th>?</th>
                </tr>
            </tbody>
        </table>
        <table id="currenciesAfter">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Value After Simulation</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>EUR</th>
                    <th>?</th>
                </tr>
                <tr>
                    <th>JPY</th>
                    <th>?</th>
                </tr>
                <tr>
                    <th>CAD</th>
                    <th>?</th>
                </tr>
            </tbody>
        </table>
        <button type="button" onClick={clickMe2} className="ChangeRatesButton">Change rates</button>
        <p>end</p>
    </div>
    )
  }

  export default Simulator;