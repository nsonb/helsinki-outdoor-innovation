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
            <form onSubmit={onSubmit}>
                <input type='text' value={term} onChange = {(e)=> setTerm(e.target.value) }/>
            </form>
            
        </div>
    )
}

export default Search;