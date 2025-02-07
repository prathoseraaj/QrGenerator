import React, { useState } from 'react'
import {QRCodeCanvas}  from "qrcode.react";

const QrGenerator: React.FC = () => {
  
  const [text,setText] = useState(""); 

  return (
    <div>
        <h2>
          Qr code Generator
        </h2>
        <input  type="text"
                placeholder='enter text (or) URL'
                value={text}
                onChange={(e)=>setText(e.target.value)}
        />
        {text && <QRCodeCanvas value={text} size={200} />}
    </div>
  )
}

export default QrGenerator