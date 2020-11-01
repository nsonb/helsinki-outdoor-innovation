import React, {useState, useContext} from 'react';
import './search.css';
import { SportsContext } from '../Contexts/SportsContexts';
import { CurrentTermContext } from '../Contexts/CurrentSearchTermContext';
import { useHistory, useLocation } from 'react-router-dom';

const Filter = () => {
    const history = useHistory();
    const location = useLocation();
    const { filterByTags } = useContext(SportsContext);
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
        filterHover: false
    })
    
    const saveValue = (evt) => {
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

    const filterSports = (evt) => {
        evt.preventDefault();
        updateTerm('')
        const tags = Object.keys(state.tags).filter(e => state.tags[e].status);
        filterByTags(tags);
        if (location.pathname !== '/result') {
            history.push('/result');
        }
    }

    const makeFilterCheckbox = (tagname) => {
        return  <div key={tagname} style={checkboxContainer}>
                    <input type="checkbox" style={checkboxInput} onChange={saveValue} checked={state.tags[tagname].status} value={tagname} name={tagname} />
                    <label style={{display: 'block'}}>{state.tags[tagname].name_en}</label>
                </div>
    }

    return (  
        <div 
            style={filterBox}
            >
            {Object.keys(state.tags).map(key => makeFilterCheckbox(key))}
            <div 
                className='filter button' 
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
    margin: '5px',
    width: "calc(100%-80px)",
    height: "35px",
    backgroundColor: "rgb(6, 13, 8)",
    color: "#FFF9E3",
    display: "flex",
    borderRadius: "20px",
    margin: 'auto',
    marginLeft: '0px',
    paddingLeft: '5px',
    borderRadius: '0 20px 20px 0',
    fontFamily: "'Montserrat', sans-serif",
}

const filterButton = {
    width: '60px',
    height: '60%',
    background: "none",
    padding: "5px",
    margin: "auto",
    opacity: "90%",
    backgroundColor: "#FFF9E3 ",
    color: "#060D08",
    borderRadius: "20px 0 0 20px",
    textAlign: "left",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "12px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: '20px',
    textAlign: 'center'
}

const checkboxContainer = {
    width: '14%',
    fontSize: '12px',
    display: 'flex',
    marginRight: '2px',
    padding: '2px',
    alignItems: 'center',
    justifyContent: 'center',
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
