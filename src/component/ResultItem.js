import React, {useState} from 'react';
import './ResultItem.css'
import DetailedInfoModal from "./DetailedInfoModal";

const ResultItem = ({location, detailed}) => {
    const renderedOntotree = location.ontologytree_ids.map(e => <div className='tag' key={e}>{e}</div>)
    const renderedOntoword = location.ontologyword_ids.map(e => <div className='tag' key={e}>{e}</div>)
    const [status, setStatus] = useState(false);
    const renderedDetail = (
        <div className='detail'>
            <div >
                {location.street_address_en || location.street_address_sv}, {location.address_city_en}, {location.address_zip}
            </div>
            <div>{location.desc_fi || location.desc_fi}</div>
            <div className='tag-container'>
                {renderedOntotree}
                {renderedOntoword}
            </div>
            
        </div>
    )

    return (
        <div className='result-item-container main-background-color-faded' onClick={() => status === false ? setStatus(true) : null }>
            <div className='location-name'>{location.name_en || location.name_fi || location.name_sv}</div>
            { status && (<DetailedInfoModal closeModal={() => setStatus(false)} location = {location}/>)}
            { detailed === true ? renderedDetail : null}
        </div>
        
    )
}

export default ResultItem;

// <a href={location.www_en}>link</a>
