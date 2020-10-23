import React, { useContext, useEffect } from 'react';
import { ServiceContext } from '../Contexts/ServiceContext';
import { SportsContext } from '../Contexts/SportsContexts';

const LandingPage = () => {
    const { services } = useContext(ServiceContext);
    const { updateServices } = useContext(ServiceContext);
    const { sports } = useContext(SportsContext);
    const { updateSports } = useContext(SportsContext);
    const { sorted } = useContext(SportsContext);
    const { searchOneSport } = useContext(SportsContext);
    const { sortTheSports } = useContext(SportsContext);

    const handleClick = (e) => {
      e.preventDefault();
      searchOneSport('Winter sports');
      console.log(sorted);
    }

    const handleClick2 = (e) => {
      e.preventDefault();
      sortTheSports('ballgames');
      console.log(sorted);
    }

    useEffect(() => {
        updateServices();
        updateSports();

    }, []);

    return (
      <div className='testingPage'>
            <div>This is a test information from context API: </div>
            
      </div>
    );
  }

export default LandingPage;