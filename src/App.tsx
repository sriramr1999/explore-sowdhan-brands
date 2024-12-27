import React from 'react';
import { Element } from 'react-scroll';

import Home from './pages/Home'
import Brands from './pages/Brands';
import Contact from './pages/Contact';

const App: React.FC = () => (
  <>

    <Element name="home">
      <Home />
    </Element>
    <Element name="brands">
      <Brands />
    </Element>
    <Element name="contact">
      <Contact />
    </Element>
  </>
);

export default App;