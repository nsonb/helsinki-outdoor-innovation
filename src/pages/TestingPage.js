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
      searchOneSport('tennis');
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
            <div>Landing page</div>
            <div>This is a test information from context API: a name of a kiosk. {services.commercial[3] ? services.commercial[3].name_fi : ''}</div>
            <button onClick={handleClick}>Search 'tennis'</button>
            <button onClick={handleClick2}>Search by tag 'ballgames'</button>
      </div>
    );
  }

export default LandingPage;