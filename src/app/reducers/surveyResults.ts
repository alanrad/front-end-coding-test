// import { useMemo, useContext } from 'react';
// interfaces
import { IsurveyResultAction, IsurveyResultsState } from 'app/interfaces';
// action types
import { SET_SURVEYS, SET_SURVEY_DETAIL } from 'app/actions/types';

export const surveysInitialState: IsurveyResultsState = {
  surveyResults: [],
  surveyResultDetail: [],
  loading: false,
  error: false,
};

export const surveyResultsReducer = (
  state: IsurveyResultsState = surveysInitialState,
  { type, payload }: IsurveyResultAction
): IsurveyResultsState => {
  const { surveyResults, surveyResultDetail } = payload;
  switch (type) {
    case SET_SURVEYS:
      // TODO: useMemo to compare state with new data to avoid unnecessary state change
      if (!state.surveyResults.length) {
        return {
          ...state,
          surveyResults:
            typeof surveyResults !== 'undefined' ? surveyResults : [],
        };
      }
      return state;
    case SET_SURVEY_DETAIL:
      // TODO: useMemo to compare state with new data to avoid unnecessary state change
      // this is just a temporary hack - no time to fix it
      if (
        Object.values(state.surveyResultDetail)[0] !==
        Object.values(surveyResultDetail || [])[0]
      ) {
        return {
          ...state,
          surveyResultDetail:
            typeof surveyResultDetail !== 'undefined' ? surveyResultDetail : [],
        };
      }
      return state;
    default:
      throw new Error();
  }
};
