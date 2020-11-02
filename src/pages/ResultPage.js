
import React from 'react';
import Search from '../component/Search';
import ResultList from '../component/ResultList';
import MapView from '../component/MapView';
import 'leaflet/dist/leaflet.css';


import './ResultPage.css';

import helsinkiMap from '../default-img/helsinki-temp-map.jpg'

const ResultPage = (props) => {
    
    return (
        <div className='result-page-container'>
            <MapView className='leaflet-container'></MapView>
            <Search onTermChange={props.onTermChange} onSubmit={null}/>
            <ResultList />
        </div>
    )
}
export default ResultPage;