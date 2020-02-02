// interfaces
import { IsurveyResultAction, IsurveyResultsState } from 'app/interfaces';
// action types
import { SET_SURVEYS } from 'app/actions/types';

export const surveysInitialState = {
  surveyResults: [],
  loading: false,
  error: false,
};

export const surveyResultsReducer = (
  state: IsurveyResultsState = surveysInitialState,
  { type, payload }: IsurveyResultAction
): IsurveyResultsState => {
  const { surveyResults } = payload;
  switch (type) {
    case SET_SURVEYS:
      return {
        ...state,
        surveyResults:
          typeof surveyResults !== 'undefined' ? surveyResults : [],
      };
    default:
      return state;
  }
};
