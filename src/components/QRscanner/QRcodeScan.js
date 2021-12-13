import React, { useRef, useState } from 'react'
import QrReader from 'react-qr-reader';
import Button from 'react-bootstrap/Button';

export default function QRcodeScan() {
  const [scanResultFile, setScanResultFile] = useState('');
  const qrRef = useRef(null);
  const handleErrorFile = (error) => {
    console.log(error);
  }
  const handleScanFile = (result) => {
    if (result) {
      setScanResultFile(result);
    }
  }
  const onScanFile = () => {
    qrRef.current.openImageDialog();
  }

  return (
    <div id="scan">
      <h1>QR Code Scanner</h1>
        <hr />
      <Button variant="success" onClick={onScanFile}>Choose file</Button>
      <QrReader
        ref={qrRef}
        delay={300}
        style={{ width: "300px", height: "300px", margin: "20px", boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.3),-4px 4px 4px rgba(0, 0, 0, 0.3),0 -2px 4px rgba(0, 0, 0, 0.3)" }}
        onError={handleErrorFile}
        onScan={handleScanFile}
        legacyMode
      />
      <h3>Scanned Code: {scanResultFile}</h3>


    </div>
  )
}
