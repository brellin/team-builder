import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const members = [
    {
        name: 'Will Umstead',
        email: 'will@umstead.com',
        role: 'TL',
        id: 1
    },
    {
        name: 'Brandon Allison',
        email: 'brandon@allison.com',
        role: 'TL',
        id: 2
    },
    {
        name: 'Vincent Costa',
        email: 'vincent@costa.com',
        role: 'Student',
        id: 3
    },
    {
        name: 'Ricardo Solorio',
        email: 'ricardo@solorio.com',
        role: 'Student',
        id: 4
    }
]

ReactDOM.render(<App members={members} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
