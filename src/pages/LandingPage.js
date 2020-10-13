import React, { useContext, useEffect } from 'react';
import {ServiceContext, ServiceContextProvider} from '../Contexts/ServiceContexts';

const LandingPage = () => {
    const { services } = useContext(ServiceContext);
    const { updateServices } = useContext(ServiceContext);

    useEffect(() => {
        updateServices();
    }, []);

    return (
      <div className='landing'>
            <div>Landing page</div>
            <div>This is a test information from context API: a name of a kiosk. {services.commercial[3] ? services.commercial[3].name_fi : ''}</div>
      </div>
    );
  }

export default LandingPage;