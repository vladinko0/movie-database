import React, {FC, useEffect} from 'react';
import Navigation from './src/navigation';
import Theme from './src/context/Theme';
import {Provider} from 'react-redux';
import {store, persistor} from './src/reduxStore';
import {PersistGate} from 'redux-persist/integration/react';
// @ts-ignore
import NativeDevSettings from 'react-native/Libraries/NativeModules/specs/NativeDevSettings';

const App: FC = () => {
  useEffect(() => NativeDevSettings.setIsDebuggingRemotely(true), []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Theme>
          <Navigation />
        </Theme>
      </PersistGate>
    </Provider>
  );
};

export default App;
