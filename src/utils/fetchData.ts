import axios from 'axios';
// interfaces
import { IsurveyResult, IsurveyResultDetail } from 'app/interfaces';

export const fetchSurveyResult = async (
  source: string
): Promise<IsurveyResult[]> => {
  return new Promise<IsurveyResult[]>((resolve, reject) => {
    axios
      .get(source)
      .then(response => {
        // TODO: handle response validation more carefully
        if (typeof response.data.survey_results !== 'undefined') {
          resolve(response.data.survey_results);
        }
        reject(false);
      })
      .catch(error => {
        // TODO: handle error validation
        console.error(error);
        reject(false);
      })
      .then(() => {
        // always executed
        // could be used to dispath an action to set leading to false
      });
  });
};

export const fetchSurveyResultDetail = async (
  source: string
): Promise<IsurveyResultDetail[]> => {
  return new Promise<IsurveyResultDetail[]>((resolve, reject) => {
    axios
      .get(source)
      .then(response => {
        // TODO: handle response validation more carefully
        if (typeof response.data.survey_result_detail !== 'undefined') {
          resolve(response.data.survey_result_detail);
        }
        reject(false);
      })
      .catch(error => {
        // TODO: handle error validation
        console.error(error);
        reject(false);
      })
      .then(() => {
        // always executed
        // could be used to dispath an action to set leading to false
      });
  });
};
