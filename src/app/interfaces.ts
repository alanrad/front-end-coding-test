// sharabale interfaces defined for the application

export interface IsurveyResult {
  name: string;
  url: string;
  participant_count: number;
  response_rate: number;
  submitted_response_count: number;
}

export interface IsurveyResultAction {
  type: string;
  payload: {
    surveyResults?: [] | IsurveyResult[];
  };
}

export interface IsurveyResultsState {
  surveyResults: [] | IsurveyResult[];
  loading: boolean;
  error: boolean;
}
