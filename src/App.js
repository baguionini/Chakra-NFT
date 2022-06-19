import { useState } from 'react';
import React from "react";
import './App.css';
import MainMint from './MainMint';
import NavBar from './NavBar';
import logo from './assets/white.png';

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="App">
      <NavBar accounts={accounts} setAccounts={setAccounts}/>
      <div className="Title">
        <h1>Chakra</h1>
        <p>An NFT collection of 32 generative art built using Samila.</p>
      </div>
      <div className="Main">
        <img 
          className="Image"
          src={logo}
        />
        <MainMint accounts={accounts} setAccounts={setAccounts}/>
      </div>
    </div>
  );
}

export default App;
