import React from 'react';
import ReactDOM from 'react-dom';
// styles
import './index.css';
// components
import { App } from './app/App';
import { Failed } from './app/Failed';
// utils
import { isConfigAvailable } from 'utils';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  isConfigAvailable() ? <App /> : <Failed />,
  document.getElementById('root')
);

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
