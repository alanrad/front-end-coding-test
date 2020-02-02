import { createContext } from 'react';
// define state for app store
const { Provider, Consumer } = createContext({});
export const AppProvider = Provider;
export const AppConsumer = Consumer;
