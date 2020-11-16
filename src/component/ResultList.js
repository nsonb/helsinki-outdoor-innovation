import React, {useContext, useState} from 'react';
import ResultItem from './ResultItem';
import './ResultList.css';


import { SportsContext } from '../Contexts/SportsContexts';

const ResultList = () => {
    const { sorted } = useContext(SportsContext);
    const [collapse, setCollapse] = useState(false)
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
                <div>
                    {renderedItems.length >1 ? 
                        <div className='hover button main-background-color-faded more-button' onClick={() => {setCollapse(!collapse)}}>
                            {collapse? 'expand' : 'collapse'}
                        </div> 
                        : null}
                    <div className='scrollable' style ={{maxHeight: collapse ? '10vh' : '30vh'} }>
                        {renderedItems}
                    </div>
                </div>
                 :
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