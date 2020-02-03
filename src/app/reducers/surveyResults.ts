// import { useMemo, useContext } from 'react';
// interfaces
import { IsurveyResultAction, IsurveyResultsState } from 'app/interfaces';
// action types
import { SET_SURVEYS, SET_SURVEY_DETAIL } from 'app/actions/types';

export const surveysInitialState: IsurveyResultsState = {
  surveyResults: [],
  surveyResultDetail: new Map(),
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
      let update = false;
      let mapData = new Map(state.surveyResultDetail);
      if (typeof surveyResultDetail !== 'undefined') {
        const { url } = surveyResultDetail;
        if (mapData.get(url) === undefined) {
          update = true;
          // we use [url] as a unique key/id to store the new object in surveyResultDetail map
          mapData = mapData.set(url, surveyResultDetail);
        }
      }
      // TODO: useMemo to compare state with new data to avoid unnecessary state change
      // this is just a temporary hack - no time to fix it
      if (update) {
        return {
          ...state,
          surveyResultDetail: mapData,
        };
      }
      return state;
    default:
      throw new Error();
  }
};
