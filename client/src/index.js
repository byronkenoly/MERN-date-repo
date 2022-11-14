import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/Main.jsx'
import App from './components/App.js';
//import {variable, Menu} from './test'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//const dish = React.createElement("h1", null, "Baked Salmon");

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Menu />);

//console.log(Menu);

