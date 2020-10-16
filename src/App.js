import React, { useContext, useEffect } from 'react';
/*import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';*/
import { ServiceContextProvider } from './Contexts/ServiceContext';
import { SportsContextProvider } from './Contexts/SportsContexts';
import TestingPage from './pages/TestingPage';

const App = () => {

  return (
    <div className='App'>
        <ServiceContextProvider>
          <SportsContextProvider>
            <div>This is our app</div>
            <div>Contents go here, so they can access the wrapper context</div>
            <TestingPage/>
          </SportsContextProvider>
        </ServiceContextProvider>
    </div>
  );
}

export default App;
