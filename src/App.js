import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WomanTop } from './components/pages/woman-top/woman-top';
import { Antenna } from './components/pages/antenna/antenna';
import { Footer } from './components/footer/footer'; 
import './App.css';

// const Scr = () => <script src="//megatimer.ru/get/9f7b69e6a2125e5b35ca46f5e0c15b7f.js"></script>

function App() {
  // const [isRequestSet, setRequestSet] = useState(false);

  // return isRequestSet ? (
  //     <PageRequestSent setRequestSet={setRequestSet}  />
  // ) : (
    return (
      <div className="App main-wrapper text-center">
      <BrowserRouter>
      <Routes>
        <Route path="woman-top" element={<WomanTop />} />
        <Route path="antenna-tv" element={<Antenna />} />
      </Routes>
      </BrowserRouter>

      {/* <Footer /> */}
      </div>
    )
}

export default App;
