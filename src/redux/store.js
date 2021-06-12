import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  contactsReducer,
  loadingReducer,
  filterReducer,
  errorReducer,
} from './contacts/contacts-reducer';
import { user, isAuthenticated, token, error } from './auth/auth-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootContactsReducer = combineReducers({
  items: contactsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
});
const rootAuthReducer = combineReducers({
  user,
  isAuthenticated,
  token,
  error,
});
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, rootAuthReducer),
  contacts: rootContactsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };
