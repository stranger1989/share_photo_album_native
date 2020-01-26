import React, { FC } from 'react';
import { Provider } from 'react-redux';

import store from './src/store/configureStore';

import AppNavigater from './src/navigaters/index';
import { amplifyConfig } from './src/constants/Auth';

amplifyConfig();

const App: FC = () => {
  return (
    <Provider store={store}>
      <AppNavigater />
    </Provider>
  );
}

export default App;