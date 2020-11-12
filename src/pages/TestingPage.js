import React, { useState, useContext } from 'react';
import Autosuggest from 'react-autosuggest';
import { CurrentTermContext } from '../Contexts/CurrentSearchTermContext';
// https://codepen.io/moroshko/pen/LGNJMy
// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
const TestingPage = (props) => {
  const currentTerm = useContext(CurrentTermContext);
  const [ state, setState ] = useState({
    value: '',
    suggestions: []
  }) 
  const [ testSuggestions ] = useState([
    'land', 'nature', 'noEquipment', 'water', 'animals'
  ])

  const escapeRegexCharacters = (str) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  const getSuggestions = (currentTerm) => {
    const escapedValue = escapeRegexCharacters(currentTerm.trim());
    if (escapedValue === '') {
      return [];
    }
    const regex = new RegExp('^' + escapedValue, 'i');
    return testSuggestions.filter(language => regex.test(language));
  }

  const renderSuggestion = (suggestion) => {
    return (
      <span>{suggestion}</span>
    );
  }

  const getSuggestionValue = (suggestion) => {
    return suggestion;
  }

  const onValueChange = (event, { newValue, method }) => {
    console.log(newValue)
    props.onTermChange(newValue);
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
    placeholder: "Type tag",
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

export default TestingPage;