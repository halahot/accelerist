import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { authReducer } from './ducks/auth';
import {persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
  user: authReducer,
});

let sagaMiddleware = createSagaMiddleware();
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
  thunk: false,
})
const middleware = [...customizedMiddleware, sagaMiddleware];

const persistConfig = {
  key: 'root',
  storage,
};

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: middleware,
});

// sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store);

export default store;

