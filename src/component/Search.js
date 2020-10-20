import React, {useState, useContext, useEffect} from 'react';
import './Search.css';
import searchglass from '../default-img/magnifying-glass 1.png';
import { SportsContext } from '../Contexts/SportsContexts';
import { CurrentTermContext } from '../Contexts/CurrentSearchTermContext';

const Search = (props) => {
    const { searchOneSport } = useContext(SportsContext);
    const currentTerm = useContext(CurrentTermContext);
    console.log(currentTerm);
    // const [term, setTerm] = useState(currentTerm);
    const onSubmit = (event) => {
        event.preventDefault();
        //console.log(term);     
        searchOneSport(currentTerm);
    }

    const updateTerm = (value) => {
        console.log(value)
        props.onTermChange(value)
    }
    
    return (
        <CurrentTermContext.Consumer>
            {(value) => {
                console.log(currentTerm);
                return (
                    <div className='container-search'>
                        <div className='search-bar'>
                            <div className='filter button'>Filter</div>
                            <input type='text' value={value} onChange = {(e) => {updateTerm(e.target.value)}}/>
                            <div className='submit button' onClick = {onSubmit}>
                                <img className='search-logo' src={searchglass} alt='search'/>
                            </div> 
                        </div>       
                    </div>
                )
            }}   
        </CurrentTermContext.Consumer>   
    )
}

export default Search;