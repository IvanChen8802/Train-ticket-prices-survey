import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';
import './index.css';

// const counters = Array.from({length: 14}, (_,index) => index)

ReactDOM.render(
    <>
        {<Main />}
    </>,
    document.getElementById('root')
);