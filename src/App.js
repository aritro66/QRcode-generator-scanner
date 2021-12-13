import QRcodeScan from './components/QRscanner/QRcodeScan';
import QrcodeGenCombine from './components/QRcodeGenerate/QrcodeGenCombine';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Navbaroption from './components/NavbarOptions';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';


function App() {

  return (
    <div className="App">
          <Home />
          <Navbaroption />
      <Routes>
        <Route path="/" element={<QrcodeGenCombine />} />
        <Route path="/scanner" element={<QRcodeScan />} />
      </Routes>
      
    </div>
  );
}

export default App;
