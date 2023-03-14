import './App.css';
import Simulator from './exchangeRateSimulator';
import SignUpButton from './signupButton';
import TutorialButton from './tutorialButton';

function Pitch() {

    return (
      <header className="App-pitch">
          <h2>Do you want to sign up now? Or go through a less than 5 minute tutorial?</h2>
          <center><SignUpButton /><TutorialButton /></center>
        </header>
    )
  }

  export default Pitch;