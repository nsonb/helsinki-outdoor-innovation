import React, {useState, useContext} from 'react';
import './search.css';
import { SportsContext } from '../Contexts/SportsContexts';

const Filter = () => {
    const { filterByTags } = useContext(SportsContext);
    const [state, setState] = useState({
        tags: { 
            land: {status: false, icon: '', name_fi: 'Kuivalla maalla', name_en: 'Sports on land', name_sv: ''},
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
        const tags = Object.keys(state.tags).filter(e => state.tags[e].status);
        filterByTags(tags);
    }

    const makeFilterCheckbox = (tagname) => {
        return  <div key={tagname}>
                    <input type="checkbox" onChange={saveValue} checked={state.tags[tagname].status} value={tagname} name={tagname} />
                    <label>{state.tags[tagname].name_en}</label>
                </div>
    }

    return (  
        <div 
            className='container-search' 
            style={filterBox}
            >
            {Object.keys(state.tags).map(key => makeFilterCheckbox(key))}
            <div 
                className='filter button' 
                style={state.filterHover? {...filter, opacity: 1} : filter}
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
    width: "80%",
    height: "auto",
    backgroundColor: "rgb(6, 13, 8)",
    color: "#FFF9E3",
    display: "flex",
    borderRadius: "20px",
    margin: 'auto'
}

const filter = {
    width: "80px",
    background: "none",
    padding: "10px 10px",
    margin: "5px",
    opacity: "90%",
    backgroundColor: "#502619",
    color: "#FFF9E3",
    borderRadius: "20px 0 0 20px",
    textAlign: "left",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "12px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: '20px'
}

export default Filter;
