import { useState } from 'react';
import React from "react";
import './App.css';

import NavBar from './components/navbar/NavBar';
import Image from './components/image/Image';
import Description from './components/description/Description'

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <>
      <NavBar accounts={accounts} setAccounts={setAccounts}/>
      <div className="row">
        <div className="column">
          <Image/>
        </div>
        <div className="column-right">
          <Description accounts={accounts}/>
        </div>
      </div>

    </>
  );
}

export default App;
