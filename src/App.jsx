import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Tours from './pages/Tours';
import GalleryPage from './components/Gallery';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import BookNow from './pages/BookNow';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='pt-16'>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/book-now' element={<BookNow />} />
      </Routes>
      </div>
     <Footer />
    </BrowserRouter>
  );
};

export default App;
