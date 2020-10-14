import React, {useState} from 'react';

const Search = () => {
    const [term, setTerm] = useState('');
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(term);
    }

    return (
        <div>
            <label>Search for location</label>
            <input type='text' value={term} onChange = {(e)=> setTerm(e.target.value) }/>
            <div className='submit' onClick = {onSubmit}>o</div> 
        </div>
    )
}

export default Search;