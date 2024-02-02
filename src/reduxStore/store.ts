import {configureStore, combineReducers} from '@reduxjs/toolkit';
import movieSlice from './slices/movieSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import sagas from './Sagas/index';

const middleware: any = [];
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);
const config = {
  key: 'root',
  storage: AsyncStorage,
  debug: true,
};
const RootReducer = combineReducers({
  movieSlice,
});
if (__DEV__) {
  middleware.push(
    createLogger({
      collapsed: true,
      duration: true,
      timestamp: true,
      colors: {
        title: () => '#F2789F',
        prevState: () => '#de6f0d',
        action: () => '#CAB8FF',
        nextState: () => '#1a9134',
      },
    }),
  );
}
const persistedReducer = persistReducer(config, RootReducer);
const enhancers = [...middleware];
const persistConfig: any = {...enhancers};
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(...enhancers),
});
const persistor = persistStore(store, persistConfig, () => {});
sagaMiddleware.run(sagas);

export {store, persistor};
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof RootReducer>;
