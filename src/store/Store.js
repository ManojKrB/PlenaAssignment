import {configureStore, combineReducers} from '@reduxjs/toolkit';
import ProductReducer from './ProductsSlice';
import CartReducer from './CartSlice';

import persistReducer from 'redux-persist/es/persistReducer';

import AsyncStorage from '@react-native-async-storage/async-storage';

let persistConfig = {
  key: 'plena',
  storage: AsyncStorage,
};

let rootReducer = combineReducers({
  product: ProductReducer,
  cart: CartReducer,
});

let persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
