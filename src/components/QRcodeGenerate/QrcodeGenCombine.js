import React from 'react'
import QrcodeContact from './QrcodeContact';
import QrcodePlainText from './QrcodePlainText';
import QrcodeURL from './QrcodeURL';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function QrcodeGenCombine() {
    return (
         <div id="generate">
        <h1>QR Code Generator</h1>
        <hr />
      <Tabs defaultActiveKey="URL" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="URL" title="URL">
          <QrcodeURL />
        </Tab>
        <Tab eventKey="Plain-Text" title="Plain-Text">
          <QrcodePlainText />
        </Tab>
        <Tab eventKey="Contact" title="Contact">
          <QrcodeContact />
        </Tab>
      </Tabs>
      </div>
    )
}
