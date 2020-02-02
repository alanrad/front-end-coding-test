import { useContext, useEffect } from 'react';
// interfaces
import { IsurveyResult, IsurveyResultDetail } from 'app/interfaces';
// store
import { stateContext } from 'app/contexts';
// actions
import { setSurveyResults, setSurveyDetail } from 'app/actions';
// utils
import {
  getAppConfig,
  fetchSurveyResult,
  fetchSurveyResultDetail,
} from 'utils';
// get app config
const { rootUrl, surveyPath } = getAppConfig();

// A custom Hook is a JavaScript function whose name starts with "use" and it may call other Hooks

// return survey results
export const useSurveyResults = (): { surveyResults: [] | IsurveyResult[] } => {
  const { state, dispatch } = useContext(stateContext);
  const { surveyResults } = state;

  useEffect(() => {
    // just a basic example of how to avoid fetching data from the api multiple times if data is already stored
    if (!surveyResults.length) {
      // get a list of the surveys that are stored in the database
      fetchSurveyResult(`${rootUrl}${surveyPath}`).then(response => {
        dispatch(setSurveyResults(response));
      });
    }
  }, [surveyResults, dispatch]);

  return {
    surveyResults,
  };
};

// return survey results
export const useSurveyDetails = (
  id: string
): {
  surveyResultDetail: [] | IsurveyResultDetail[];
} => {
  const { state, dispatch } = useContext(stateContext);
  const { surveyResultDetail } = state;

  useEffect(() => {
    // just a basic example of how to avoid fetching data from the api multiple times if data is already stored
    if (!surveyResultDetail.length) {
      // get a list of the surveys that are stored in the database
      fetchSurveyResultDetail(`${rootUrl}${surveyPath}/${id}`).then(
        response => {
          dispatch(setSurveyDetail(response));
        }
      );
    }
  }, [id, surveyResultDetail, dispatch]);

  return {
    surveyResultDetail,
  };
};
