import React, { useContext, useEffect, useState } from 'react';
/*import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';*/
import { ServiceContextProvider } from './Contexts/ServiceContext';
import { SportsContextProvider } from './Contexts/SportsContexts';

// pages in the app
import TestingPage from './pages/TestingPage';
import LandingPage from './pages/LandingPage';
import ResultPage from './pages/ResultPage';
import { CurrentTermContext } from './Contexts/CurrentSearchTermContext';

// <TestingPage/>
const App = () => {
  const [currentSearchTerm, setCurrentSearchTerm] = useState('search');

  useEffect(() =>{
    // update current search term into context
  }, [currentSearchTerm]) 

  const updateSearchTerm = (value) => {
    setCurrentSearchTerm(value)
  }

  return (
    <div className='App'>
      <ServiceContextProvider>
          <SportsContextProvider>
            <CurrentTermContext.Provider value={currentSearchTerm}>
              <LandingPage onTermChange = {updateSearchTerm}/>
              
            </CurrentTermContext.Provider>
          </SportsContextProvider>
        </ServiceContextProvider>
        
    </div>
  );
}

//<ResultPage onTermChange = {updateSearchTerm}/>

export default App;
