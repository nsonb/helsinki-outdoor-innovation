import React, {useEffect} from 'react';

const ResultItem = ({location, detailed}) => {
    const renderedOntotree = location.ontologytree_ids.map(e => <div key={e}>{e}</div>)
    const renderedOntoword = location.ontologyword_ids.map(e => <div key={e}>{e}</div>)
    
    const renderedDetail = (
        <div>
            <div>
                {location.street_address_en || location.street_address_sv}
            </div>
            <div>{location.desc_fi || location.desc_fi}</div>
            <div>
                Ontology_tree
                {renderedOntotree}
                Ontology_word
                {renderedOntoword}
            </div>
            <a href={location.www_en}>link</a>
        </div>
    )

    return (
        <div>
            <h1>{location.name_en || location.name_fi || location.name_sv}</h1>
            { detailed == true ? renderedDetail : null}       
        </div>
        
    )
}

export default ResultItem;