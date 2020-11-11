import React, {useState, useContext} from 'react';
//import './search.css';
import searchglass from '../default-img/magnifying-glass 1.png';
import { SportsContext } from '../Contexts/SportsContexts';
import { CurrentTermContext } from '../Contexts/CurrentSearchTermContext';
import { UIContext } from '../Contexts/UIContext';
import Filter from './Filter';
import AutosuggestInput from './AutosuggestInput';
import { useHistory, useLocation } from 'react-router-dom';

const Search = () => {
    const { searchOneSport } = useContext(SportsContext);
    const { currentTerm } = useContext(CurrentTermContext);
    const { language } = useContext(UIContext);
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

    const textContent = language.map(l => {
        if (l.langUsed) {
            switch (l.lang) {
                case 'EN':
                    return state.showFilter ? 'Search' : 'Filter'
                case 'SV':
                    return state.showFilter ? 'Sök' : 'Filtrera'
                case 'FI':
                    return state.showFilter ? 'Hae' : 'Rajaa'
                default:
                    break;
            }
        }
    })
    
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
                        {textContent}
                </div>
                {state.showFilter ? 
                    <Filter/> : 
                    <form onSubmit={onSubmit} style={searchForm}>
                        <AutosuggestInput onSubmit = {onSubmit}/>
                        <div className='submit button' style={submit} onClick = {onSubmit}>
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
    marginTop: '8vh',
    boxShadow: "saddlebrown 2px",
    zIndex: 3
}

const searchBar = {
    display: "flex",
    flexDirection: "row",
    margin: "auto",
    minWidth: "280px",
    width: "80%",
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
    position: 'relative',
    display: 'flex',
    flexDirection: 'row'
}

export default Search;
