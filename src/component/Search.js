import React, {useState, useContext} from 'react';
//import './search.css';
import searchglass from '../default-img/magnifying-glass 1.png';
import { SportsContext } from '../Contexts/SportsContexts';
import { CurrentTermContext } from '../Contexts/CurrentSearchTermContext';
import Filter from './Filter';
import AutosuggestInput from './AutosuggestInput';
import { useHistory, useLocation } from 'react-router-dom';

const Search = () => {
    const { searchOneSport } = useContext(SportsContext);
    const { currentTerm, updateTerm } = useContext(CurrentTermContext);
    const [state, setState] = useState({
        inputFocused: false,
        filterHover: false,
        showFilter: false
    })
    const history = useHistory();
    const location = useLocation();
    
    const onSubmit = (event, term) => {
        if (event) event.preventDefault();
        if (!term) term = currentTerm;
        searchOneSport(term);
        if (location.pathname !== '/result') {
            history.push('/result');
        }
    }

    const toggleFilterBox = (evt) => {
        evt.preventDefault();
        setState({...state, showFilter: !state.showFilter});
    }
    
    return (  
        <div className='container-search' style={containerSearch}>
            <div className='search-bar' style={searchBar} >                
                <div 
                    className='filter button' 
                    style={
                        state.showFilter ? 
                        (state.filterHover? {...reverseFilter, opacity: 1} : reverseFilter) :
                        (state.filterHover? {...filter, opacity: 1} : filter)
                    }
                    onMouseEnter={() => setState({...state, filterHover: true})}
                    onMouseLeave={() => setState({...state, filterHover: false})}
                    onClick={toggleFilterBox}
                    >
                        {state.showFilter ? 'Search' : 'Filter'}
                </div>
                {state.showFilter ? 
                    <Filter/> : 
                    <form onSubmit={onSubmit} style={searchForm}>
                        <AutosuggestInput 
                            onTermChange = {(value) => updateTerm(value)} onSubmit = {onSubmit}/>
                        <div className='submit' style={submit} onClick = {onSubmit}>
                            <img className='search-logo' style={searchLogo} src={searchglass} alt='search'/>
                        </div> 
                    </form>}
                </div>
            <div>
                
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
    margin: '0px',
    marginTop: '16px',
    boxShadow: "saddlebrown 2px"
}

const searchBar = {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    margin: "auto",
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
    width: "48px",
    height: "35px",
    background: "none",
    marginLeft: "-48px",
    marginTop: '0',
    alignItems: "center",
    justifyItems: "center",
    opacity: "90%",
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0'
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
    alignItems: "center",
    zIndex: '1'
}

const reverseFilter = {
    width: "80px",
    height: "100%",
    background: "none",
    padding: "10px 10px",
    margin: "0",
    opacity: "90%",
    backgroundColor: "#FFF9E3 ",
    color: "#060D08",
    borderRadius: "20px 0 0 20px",
    textAlign: "left",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "12px",
    justifyContent: "center",
    alignItems: "center",
    zIndex: '1'
}

const searchLogo = {
    display: "block",
    width: "auto",
    height: '16px',
}

const searchForm = {
    width: '100%',
    height: '35px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row'
}

export default Search;
