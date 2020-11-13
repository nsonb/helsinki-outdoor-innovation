import React, { useState, useContext } from 'react';
import Autosuggest from 'react-autosuggest';
import { CurrentTermContext } from '../Contexts/CurrentSearchTermContext';
import { UIContext } from '../Contexts/UIContext';
import { SportsContext } from '../Contexts/SportsContexts';
import './AutosuggestInput.css';
//autosearch only works in result page, because there is no universal submit function yet!


// https://codepen.io/moroshko/pen/LGNJMy
// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters

// refer to https://github.com/moroshko/react-autosuggest#installation for css styling
const AutosuggestInput = (props) => {
  const { currentTerm, updateTerm } = useContext(CurrentTermContext);
  const { currentLang } = useContext(UIContext);
  const { allSuggestions } = useContext(SportsContext);
  const [ state, setState ] = useState({
    value: '',
    suggestions: [],
    allSuggestions: [],
    placeholders: {
      FI: "Kirjoita tunniste tai liikuntapaikan nimi",
      EN: "Type tag or location name",
      SV: "Type en tagg eller utemotionsplats namn"  
    }
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

    return allSuggestions.filter(s => regex.test(s.name));
  }

  const renderSuggestion = (suggestion) => {
    return (
      <span>{suggestion.name}</span>
    );
  }

  const getSuggestionValue = (suggestion) => {
    if (suggestion.category === 'itemNames') {
      //props.onSubmit(null, '"' + suggestion.id + '"');
      return '"' + suggestion.name + '"';
    } else {
      //props.onSubmit(null, suggestion.name);
      return suggestion.name;
    }
  }

  const onValueChange = (event, { newValue, method }) => {
    updateTerm(newValue);
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
    placeholder: state.placeholders[currentLang],
    value: currentTerm,
    onChange: onValueChange
  };

  return (
    <Autosuggest
      className='secondary-background-color'
      suggestions={state.suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps} />
  );
}

export default AutosuggestInput;