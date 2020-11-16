import React from 'react';
import Search from '../component/Search';
import ResultList from '../component/ResultList';
import MapView from '../component/MapView';
import MiniWeather from '../component/MiniWeather';
import HomeButton from '../component/HomeButton'

import 'leaflet/dist/leaflet.css';
import './ResultPage.css';

const ResultPage = () => {
    
    return (
        <div className='result-page-container'>
            <HomeButton />
            <MapView className='leaflet-container'>
            </MapView>
            <Search/>
            <ResultList />
            <MiniWeather location = 'top'/>
        </div>
    )
}
export default ResultPage;
//