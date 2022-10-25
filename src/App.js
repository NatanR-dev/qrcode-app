import { useState } from 'react';
import QRCode from 'react-qr-code';
import './App.css';

function App() {
   const [link, setLink] = useState('') 

  return (
    <div className="container">
      {/* example inset www.google.com on value */}
      <QRCode value={link}/>

      <input className="input" placeholder="digite seu link..."/>
    </div>
  );
}

export default App;
