import React, { useState } from 'react'
import { QrReader } from "react-qr-reader";

const QrScanner: React.FC = () => {

  const [scanResult, setScanResult] = useState<string>("");

  return (
    <div>
      <h2>QR Scanner</h2>
      <QrReader
      onResult={(result,error) =>{
        if (result){ setScanResult(result.getText())}
        else{
          console.error(error);
        }
        
      }}
      constraints={{facingMode: 'environment'}}
      />
      {scanResult && <p>Scanned: {scanResult}</p>}
    </div>
  )
}

export default QrScanner