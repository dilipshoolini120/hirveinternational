import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter  as Router,Routes,Route} from 'react-router-dom';
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import ScrollToTop from './components/ScrollToTop'
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/about-us' Component={AboutUs}/>
        <Route path='/products' Component={Products}/>
        <Route path='/contact-us' Component={ContactUs}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
