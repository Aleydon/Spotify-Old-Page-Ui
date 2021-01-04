import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './components/routes';
import NavBarComponent from './components/navbar';
import FooterComponent from './components/footer';





const App = () => {
  return(
    <>
      <BrowserRouter>
          <NavBarComponent />
            <Routes />
          <FooterComponent />
      </BrowserRouter>
    </>
  );
};


export default App;