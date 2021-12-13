import React, { useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import QRCode from 'qrcode';


export default function QrcodeURL() {
    const [Url, setUrl] = useState("");
    const [qrUrl, setQrUrl] = useState("");
    const [show,setShow] = useState(false);
    const generate = async (e) => {
        // console.log(e);
        e.preventDefault();
        QRCode.toDataURL(Url)
        .then(url => {
          console.log(url);
          setQrUrl(url);
          setShow(true);
        })
        .catch(err => {
          console.error(err)
        })
    }

    return (
        <div className="QrCode">
            <Form onSubmit={generate}>
                <InputGroup size="lg">
                    <InputGroup.Text id="inputGroup-sizing-lg"> URL</InputGroup.Text>
                    <FormControl type="url" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="https://www.google.com/" onChange={(e)=>setUrl(e.target.value)} required/>
                </InputGroup>
                <br/>
                <Button variant="primary" type="submit" size="lg">
                    Generate
                </Button>
            </Form>
            <div className="qrcode">
                {show && <img src={qrUrl} alt="qrcode" className="output"/>}
            </div>
            {show && <a href={qrUrl} download={true}>Download</a>}
            

        </div>
    )
}

