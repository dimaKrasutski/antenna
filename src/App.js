import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Antenna } from './components/pages/antenna/antenna';
import { AirCondition } from './components/pages/air-condition/air-condition';
import { Saw } from './components/pages/saw/saw';
// import { Footer } from './components/footer/footer'; 
import './App.css';

// const Scr = () => <script src="//megatimer.ru/get/9f7b69e6a2125e5b35ca46f5e0c15b7f.js"></script>

function App() {
  // const [isRequestSet, setRequestSet] = useState(false);

  // return isRequestSet ? (
  //     <PageRequestSent setRequestSet={setRequestSet}  />
  // ) : (
    return (
        <BrowserRouter>
          <Routes>
            <Route path="antenna-tv" element={<Antenna />} />
            <Route path="air-condition" element={<AirCondition />} />
            <Route path="saw" element={<Saw />} />
         </Routes>
        </BrowserRouter>
    )
}

export default App;
