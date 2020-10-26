import React, {useState, useContext, useEffect} from 'react';
import './search.css';
import searchglass from '../default-img/magnifying-glass 1.png';
import { SportsContext } from '../Contexts/SportsContexts';
import { CurrentTermContext } from '../Contexts/CurrentSearchTermContext';

const Search = (props) => {
    const { searchOneSport } = useContext(SportsContext);
    const currentTerm = useContext(CurrentTermContext);
    
    const onSubmit = (event) => {
        event.preventDefault();
        if(props.onSubmit !== null) {
            props.onSubmit();
        }
        searchOneSport(currentTerm);
    }

    const updateTerm = (value) => {
        props.onTermChange(value)
    }
    
    return (  
        <div className='container-search'>
            <form className='search-bar' onSubmit={onSubmit}>
                
                <div className='filter button'>Filter</div>
                <input type='text' value={currentTerm} placeholder= 'search' onChange = {(e) => {updateTerm(e.target.value)}}/>
                <div className='submit button' onClick = {onSubmit}>
                    <img className='search-logo' src={searchglass} alt='search'/>
                </div> 
            </form>       
        </div>
    )
}

export default Search;
