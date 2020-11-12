import React, { useEffect, useContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { ServiceContextProvider } from './Contexts/ServiceContext';
import { SportsContextProvider } from './Contexts/SportsContexts';
import { WeatherContextProvider } from './Contexts/WeatherContext';
import { UIContextProvider } from './Contexts/UIContext';
import { CurrentTermContextProvider } from './Contexts/CurrentSearchTermContext';

// pages
// import TestingPage from './pages/TestingPage';
import LandingPage from './pages/LandingPage';
import ResultPage from './pages/ResultPage';
import WeatherPage from './pages/WeatherPage';

import './App.css';

import { SportsContext } from './Contexts/SportsContexts';
import { WeatherContext } from './Contexts/WeatherContext';
import { ServiceContext } from './Contexts/ServiceContext';

const App = () => {

  useEffect(() =>{

  }, []) 

  return (
    <div className='App'>
      <Router basename={process.env.PUBLIC_URL}>
        <UIContextProvider>
          <ServiceContextProvider>
            <WeatherContextProvider>
              <SportsContextProvider>
                <CurrentTermContextProvider>
                  <Loader/>
                  <Switch>
                    <Route exact path ='/'> 
                      <LandingPage/>
                    </Route>
                    <Route path ='/result'>
                      <ResultPage/> 
                    </Route>
                    <Route path ='/weather'>
                      <WeatherPage />
                    </Route>   
                  </Switch>
                </CurrentTermContextProvider>
              </SportsContextProvider>
            </WeatherContextProvider>
          </ServiceContextProvider>
        </UIContextProvider>
      </Router>
    </div>
    
    
  );
}

const Loader = () => {
  const { updateSports } = useContext(SportsContext);
  const { updateWeather } = useContext(WeatherContext);
  const { updateServices } = useContext(ServiceContext);
  useEffect(() => {
      updateSports();
      updateServices();
      //updateWeather();
  }, []);
  return null;
}

export default App;

