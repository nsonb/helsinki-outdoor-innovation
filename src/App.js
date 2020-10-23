import React, { useContext, useEffect, useState } from 'react';
/*import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';*/
import { ServiceContextProvider } from './Contexts/ServiceContext';
import { SportsContextProvider } from './Contexts/SportsContexts';
import { WeatherContextProvider } from './Contexts/WeatherContext';

// pages
import TestingPage from './pages/TestingPage';
import LandingPage from './pages/LandingPage';
import ResultPage from './pages/ResultPage';
import { CurrentTermContext } from './Contexts/CurrentSearchTermContext';

// <TestingPage/>
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
        <ServiceContextProvider>
          <WeatherContextProvider>
            <SportsContextProvider> 
              <LandingPage onTermChange = {updateSearchTerm}/> 
            </SportsContextProvider>
          </WeatherContextProvider>
        </ServiceContextProvider>
        
    </div>
  );
}
//   <ResultPage onTermChange = {updateSearchTerm}/> 
//   

export default App;
