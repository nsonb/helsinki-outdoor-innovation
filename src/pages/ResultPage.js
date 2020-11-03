import React from 'react';
import Search from '../component/Search';
import ResultList from '../component/ResultList';
import MapView from '../component/MapView';
import MiniWeather from '../component/MiniWeather';

import 'leaflet/dist/leaflet.css';
import './ResultPage.css';

const ResultPage = (props) => {
    
    return (
        <div className='result-page-container'>
            <MapView className='leaflet-container'>
            </MapView>
            <Search onTermChange={props.onTermChange} onSubmit={null}/>
            <ResultList />
            <MiniWeather location = 'top'/>
        </div>
    )
}
export default ResultPage;