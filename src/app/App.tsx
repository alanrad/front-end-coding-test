import React, { FC, useReducer } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AppProvider } from 'app/contexts';
import { surveyResultsReducer, surveysInitialState } from 'app/reducers';

const Page1: FC = () => (
  <>
    <div className="page-1-wrapper">
      <p>Page One</p>
    </div>
  </>
);

const Page2: FC = () => (
  <>
    <div className="page-1-wrapper">
      <p>Page Two</p>
    </div>
  </>
);

export const App: FC = () => (
  <AppProvider value={useReducer(surveyResultsReducer, surveysInitialState)}>
    <p>Front End Coding Test</p>
    <Router>
      <Route default path={['/', '/page1']} component={Page1} />
      <Route path={['/page2']} component={Page2} />
    </Router>
  </AppProvider>
);
