import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Slider from './TutorialPage';
import Header from './WelcomePage';
import Body from './signupButton';
import Simulator from './exchangeRateSimulator'
import Footer from './footer';
import reportWebVitals from './reportWebVitals';
import SignUpButton from './signupButton';
import TutorialButton from './tutorialButton';
import Pitch from './PitchPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Pitch />
    <Slider />
    <center><Simulator /></center>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
