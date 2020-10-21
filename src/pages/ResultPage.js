import React from 'react';
import Search from '../component/Search';
import ResultList from '../component/ResultList';

const ResultPage = (props) => {
    
    return (
        <div>
            <Search onTermChange={props.onTermChange}/>
            <ResultList />
        </div>
    )
}
export default ResultPage;