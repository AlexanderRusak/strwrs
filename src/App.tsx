import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { AppRouter } from './AppRouter';
import { store } from './store/store';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
