import React, { useState } from 'react'
import { QrReader } from "react-qr-reader";

const QrScanner: React.FC = () => {

  const [scanResult, setScanResult] = useState<string>("");
  const [cameraactive, setCameraactive] = useState<Boolean>(true);

  return (
    <div>
      <h2>QR Scanner</h2>
      { cameraactive && (
        <div>
          <QrReader
            onResult={(result, error) => {
              if (result) { setScanResult(result.getText()) }
              else {
                console.error(error);
              }

            }}
            constraints={{ facingMode: 'environment' }}
            scanDelay={300}
          />
        </div>
      )}
      {scanResult && (
        <div>
          <h3>Scanned Result:</h3>
          <p>{scanResult}</p>
          <button
            onClick={() => {
              setScanResult("");
              setCameraactive(true); 
            }}
          >
            Scan Again
          </button>
        </div>
      )}
    </div>
  )
}

export default QrScanner