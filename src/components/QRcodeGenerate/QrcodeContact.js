import React,{useState} from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import QRCode from 'qrcode';

export default function QrcodeContact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [qrUrl, setQrUrl] = useState("");
    const [show,setShow] = useState(false);
    const generate = (e) => {
        var dataQuery=`Name ${name}\nEmail ${email}\nPhone ${phone}\nAddress ${address}\nCity ${city}\nCountry ${country}`;
        e.preventDefault();
        QRCode.toDataURL(dataQuery)
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
                    <InputGroup.Text id="inputGroup-sizing-lg"> Name</InputGroup.Text>
                    <FormControl type="text" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Alex John" onChange={(e)=>setName(e.target.value)} required/>
                </InputGroup>
                <br/>
                <InputGroup size="lg">
                    <InputGroup.Text id="inputGroup-sizing-lg"> Email</InputGroup.Text>
                    <FormControl type="email" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="nickname@yourdomain.com" onChange={(e)=>setEmail(e.target.value)} required/>
                </InputGroup>
                <br/>
                <InputGroup size="lg">
                    <InputGroup.Text id="inputGroup-sizing-lg"> Phone No.</InputGroup.Text>
                    <FormControl type="tel" pattern="[1-9]{1}[0-9]{9}" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="8889990022" onChange={(e)=>setPhone(e.target.value)} required/>
                </InputGroup>
                <br/>
                <InputGroup size="lg">
                    <InputGroup.Text id="inputGroup-sizing-lg"> Address</InputGroup.Text>
                    <FormControl type="text" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="address" onChange={(e)=>setAddress(e.target.value)} required/>
                </InputGroup>
                <br/>
                <InputGroup size="lg">
                    <InputGroup.Text id="inputGroup-sizing-lg"> City</InputGroup.Text>
                    <FormControl type="text" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Chennai" onChange={(e)=>setCity(e.target.value)} required/>
                </InputGroup>
                <br/>
                <InputGroup size="lg">
                    <InputGroup.Text id="inputGroup-sizing-lg"> Country</InputGroup.Text>
                    <FormControl type="text" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="India" onChange={(e)=>setCountry(e.target.value)} required/>
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
