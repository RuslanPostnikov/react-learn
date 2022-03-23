import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const starWarsChars = [
    {name: 'Dart Weider', side: 'dark'},
    {name: 'Luke Skywalker', side: 'light'},
    {name: 'Palpatin', side: 'dark'},
    {name: 'Obivan Kenobi', side: 'light'},
]

const withFiltered =  Component => props => {
    const filteredList = props.list.filter(char => char.side === props.side)
    return  <Component list={filteredList}/>
}

const FilteredList = withFiltered(App);

ReactDOM.render(
  <React.StrictMode>
    <FilteredList list={starWarsChars} side={'light'}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
