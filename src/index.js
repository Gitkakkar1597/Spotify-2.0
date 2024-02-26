import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

//Create root of application

const root = ReactDOM.createRoot(document.getElementById('root'));      //Only place in entire application where we're fetching from DOM

root.render(<App />);