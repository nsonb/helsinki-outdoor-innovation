import React, {useContext} from 'react';
import './ResultItem.css'
import { UIContext } from '../Contexts/UIContext';

const ResultItem = ({location, detailed}) => {
    const { currentLang, toggleModal, selectModalInformation, centerMap, modalContent } = useContext(UIContext);
    const renderedDetail = (
        <div className='detail'>
            <div >
                {currentLang === 'SV' ? location.street_address_sv || location.street_address_fi || '' : 
                (currentLang === 'EN' ? location.street_address_en || location.street_address_fi || '' : 
                location.street_address_fi || '')}<span>{', '}</span> 
                {currentLang === 'SV' ? location.address_city_sv || location.address_city_fi || '' : 
                (currentLang === 'EN' ? location.address_city_en || location.address_city_fi || '' : 
                location.address_city_fi || '')}<span>{', '}</span>
                {location.address_zip || ''}
            </div>
        </div>
    )

    return (
        <div className={location.id === modalContent.id ?
            'result-item-container selected-field' 
             : 'result-item-container main-background-color-faded'} onClick={() => {toggleModal(); selectModalInformation(location);centerMap([location.latitude, location.longitude]);}}>
            <div className='location-name'>{currentLang === 'SV' ? location.name_sv || location.name_fi || '':
                (currentLang === 'EN' ? location.name_en || location.name_fi || '':
                    location.name_fi|| '')}</div>
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
