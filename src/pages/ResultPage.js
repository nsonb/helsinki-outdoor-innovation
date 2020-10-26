import React from 'react';
import Search from '../component/Search';
import ResultList from '../component/ResultList';

import './ResultPage.css';

import helsinkiMap from '../default-img/helsinki-temp-map.jpg'

const ResultPage = (props) => {
    
    return (
        <div className='result-page-container'>
            <img className = 'background-map' src={helsinkiMap}/>
            <Search onTermChange={props.onTermChange} onSubmit={null}/>
            <ResultList />
        </div>
    )
}
export default ResultPage;