import React, { useContext, useEffect } from 'react';
/*import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';*/
import { ServiceContextProvider } from './Contexts/ServiceContexts';
import LandingPage from './pages/LandingPage';

const App = () => {

  return (
    <div className='App'>
        <ServiceContextProvider>
          <div>This is our app</div>
          <div>Contents go here, so they can access the wrapper context</div>
          <LandingPage/>
        </ServiceContextProvider>
    </div>
  );
}

export default App;
