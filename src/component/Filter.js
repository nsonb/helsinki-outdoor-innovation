import React, {useState, useContext} from 'react';
import './search.css';
import { SportsContext } from '../Contexts/SportsContexts';
import { CurrentTermContext } from '../Contexts/CurrentSearchTermContext';
import { UIContext } from '../Contexts/UIContext';
import { useHistory, useLocation } from 'react-router-dom';

const Filter = (props) => {
    const history = useHistory();
    const location = useLocation();
    const { filterTagsAndCities, searchOneSport } = useContext(SportsContext);
    const { updateTerm } = useContext(CurrentTermContext);
    const { currentLang, filter, saveTag, saveCity, clearFilter } = useContext(UIContext);

    const [state, setState] = useState({
        filterHover: false,
        buttonText: {
            SV: 'Filtrera',
            EN: 'Filter',
            FI: 'Rajaa'
        },
        resetButtonText: {
            SV: 'Klar',
            EN: 'Reset',
            FI: 'Nollaa valinnat'
        },
        searchButtonText: {
            SV: 'Sök',
            EN: 'Search',
            FI: 'Hae'
        }
    })
    

    const filterSports = (evt) => {
        if (evt) evt.preventDefault();
        updateTerm('')
        let tags = Object.keys(filter.tags).filter(e => filter.tags[e].status);
        let cities = Object.keys(filter.cities).filter(e => filter.cities[e].status);
        //if (!cities.length) cities = Object.keys(state.cities);
        filterTagsAndCities({tags: tags, cities: cities}, 'all');
        if (location.pathname !== '/result') {
            history.push('/result');
        }
        props.hideFilter();
    }

    const filterResults = (evt) => {
        if (evt) evt.preventDefault();
        updateTerm('')
        let tags = Object.keys(filter.tags).filter(e => filter.tags[e].status);
        let cities = Object.keys(filter.cities).filter(e => filter.cities[e].status);
        //if (!cities.length) cities = Object.keys(state.cities);
        filterTagsAndCities({tags: tags, cities: cities}, 'results');
        if (location.pathname !== '/result') {
            history.push('/result');
        }
        props.hideFilter();
    }

    const resetFilter = (evt) => {
        if (evt) evt.preventDefault();
        console.log('this will reset filter options')
        clearFilter();
        searchOneSport('')
    }

    const tagLabels = Object.keys(filter.tags).map(key => 
        <div key={key} style={checkboxContainer}>
            <input type="checkbox" style={checkboxInput} onChange={e => saveTag(e)} checked={filter.tags[key].status} value={key} name={key} />
            <label style={{display: 'block'}}>{
                filter.tags[key][currentLang] || filter.tags[key].FI
            }</label>
        </div>
    )
    
    const cityLabels = Object.keys(filter.cities).map(key => 
        <div key={key} style={checkboxContainer}>
            <input type="checkbox" style={checkboxInput} onChange={e => saveCity(e)} checked={filter.cities[key].status} value={key} name={key} />
            <label style={{display: 'block'}}>{
                filter.cities[key][currentLang] || filter.cities[key].FI
            }</label>
        </div>
    )

    return (  
        <div style={filterBox} className='main-background-color'>
            <div style={choiceBox}>
                {tagLabels}
                {cityLabels}
            </div>
            
            <div 
                className='filter button secondary-background-color' 
                style={state.filterHover? {...filterButton, opacity: 1} : filterButton}
                onMouseEnter={() => setState({...state, filterHover: true})}
                onMouseLeave={() => setState({...state, filterHover: false})}
                onClick={filterSports}
                >{state.searchButtonText[currentLang]}
            </div>
            <div 
                className='filter button secondary-background-color' 
                style={state.filterHover? {...filterButton, opacity: 1} : filterButton}
                onMouseEnter={() => setState({...state, filterHover: true})}
                onMouseLeave={() => setState({...state, filterHover: false})}
                onClick={filterResults}
                >{state.buttonText[currentLang]}
            </div>
            <div 
                className='filter button secondary-background-color' 
                style={state.filterHover? {...filterButton, opacity: 1} : filterButton}
                onMouseEnter={() => setState({...state, filterHover: true})}
                onMouseLeave={() => setState({...state, filterHover: false})}
                onClick={resetFilter}
                >{state.resetButtonText[currentLang]}
            </div>
        </div>
    )
}

const filterBox = {
    width: "80%",
    minWidth: '120px',
    display: "flex",
    flexWrap: 'wrap',
    margin: 'auto',
    marginLeft: '0px',
    paddingLeft: '5px',
    borderRadius: '0 20px 20px 0',
    height: 'fit-content'
}

const choiceBox = {
    width: '100%',
    height: 'fit-content',
    maxHeight: '40vh',
    overflowY: 'scroll',
    overflowX: 'hidden',
    display: 'flex',
    flexWrap: 'wrap'
}

const filterButton = {
    width: '100%',
    height: '60%',
    background: "none",
    padding: "5px",
    margin: "auto",
    opacity: "90%",
    color: "#FFF9E3",
    fontSize: "0.8rem",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: '20px',
    textAlign: 'center'
}

const checkboxContainer = {
    width: '14%',
    minWidth: '120px',
    fontSize: '0.8rem',
    display: 'flex',
    marginRight: '2px',
    padding: '3px',
    alignItems: 'center',
    justifyContent: 'left',
    textAlign: 'left',
    height: '35px'
}

const checkboxInput ={
    margin: 0,
    marginRight: '5px',
    background: 'none',
    borderRadius: '5px',
    backgroundColor: 'red',
    cursor: 'pointer',
    userSelect: 'none',
}

export default Filter;

/*<div style={choiceBox}>
                {Object.keys(state.tags).map(key => 
                    <div key={key} style={checkboxContainer}>
                        <input type="checkbox" style={checkboxInput} onChange={saveTag} checked={state.tags[key].status} value={key} name={key} />
                        <label style={{display: 'block'}}>{state.tags[key].name_en}</label>
                    </div>
                    )}
                {Object.keys(state.cities).map(key => 
                    <div key={key} style={checkboxContainer}>
                        <input type="checkbox" style={checkboxInput} onChange={saveCity} checked={state.cities[key].status} value={key} name={key} />
                        <label style={{display: 'block'}}>{state.cities[key].name_en}</label>
                    </div>
                    )}
            </div>*/
