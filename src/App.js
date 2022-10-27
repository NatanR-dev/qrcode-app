import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import './App.css';

function App() {
   const [link, setLink] = useState('') 
   const [qrCodeLink, setQrCodeLink] = useState('')

   function handleGenerate(link_url){
      QRCodeLink.toDataURL(link_url,{
        width: 300,
        margin: 3,
      }, function (err, url){
        setQrCodeLink(url);
      })
   }

   function handleQrcode(e){
    setLink(e.target.value);
    handleGenerate(e.target.value);
   }

  return (
    <div className="container">
      
      <QRCode value={link}/>

      <input className="input" placeholder="digite seu link..." value={link} onChange={ (e) => handleQrcode(e) }/>

      <a href={qrCodeLink} download={`qrcode.png`}>Baixar QrCode</a>

    </div>
  );
}

export default App;
