import React, { useContext, useEffect } from 'react';
/*import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';*/
import { ServiceContextProvider } from './Contexts/ServiceContext';
import { SportsContextProvider } from './Contexts/SportsContexts';
import LandingPage from './pages/LandingPage';

const App = () => {

  return (
    <div className='App'>
        <ServiceContextProvider>
          <SportsContextProvider>
            <div>This is our app</div>
            <div>Contents go here, so they can access the wrapper context</div>
            <LandingPage/>
          </SportsContextProvider>
        </ServiceContextProvider>
    </div>
  );
}

export default App;
