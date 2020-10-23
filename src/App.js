import React, { useContext, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { ServiceContextProvider } from './Contexts/ServiceContext';
import { SportsContextProvider } from './Contexts/SportsContexts';
import TestingPage from './pages/TestingPage';
import LandingPage from './pages/LandingPage'

const App = () => {

  return (
    <div className='App'>
      <Router basename={process.env.PUBLIC_URL}>
        <ServiceContextProvider>
          <SportsContextProvider>

            <Route exact path="/">
              <LandingPage/>
            </Route>

            <Route path="/test">
              <TestingPage/>
            </Route>

          </SportsContextProvider>
        </ServiceContextProvider>
      </Router>
    </div>
  );
}

export default App;
