import React from 'react';
import ImageHolder from '../component/ImageHolder';
import MiniWeather from '../component/MiniWeatherComponent';
import Search from '../component/SearchComponent';

import fall from '../default-img/fall.png';
import spring from '../default-img/spring.jpg';
import summer from '../default-img/summer.png';
import winter from '../default-img/winter.png';

import './landing-page.css';

const LandingPage = () => {
    return (
        <div className='landing-page'>  
            <ImageHolder images = {[spring, summer, fall, winter]} />
            <h2>Discover Helsinki Outdoor Sports</h2>  
            <div>
                <MiniWeather />
                <Search />
            </div>
        </div>
        
    )
}

export default LandingPage;