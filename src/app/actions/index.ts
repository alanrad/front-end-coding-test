// interfaces
import {
  IsurveyResult,
  IsurveyResultDetail,
  IsurveyResultAction,
} from 'app/interfaces';
// action types
import { SET_SURVEYS, SET_SURVEY_DETAIL } from './types';

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

// setSurveyResults function returns an action to update the surveyResults
export const setSurveyDetail = (
  data: IsurveyResultDetail
): IsurveyResultAction => {
  return {
    type: SET_SURVEY_DETAIL,
    payload: {
      surveyResultDetail: data,
    },
  };
};
