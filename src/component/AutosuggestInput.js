import React, { useState, useContext } from 'react';
import Autosuggest from 'react-autosuggest';
import { CurrentTermContext } from '../Contexts/CurrentSearchTermContext';
import { UIContext } from '../Contexts/UIContext';
import { SportsContext } from '../Contexts/SportsContexts';
import Search from './Search';
import './AutosuggestInput.css';
//autosearch only works in result page, because there is no universal submit function yet!


// https://codepen.io/moroshko/pen/LGNJMy
// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
const AutosuggestInput = (props) => {
  const currentTerm = useContext(CurrentTermContext);
  const { searchSuggestions } = useContext(UIContext);
  const { sports, searchOneSport } = useContext(SportsContext);
  const [ state, setState ] = useState({
    value: '',
    suggestions: []
  }) 

  const escapeRegexCharacters = (str) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  const getSuggestions = (currentTerm) => {
    const escapedValue = escapeRegexCharacters(currentTerm.trim());
    if (escapedValue === '') {
      return [];
    }
    const regex = new RegExp('^' + escapedValue, 'i');
    let sportlist = [];
    //names of the sports from keys and display names
    Object.keys(sports).forEach(sport => {
      sportlist.push({name: sport, category: 'Sports'});
      sports[sport].displayname_fi && sportlist.push({name: sports[sport].displayname_fi, category: 'Sports'});
      sports[sport].displayname_sv && sportlist.push({name: sports[sport].displayname_sv, category: 'Sports'});
      sports[sport].displayname_en && sportlist.push({name: sports[sport].displayname_en, category: 'Sports'});
      //names of the locations from data items, e.g. individual locations
      sports[sport].data.forEach(item => {
        item.name_fi && sportlist.push({name: item.name_fi, category: 'itemNames', id: item.id});
        item.name_sv && sportlist.push({name: item.name_sv, category: 'itemNames', id: item.id});
        item.name_en && sportlist.push({name: item.name_en, category: 'itemNames', id: item.id});
      })
    })
    return [...searchSuggestions, ...sportlist].filter(s => regex.test(s.name));
  }

  const renderSuggestion = (suggestion) => {
    return (
      <span>{suggestion.name}</span>
    );
  }

  const getSuggestionValue = (suggestion) => {
    let search = suggestion.name;
    if (suggestion.category === 'itemNames') {
      search = '"' + suggestion.id + '"'
    }
    return search;
  }

  const onValueChange = (event, { newValue, method }) => {
    props.onTermChange(newValue);
    searchOneSport(newValue);
  };
  
  const onSuggestionsFetchRequested = ({ value }) => {
    setState({
      ...state,
      suggestions: getSuggestions(value)
    });
  };

  const onSuggestionsClearRequested = () => {
    setState({
      ...state,
      suggestions: []
    });
  };

  const inputProps = {
    placeholder: "Type tag or location name",
    value: currentTerm,
    onChange: onValueChange
  };

  return (
    <Autosuggest 
      suggestions={state.suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps} />
  );
}

export default AutosuggestInput;