import React, {useState, useContext} from 'react';
import './search.css';
import { SportsContext } from '../Contexts/SportsContexts';
import { CurrentTermContext } from '../Contexts/CurrentSearchTermContext';
import { UIContext } from '../Contexts/UIContext';
import { useHistory, useLocation } from 'react-router-dom';

const Filter = (props) => {
    const history = useHistory();
    const location = useLocation();
    const { filterTagsAndCities } = useContext(SportsContext);
    const { updateTerm } = useContext(CurrentTermContext);
    const { currentLang } = useContext(UIContext);

    const [state, setState] = useState({
        tags: { 
            land: {status: false, icon: '', FI: 'Kuivalla maalla', EN: 'Land sports', SV: null},
            water: {status: false, icon: '', FI: 'Vesiurheilu', EN: 'Water sports', SV: null},
            animals: {status: false, icon: '', FI: 'Eläinurheilu', EN: 'Animal sports', SV: null},
            ballgames: {status: false, icon: '', FI: 'Pallopelit', EN: 'Ball games', SV: null},
            nature: {status: false, icon: '', FI: 'Luonto', EN: 'Nature', SV: null},
            noEquipment: {status: false, icon: '', FI: 'Ei välineitä', EN: 'No equipment', SV: null},
            winter: {status: false, icon: '', FI: 'Talviurheilu', EN: 'Winter sports', SV: null},
        },
        cities: {
            helsinki: {status: false, icon: '', FI: 'Helsinki', EN: 'Helsinki', SV: 'Helsingfors'},
            espoo: {status: false, icon: '', FI: 'Espoo', EN: 'Espoo', SV: 'Esbo'},
            vantaa: {status: false, icon: '', FI: 'Vantaa', EN: 'Vantaa', SV: 'Vanda'},
        },
        filterHover: false,
        buttonText: {
            SV: 'Filtrera',
            EN: 'Filter',
            FI: 'Rajaa'
        }
    })
    
    const saveTag = (evt) => {
        const name = evt.target.name;
        const item = {
            ...state.tags[name], 
            status: !state.tags[name].status
        }
        setState({
            ...state, 
            tags: {...state.tags, 
                [name]: item}
            });
    }

    const saveCity = (evt) => {
        const name = evt.target.name;
        const item = {
            ...state.cities[name], 
            status: !state.cities[name].status
        }
        setState({
            ...state, 
            cities: {...state.cities, 
                [name]: item}
            });
    }

    const filterSports = (evt) => {
        evt.preventDefault();
        updateTerm('')
        let tags = Object.keys(state.tags).filter(e => state.tags[e].status);
        let cities = Object.keys(state.cities).filter(e => state.cities[e].status);
        //if (!cities.length) cities = Object.keys(state.cities);
        filterTagsAndCities({tags: tags, cities: cities});
        if (location.pathname !== '/result') {
            history.push('/result');
        }
        props.hideFilter()
    }

    const tagLabels = Object.keys(state.tags).map(key => 
        <div key={key} style={checkboxContainer}>
            <input type="checkbox" style={checkboxInput} onChange={saveTag} checked={state.tags[key].status} value={key} name={key} />
            <label style={{display: 'block'}}>{
                state.tags[key][currentLang] || state.tags[key].FI
            }</label>
        </div>
    )
    
    const cityLabels = Object.keys(state.cities).map(key => 
        <div key={key} style={checkboxContainer}>
            <input type="checkbox" style={checkboxInput} onChange={saveCity} checked={state.cities[key].status} value={key} name={key} />
            <label style={{display: 'block'}}>{
                state.cities[key][currentLang] || state.cities[key].FI
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
                >{state.buttonText[currentLang]}
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
    fontSize: "12px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: '20px',
    textAlign: 'center'
}

const checkboxContainer = {
    width: '14%',
    minWidth: '120px',
    fontSize: '12px',
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
