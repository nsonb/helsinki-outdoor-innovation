import React, { useEffect, useContext, useLayoutEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { ServiceContextProvider } from './Contexts/ServiceContext';
import { SportsContextProvider } from './Contexts/SportsContexts';
import { WeatherContextProvider } from './Contexts/WeatherContext';
import { UIContext, UIContextProvider } from './Contexts/UIContext';
import { CurrentTermContextProvider } from './Contexts/CurrentSearchTermContext';

// pages
// import TestingPage from './pages/TestingPage';
import LandingPage from './pages/LandingPage';
import ResultPage from './pages/ResultPage';
import WeatherPage from './pages/WeatherPage';

import './App.css';

import { SportsContext } from './Contexts/SportsContexts';
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
  const { updateServices } = useContext(ServiceContext);
  const { setScreenSize } = useContext(UIContext);
  useEffect(() => {
      updateSports();
      updateServices();
      //updateWeather();
  }, []);

  //https://medium.com/@alexander_15201/react-screen-sizes-device-types-and-media-queries-ad304caad160
  function useMediaQuery() { 
    useLayoutEffect(() => {
      function updateScreenSize() {
        console.log([window.innerWidth, window.innerHeight])
        setScreenSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateScreenSize);
      updateScreenSize();
      return () => window.removeEventListener("resize", updateScreenSize);
    }, []);
  }
  useMediaQuery();

  return null;
}

export default App;

