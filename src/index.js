import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {datas} from './datas'
ReactDOM.render(
  <React.StrictMode>
    <App fromServer={datas}/>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
