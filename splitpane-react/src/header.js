import './App.css';

function Header() {
    function clickMe() {
        alert('You clicked me!');
      };

    return (
      <header className="App-header">
          <h1>Currency Exchange Game</h1>
          <p>
            Practice currency trading for free, with no risk of losing your own money!
          </p>
          <p>
          Learn how to play in less than 5 minutes!
          </p>
          <p>Compete against other players!</p>
          <button type="button" onClick={clickMe} className="SignUpButton">Sign Up!</button>
          <h2>Want more info before signing up? Lets go through a quick tutorial!</h2>
        </header>
    )
  }

  export default Header;