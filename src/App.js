import React, { useContext, useEffect } from 'react';
/*import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';*/
import { ServiceContextProvider } from './Contexts/ServiceContext';
import { SportsContextProvider } from './Contexts/SportsContexts';
import { WeatherContextProvider } from './Contexts/WeatherContext';
import TestingPage from './pages/TestingPage';
import LandingPage from './pages/LandingPage'

// <TestingPage/>
const App = () => {

  return (
    <div className='App'>
        <ServiceContextProvider>
          <WeatherContextProvider>
          <SportsContextProvider> 
            <LandingPage/>
          </SportsContextProvider>
          </WeatherContextProvider>
        </ServiceContextProvider>
    </div>
  );
}

export default App;
