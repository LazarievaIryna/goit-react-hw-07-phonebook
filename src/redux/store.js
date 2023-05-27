import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import {
 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { contactsSlice } from './contactsSlice';
const persistConfig = {
    key: 'contacts',
    storage,
  };
  
  export const myContactsReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
  );
  

export const store = configureStore({
  reducer: {
    contacts: myContactsReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
  

 
})
;
export const persistor = persistStore(store);