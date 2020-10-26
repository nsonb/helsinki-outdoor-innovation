import React, { useContext, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { ServiceContextProvider } from './Contexts/ServiceContext';
import { SportsContextProvider } from './Contexts/SportsContexts';
import { WeatherContextProvider } from './Contexts/WeatherContext';

// pages
import TestingPage from './pages/TestingPage';
import LandingPage from './pages/LandingPage';
import ResultPage from './pages/ResultPage';
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
        <ServiceContextProvider>
          <WeatherContextProvider>
            <SportsContextProvider>
              <CurrentTermContext.Provider value={currentSearchTerm}>
                
                  <Switch>
                    <Route exact path ='/'> 
                      <LandingPage onTermChange = {updateSearchTerm}/>
                    </Route>
                    <Route path ='/result'>
                      <ResultPage onTermChange = {updateSearchTerm}/> 
                    </Route>
                  </Switch> 
                
              </CurrentTermContext.Provider>
            </SportsContextProvider>
          </WeatherContextProvider>
        </ServiceContextProvider>
      </Router>
    </div>
    
    
  );
}
//   <ResultPage onTermChange = {updateSearchTerm}/> 
//   

export default App;

//<Route path ='/'> 
//<LandingPage onTermChange = {updateSearchTerm}/>
//</Route>