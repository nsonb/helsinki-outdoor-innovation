import React, { useContext, useEffect } from 'react';
import { ServiceContext } from '../Contexts/ServiceContext';
import { SportsContext } from '../Contexts/SportsContexts';

const LandingPage = () => {
    const { services } = useContext(ServiceContext);
    const { updateServices } = useContext(ServiceContext);
    const { sports } = useContext(SportsContext);
    const { updateSports } = useContext(SportsContext);

    useEffect(() => {
        updateServices();
        updateSports();
    }, []);

    return (
      <div className='testingPage'>
            <div>Landing page</div>
            <div>This is a test information from context API: a name of a kiosk. {services.commercial[3] ? services.commercial[3].name_fi : ''}</div>
      </div>
    );
  }

export default LandingPage;