import React, { useContext, useEffect } from 'react';
import ImageHolder from '../component/ImageHolder';
import MiniWeather from '../component/MiniWeather';
import Search from '../component/Search';

import fall from '../default-img/fall.png';
import spring from '../default-img/spring.jpg';
import summer from '../default-img/summer.png';
import winter from '../default-img/winter.png';

import './landing-page.css';
import { SportsContext } from '../Contexts/SportsContexts';
import { WeatherContext } from '../Contexts/WeatherContext';

const LandingPage = (props) => {
    const { updateSports, sorted } = useContext(SportsContext);
    const { updateWeather } = useContext(WeatherContext);

    useEffect(() => {
        updateSports();
        updateWeather();
    }, []);

    return (
        <div className='landing-page'>  
            <ImageHolder images = {[spring, summer, fall, winter]} />
            <h2>Discover Helsinki Outdoor Sports</h2>  
            <div>
                <Search onTermChange = {props.onTermChange}/>
                
                <MiniWeather />
            </div>
        </div>
        
    )
}

export default LandingPage;

/*<div>Sample box for search results
    <ul>
        {Object.keys(sorted).map(e => sorted[e].data.map(d =>
            <li>{d.name_en || d.name_fi || 'No name'}</li>))}                     
    </ul>
</div>*/