import React, {useState, useContext} from 'react';
//import './search.css';
import searchglass from '../default-img/magnifying-glass 1.png';
import { SportsContext } from '../Contexts/SportsContexts';
import { CurrentTermContext } from '../Contexts/CurrentSearchTermContext';
import Filter from './Filter';
import AutosuggestInput from './AutosuggestInput';

const Search = (props) => {
    const { searchOneSport } = useContext(SportsContext);
    const currentTerm = useContext(CurrentTermContext);
    const [state, setState] = useState({
        inputFocused: false,
        filterHover: false,
        showFilter: false
    })
    
    const onSubmit = (event) => {
        event.preventDefault();
        if(props.onSubmit !== null) {
            props.onSubmit();
        }
        searchOneSport(currentTerm);
    }

    const toggleFilterBox = (evt) => {
        evt.preventDefault();
        setState({...state, showFilter: !state.showFilter});
    }
    
    return (  
        <div className='container-search' style={containerSearch}>
            <form className='search-bar' style={searchBar} onSubmit={onSubmit}>                
                <div 
                    className='filter button' 
                    style={state.filterHover? {...filter, opacity: 1} : filter}
                    onMouseEnter={() => setState({...state, filterHover: true})}
                    onMouseLeave={() => setState({...state, filterHover: false})}
                    onClick={toggleFilterBox}
                    >
                        {state.showFilter ? 'Search' : 'Filter'}
                </div>
                
                <AutosuggestInput 
                    onTermChange = {props.onTermChange} onSubmit = {onSubmit}/>
                <div className='submit button' style={submit} onClick = {onSubmit}>
                    <img className='search-logo' style={searchLogo} src={searchglass} alt='search'/>
                </div> 
            </form>
            <div>
                {state.showFilter ? <Filter/> : null}
            </div>   
        </div>
    )
}

/*<input 
                    type='text' 
                    style={state.inputFocused ? {...searchInput, ...focusedInput} : searchInput} 
                    value={currentTerm} 
                    placeholder= 'search' 
                    onChange = {(e) => {updateTerm(e.target.value)}}
                    onFocus={() => setState({...state, inputFocused: true})}
                    onBlur={() => setState({...state, inputFocused: false})} 
                /> */

const containerSearch = {
    display: "block",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
    width: "100vw",
    top: "0px",
    margin: '5px',
    boxShadow: "saddlebrown 2px"
}

const searchBar = {
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
    margin: "auto",
    marginTop: "20px",
    minWidth: "320px",
    width: "80%",
    left: 0,
    right: 0,
}

const searchInput = {
    WebkitWppearance: "none",
    width: "calc(100% - 80px)",
    boxSizing: "border-box",
    borderRadius: "0px 20px 20px 0px",
    margin: "0px",
    border: "none",
    padding: "10px 50px 10px 10px",
    outline: "none",
    fontFamily: "'Montserrat', sans-serif",
    backgroundColor: "#FFF9E3",
    color: "#060D08"
}

const focusedInput = {
    WebkitAppearance: "none",
    outline: "burlywood",
    border: "none",
    borderRadius: "0px 20px 20px 0px"
}

const submit = {
    width: "50px",
    height: "30px",
    background: "none",
    margin: "auto",
    marginLeft: "-120px",
    alignItems: "center",
    justifyItems: "center",
    opacity: "90%",
}

const filter = {
    width: "80px",
    height: "100%",
    background: "none",
    padding: "10px 10px",
    margin: "0",
    opacity: "90%",
    backgroundColor: "#060D08",
    color: "#FFF9E3",
    borderRadius: "20px 0 0 20px",
    textAlign: "left",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "12px",
    justifyContent: "center",
    alignItems: "center"
}

const searchLogo = {
    display: "block",
    height: "16px",
    width: "auto",
    margin: "auto",
    marginLeft: '0px',
    padding: "6px"
}

export default Search;
