import React, {useContext, useEffect, useState} from 'react';
import ResultItem from './ResultItem';


import { SportsContext } from '../Contexts/SportsContexts';

const ResultList = () => {
    const { updateSports } = useContext(SportsContext);
    const { sorted } = useContext(SportsContext);
    const [detailed, setDetailed ] = useState(false);

    const renderedItems = Object.keys(sorted).map(e => sorted[e].data.map(d => {
        return (
        <div key={d.id}>
            <ResultItem location = {d} detailed = {detailed}/>
        </div>    
        )
    }));

    useEffect(() => {
        updateSports();
    }, [detailed]);

    return (
        <div>
            <button onClick={() => {setDetailed(!detailed)}}>more</button>
            {renderedItems}
        </div>
    )
}

export default ResultList;