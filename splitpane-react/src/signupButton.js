import './App.css';

function SignUpButton() {
    function clickMe() {
        alert('You clicked me!');
      };

    return(
      <div>
        <button type="button" onClick={clickMe} className="SignUpButton">Sign Up!</button>
      </div>
        
    )
  }


export default SignUpButton;