import { createContext } from 'react';
// interfaces
import { IsurveyResultAction, IsurveyResultsState } from 'app/interfaces';
import { surveysInitialState } from 'app/reducers';

interface IstateContext {
  state: IsurveyResultsState;
  dispatch: (action: IsurveyResultAction) => void;
}

// define state for app store
export const stateContext = createContext<IstateContext>({
  state: surveysInitialState,
  dispatch: () => {
    // action dispatcher
  },
});

const { Provider, Consumer } = stateContext;
export const AppProvider = Provider;
export const AppConsumer = Consumer;
