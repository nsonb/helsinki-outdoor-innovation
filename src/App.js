import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { ServiceContextProvider } from './Contexts/ServiceContext';
import { SportsContextProvider } from './Contexts/SportsContexts';
import { WeatherContextProvider } from './Contexts/WeatherContext';
import { UIContextProvider } from './Contexts/UIContext';

// pages
import TestingPage from './pages/TestingPage';
import LandingPage from './pages/LandingPage';
import ResultPage from './pages/ResultPage';
import WeatherPage from './pages/WeatherPage';
import { CurrentTermContext } from './Contexts/CurrentSearchTermContext';

const App = () => {
  const [currentSearchTerm, setCurrentSearchTerm] = useState('');

  useEffect(() =>{
    // update current search term into context
  }, [currentSearchTerm]) 

  const updateSearchTerm = (value) => {
    setCurrentSearchTerm(value)
  }

  return (
    <div className='App'>
      <Router basename={process.env.PUBLIC_URL}>
        <UIContextProvider>
          <ServiceContextProvider>
            <WeatherContextProvider>
              <SportsContextProvider>
                <CurrentTermContext.Provider>
                  <Switch>
                    <Route exact path ='/'> 
                      <LandingPage onTermChange = {updateSearchTerm}/>
                    </Route>
                    <Route path ='/result'>
                      <ResultPage onTermChange = {updateSearchTerm}/> 
                    </Route>
                    <Route path ='/weather'>
                      <WeatherPage />
                    </Route>   
                  </Switch>
                </CurrentTermContext.Provider>
              </SportsContextProvider>
            </WeatherContextProvider>
          </ServiceContextProvider>
        </UIContextProvider>
      </Router>
    </div>
    
    
  );
}
//   <ResultPage onTermChange = {updateSearchTerm}/> 
//   

export default App;

