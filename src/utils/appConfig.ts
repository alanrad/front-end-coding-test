// declare global configuration which the app needed
declare global {
  interface Window {
    ROOT_URL: string;
    SURVEY_PATH: string;
  }
}

export interface IappConfig {
  rootUrl: string;
  surveyPath: string;
}

// make sure the required global config items are available
export const isConfigAvailable = (): boolean => {
  const { ROOT_URL, SURVEY_PATH } = window;
  const isConfigAvailable =
    typeof ROOT_URL !== 'undefined' &&
    typeof SURVEY_PATH !== 'undefined' &&
    !!ROOT_URL &&
    !!SURVEY_PATH;
  return isConfigAvailable;
};

// return global config - can be consumed from anywhere in the app
export const getAppConfig = (): IappConfig => {
  const { ROOT_URL, SURVEY_PATH } = window;
  return {
    rootUrl: typeof ROOT_URL !== 'undefined' ? ROOT_URL : '',
    surveyPath: typeof SURVEY_PATH !== 'undefined' ? SURVEY_PATH : '',
  };
};
