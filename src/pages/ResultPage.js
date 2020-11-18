import React, {useContext} from 'react';
import Search from '../component/Search';
import ResultList from '../component/ResultList';
import MapView from '../component/MapView';
import MiniWeather from '../component/MiniWeather';
import DetailedInfoModal from "../component/DetailedInfoModal";

import 'leaflet/dist/leaflet.css';
import './ResultPage.css';
import {UIContext} from "../Contexts/UIContext";


const ResultPage = () => {
    const { showModal } = useContext(UIContext)
    return (
        <div className='result-page-container'>
            { showModal && <DetailedInfoModal/>}
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
