import logo from './logo.svg';
import './App.css';
// import styled from "styled-components"

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="App-header">
        <h1>Currency Exchange Game</h1>
        <h3>Learn how to play in less than 5 minutes!</h3>
        <p>
          Edit <code>src/App.js</code> and save to reload. Test
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  )
}

function Body() {
  return(
    <div>
      <button type="button" onClick={clickMe}>Sign Up!</button>
    </div>
      
  )
}

function clickMe() {
  alert('You clicked me!');
};

function Footer() {
  return (
    <footer className="App-footer">
        Made with <img src={logo} className="App-logo" alt="logo" />
        © Merlin Mallory, 2023
      </footer>
  )
}

export default App;
