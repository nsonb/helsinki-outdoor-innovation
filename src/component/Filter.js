import React, {useState, useContext} from 'react';
import './search.css';
import { SportsContext } from '../Contexts/SportsContexts';
import { CurrentTermContext } from '../Contexts/CurrentSearchTermContext';
import { useHistory, useLocation } from 'react-router-dom';

const Filter = () => {
    const history = useHistory();
    const location = useLocation();
    const { filterTagsAndCities } = useContext(SportsContext);
    const { updateTerm } = useContext(CurrentTermContext);
    const [state, setState] = useState({
        tags: { 
            land: {status: false, icon: '', name_fi: 'Kuivalla maalla', name_en: 'Land sports', name_sv: ''},
            water: {status: false, icon: '', name_fi: 'Vesiurheilu', name_en: 'Water sports', name_sv: ''},
            animals: {status: false, icon: '', name_fi: 'Eläinurheilu', name_en: 'Animal sports', name_sv: ''},
            ballgames: {status: false, icon: '', name_fi: 'Pallopelit', name_en: 'Ball games', name_sv: ''},
            nature: {status: false, icon: '', name_fi: 'Luonto', name_en: 'Nature', name_sv: ''},
            noEquipment: {status: false, icon: '', name_fi: 'Ei välineitä', name_en: 'No equipment', name_sv: ''},
            winter: {status: false, icon: '', name_fi: 'Talviurheilu', name_en: 'Winter sports', name_sv: ''},
        },
        cities: {
            helsinki: {status: false, icon: '', name_fi: 'Helsinki', name_en: 'Helsinki', name_sv: 'Helsingfors'},
            espoo: {status: false, icon: '', name_fi: 'Espoo', name_en: 'Espoo', name_sv: 'Esbo'},
            vantaa: {status: false, icon: '', name_fi: 'Vantaa', name_en: 'Vantaa', name_sv: 'Vanda'},
        },
        filterHover: false
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
        const tags = Object.keys(state.tags).filter(e => state.tags[e].status);
        const cities = Object.keys(state.cities).filter(e => state.cities[e].status);
        filterTagsAndCities({tags: tags, cities: cities});
        if (location.pathname !== '/result') {
            history.push('/result');
        }
    }

    return (  
        <div style={filterBox} className='main-background-color'>
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
            <div 
                className='filter button secondary-background-color' 
                style={state.filterHover? {...filterButton, opacity: 1} : filterButton}
                onMouseEnter={() => setState({...state, filterHover: true})}
                onMouseLeave={() => setState({...state, filterHover: false})}
                onClick={filterSports}
                >
                    Filter
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
