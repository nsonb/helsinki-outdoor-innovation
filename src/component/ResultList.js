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


    useEffect(() => {
        if(renderedItems.length !== 0) {
            setVisible('visible');
        } else {
            setVisible('hidden');
        }
    }, [renderedItems]);

    return (
        <div className='result-container' style={{visibility: visibility}}>
            <div className='scrollable'>
                {renderedItems}
            </div>
        </div>
    )
}

export default ResultList;