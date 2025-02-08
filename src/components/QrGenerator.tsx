import React, { useState } from 'react'
import './QrGenerator.css'
import { QRCodeCanvas } from "qrcode.react";
import { BiSearchAlt } from "react-icons/bi";

const QrGenerator: React.FC = () => {

  const [text, setText] = useState("");
  const [qrValue, setQrValue] = useState("");

  const handleQrGeneration = () => {
    if (text.trim() !== "") {
      setQrValue(text);
    }
  };

  return (
    <div className='generator'>
      <h2>
        Qr code Generator
      </h2>
      <div className='input-container'>
        <input type="text"
          placeholder='enter text (or) URL'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <BiSearchAlt className='search-button' onClick={handleQrGeneration}/>
      </div>
      {qrValue && (
          <QRCodeCanvas className='scanner' value={qrValue} size={200} />
      )}
    </div>
  )
}

export default QrGenerator