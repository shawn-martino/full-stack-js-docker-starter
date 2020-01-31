import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
export default function initStore() {
  return configureStore({ reducer: rootReducer });
}
