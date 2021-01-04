import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './components/routes';
import NavBarComponent from './components/navbar';



const App = () => {
  return(
    <>
      <BrowserRouter>
          <NavBarComponent />
          <Routes />
      </BrowserRouter>
    </>
  );
};


export default App;