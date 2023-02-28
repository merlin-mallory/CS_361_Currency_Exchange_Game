import './App.css';

function Simulator() {
    function clickMe2() {
        alert('You clicked me!');
      };

    return (
    <div className="App-simulator">
        <h3>Currency Change Simulator</h3>
        <p>stuff</p>
        <button type="button" onClick={clickMe2} className="ChangeRatesButton">Change rates</button>
        <p>end</p>
    </div>
    )
  }

  export default Simulator;