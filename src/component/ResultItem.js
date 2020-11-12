import React, {useState, useContext} from 'react';
import './ResultItem.css'
import DetailedInfoModal from "./DetailedInfoModal";
import { UIContext } from '../Contexts/UIContext';

const ResultItem = ({location, detailed}) => {
    const { currentLang } = useContext(UIContext);
    const [status, setStatus] = useState(false);
    const renderedDetail = (
        <div className='detail'>
            <div >
                {currentLang === 'SV' ? location.street_address_sv || location.street_address_fi || '' : 
                (currentLang === 'EN' ? location.street_address_en || location.street_address_fi || '' : 
                location.street_address_fi || '')},  
                {currentLang === 'SV' ? location.address_city_sv || location.address_city_fi || '' : 
                (currentLang === 'EN' ? location.address_city_en || location.address_city_fi || '' : 
                location.address_city_fi || '')},  
                {location.address_zip || ''}
            </div>
        </div>
    )

    return (
        <div className='result-item-container main-background-color-faded' onClick={() => status === false ? setStatus(true) : null }>
            <div className='location-name'>{location.name_en || location.name_fi || location.name_sv}</div>
            { status && (<DetailedInfoModal closeModal={() => setStatus(false)} location = {location}/>)}
            { renderedDetail }
        </div>
        
    )
}

export default ResultItem;

// <a href={location.www_en}>link</a>
/*
const renderedOntotree = location.ontologytree_ids.map(e => <div className='tag' key={e}>{e}</div>)
    const renderedOntoword = location.ontologyword_ids.map(e => <div className='tag' key={e}>{e}</div>)
    <div>{location.desc_fi || location.desc_fi}</div>
        <div className='tag-container'>
            {renderedOntotree}
            {renderedOntoword}
        </div>*/
