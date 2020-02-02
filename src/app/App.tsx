import React, { FC, useReducer } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// store
import { AppProvider } from 'app/contexts';
// reducer
import { surveyResultsReducer, surveysInitialState } from 'app/reducers';
// containers
import { SurveysList, SurveyDetails } from 'app/containers';
// components
import { ContentWrapper } from 'app/components';
// styles
import 'styles/app.css';

export const App: FC = () => {
  const [state, dispatch] = useReducer(
    surveyResultsReducer,
    surveysInitialState
  );
  const value = { state, dispatch };
  return (
    <AppProvider value={value}>
      <ContentWrapper appName="Front End Coding Test">
        <Router>
          <Redirect exact from="/" to="/surveys-results" />
          <Route default path={['/surveys-results']} component={SurveysList} />
          <Route path={['/surveys/:id']} component={SurveyDetails} />
        </Router>
      </ContentWrapper>
    </AppProvider>
  );
};
