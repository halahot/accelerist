import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { authReducer } from './ducks/auth';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { companyReducer } from './ducks/company';

const rootReducer = combineReducers({
  auth: authReducer,
  company: companyReducer
});

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
})

const persistConfig = {
  key: 'root',
  storage,
};

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: customizedMiddleware,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store);

export default store;

