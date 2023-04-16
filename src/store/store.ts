import { combineReducers, configureStore } from '@reduxjs/toolkit';
import peopleReducers from './reducers/peopleReducers';

const rootReducer = combineReducers({
  people: peopleReducers,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
