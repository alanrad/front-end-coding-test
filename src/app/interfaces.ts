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
    surveyResultDetail?: IsurveyResultDetail;
  };
}

export interface IsurveyResultsState {
  surveyResults: [] | IsurveyResult[];
  surveyResultDetail: Map<string, IsurveyResultDetail>;
  loading: boolean;
  error: boolean;
}

export interface IsurveyResponses {
  id: number;
  question_id: number;
  respondent_id: number;
  response_content: string;
}

export interface Iquestions {
  description: string;
  question_type: string;
  survey_responses: IsurveyResponses[];
}

export interface Ithemes {
  name: string;
  questions: Iquestions[];
}

export interface IsurveyResultDetail extends IsurveyResult {
  themes?: Ithemes[];
}
