import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './app/App';
import { Failed } from './app/Failed';
import * as serviceWorker from './serviceWorker';
// declare global configuration which the app needed
declare global {
  interface Window {
    ROOT_URL: string;
    SURVEY_PATH: string;
  }
}
// make sure the required global config items are available
const { ROOT_URL, SURVEY_PATH } = window;
const isConfigAvailable =
  typeof ROOT_URL !== 'undefined' &&
  typeof SURVEY_PATH !== 'undefined' &&
  !!ROOT_URL &&
  !!SURVEY_PATH;

ReactDOM.render(
  isConfigAvailable ? <App /> : <Failed />,
  document.getElementById('root')
);

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
