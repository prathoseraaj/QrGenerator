import React, { useState } from 'react';
import './App.css';
import QrGenerator from './components/QrGenerator';
import QrScanner from './components/QrScanner';

function App() {

  const [tab,setTab] = useState('generator');

  return (
    <div className="App">
      <h2>Qr Generator and Scanner</h2>
      <div>
        <button onClick={() =>setTab('generator') }>Qr Generator</button>
        <button onClick={() =>setTab('scanner')}>Qr Scanner</button>
      </div>
      {tab === 'generator'? <QrGenerator/> : <QrScanner/>}
    </div>
  );
}

export default App;
