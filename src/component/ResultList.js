import React, {useContext, useEffect, useState} from 'react';
import ResultItem from './ResultItem';
import './ResultList.css';


import { SportsContext } from '../Contexts/SportsContexts';

const ResultList = () => {
    const { sorted } = useContext(SportsContext);
    const [ visibility, setVisible] = useState('hidden');

    const renderedItems = Object.keys(sorted).map(e => sorted[e].data.map(d => {
        return (
        <div key={d.id}>
            <ResultItem location = {d} detailed = {false}/>
        </div>    
        )
    }));

    return (
        <div className='result-container'>
            {renderedItems.length !== 0 ? 
                <div className='scrollable'>
                    {renderedItems}
                </div> :
                <div className='scrollable main-background-color' style = {noMatchStyle}>
                    No match found
                </div>
            }
            
        </div>
    )
}

export default ResultList;

const noMatchStyle = {
    padding: '12px',
    margin: '5px',
    borderRadius: '12px'    
}