import React, { useState } from 'react'
import { QrReader } from "react-qr-reader";

const QrScanner: React.FC = () => {

  const [scanResult, setScanResult] = useState<string>("");

  return (
    <div>
      <h2>QR Scanner</h2>
     
    </div>
  )
}

export default QrScanner