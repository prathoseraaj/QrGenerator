import React, { useState } from 'react'
import './QrGenerator.css'
import { QRCodeCanvas } from "qrcode.react";
import { BiSearchAlt } from "react-icons/bi";

const QrGenerator: React.FC = () => {

  const [text, setText] = useState("");

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
        <BiSearchAlt className='search-button'/>
      </div>
      {text && <QRCodeCanvas className='scanner' value={text} size={200} />}
    </div>
  )
}

export default QrGenerator