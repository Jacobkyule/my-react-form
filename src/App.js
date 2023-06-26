import React from 'react';
import MyInput from './MyInput';
import logo from './Jakes-logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Check out my Website for contacts
        </p>
        <a
          className="App-link"
          href="https://jacobkyule.github.io/Jacobs-Website/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jacob K.
        </a>
        <MyInput />
      </header>
      
    </div>
  );
}

export default App;
