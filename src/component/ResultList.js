import React, {useContext, useEffect, useState} from 'react';
import ResultItem from './ResultItem';
import './ResultList.css';


import { SportsContext } from '../Contexts/SportsContexts';

const ResultList = () => {
    const { sorted } = useContext(SportsContext);
    const [ detailed, setDetailed ] = useState(false);
    const [ more, setMore ] = useState('more');
    const [ height, setHeight] = useState('40vh');
    const [ visibility, setVisible] = useState('hidden');

    const renderedItems = Object.keys(sorted).map(e => sorted[e].data.map(d => {
        return (
        <div key={d.id}>
            <ResultItem location = {d} detailed = {detailed}/>
        </div>    
        )
    }));

    const changeMore = () => {
        if(more === 'more') {
            setMore('less');
            setHeight('50vh');
        } else {
            setHeight('30vh');
            setMore('more');
        }
    }

    useEffect(() => {
        console.log(renderedItems.length)
        if(renderedItems.length !== 0) {
            setVisible('visible');
        } else {
            setVisible('hidden');
        }
    }, [detailed, more, renderedItems.length]);

    return (
        <div className='result-container' style={{maxHeight: height, visibility: visibility}}>
            <button className='more-button' onClick={() => {setDetailed(!detailed);changeMore()}}>{more}</button>
            <div className='scrollable'>
                {renderedItems}
            </div>
        </div>
    )
}

export default ResultList;