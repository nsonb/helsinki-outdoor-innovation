import React, {useState} from 'react';
import './search.css';
import searchglass from '../default-img/magnifying-glass 1.png';

const Search = () => {
    const [term, setTerm] = useState('search');
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(term);
    }

    return (
        <div className='container-search'>
            
            <div className='search-bar'>
                <div className='filter button'>Filter</div>
                <input type='text' value={term} onChange = {(e)=> setTerm(e.target.value)} onClick = {(e)=>setTerm('')}/>
                <div className='submit button' onClick = {onSubmit}>
                    <img className='search-logo' src={searchglass} alt='search'/>
                </div> 
            </div>
            
        </div>
    )
}

export default Search;