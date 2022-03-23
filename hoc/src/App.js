import React from "react";
import './App.css';

const App = (props) => (
    <ul>
        {props.list.map((char, index) => {
            return (
                <li key={char.name + index}>
                    <strong>{char.name}</strong> - &nbsp;
                    {char.side}
                </li>
            )
        })}
    </ul>
);

export default App;
