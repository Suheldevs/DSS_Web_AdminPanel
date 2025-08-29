// store/index.js or store.js

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage
import { authApi } from '../api/auth.api.js';
import { blogApi } from '../api/blog.api.js';
import { productApi } from '../api/product.api.js';
import { galleryApi } from '../api/gallery.api.js';
import { teamApi } from '../api/team.api.js';
import { inquiryApi } from '../api/inquiry.api.js';
import { visitorApi } from '../api/visitor.api.js';
import { subscriberApi } from '../api/subscriber.api.js';
import { jobApi } from '../api/job.api.js';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], 
};

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [blogApi.reducerPath]: blogApi.reducer,
  [productApi.reducerPath]: productApi.reducer,
  [galleryApi.reducerPath]: galleryApi.reducer,
  [teamApi.reducerPath]: teamApi.reducer,
  [inquiryApi.reducerPath]: inquiryApi.reducer,
  [visitorApi.reducerPath]: visitorApi.reducer,
  [subscriberApi.reducerPath]: subscriberApi.reducer,
  [jobApi.reducerPath]: jobApi.reducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }).concat(authApi.middleware, blogApi.middleware, productApi.middleware, galleryApi.middleware, teamApi.middleware ,inquiryApi.middleware, visitorApi.middleware, subscriberApi.middleware, jobApi.middleware),
  devTools: import.meta.env.VITE_MODE !== 'Pro',
});

export const persistor = persistStore(store);
