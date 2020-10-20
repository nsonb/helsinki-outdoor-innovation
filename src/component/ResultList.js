import React, {useContext, useEffect} from 'react';
import ResultItem from './ResultItem';


import { SportsContext } from '../Contexts/SportsContexts';


const ResultList = () => {
    const { updateSports } = useContext(SportsContext);
    const { sorted } = useContext(SportsContext);
    console.log(sorted)
    useEffect(() => {
        updateSports();
    }, []);

    return (
        <div>
            {Object.keys(sorted).map(e => sorted[e].data.map(d =>
                            <li>{d.name_en || d.name_fi || 'No name'}</li>))}
            Result List
            <ResultItem />
            <ResultItem />
            <ResultItem />
        </div>
    )
}

export default ResultList;