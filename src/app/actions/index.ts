// interfaces
import { IsurveyResult, IsurveyResultAction } from 'app/interfaces';
// action types
import { SET_SURVEYS } from './types';

// Actions are payloads of information that send data from app to store

// setSurveyResults function returns an action to update the surveyResults
export const setSurveyResults = (
  data: IsurveyResult[]
): IsurveyResultAction => {
  return {
    type: SET_SURVEYS,
    payload: {
      surveyResults: data,
    },
  };
};
