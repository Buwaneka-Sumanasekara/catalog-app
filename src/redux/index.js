import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import favoritesReducer from './favorites/reducer';

const rootReducer = {
  favorites: favoritesReducer,
};

const middleWares = [thunk];

if (__DEV__) {
  middleWares.push(logger);
}

const store = configureStore({
  reducer: rootReducer,
  middleWares: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleWares),
});

export default store;
