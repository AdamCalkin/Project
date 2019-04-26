import React from 'react';

import { Router, Route, BrowserRouter } from "react-router-dom";

import Home from './Home/Home';
import Footer from './Footer/Footer';
// import Blog from './Blog/Blog';
// import About from './About/About';

const App = () => {
  return (
    <React.Fragment>
      <Home />
      <Footer />
    </React.Fragment>
  )
}

export default App

