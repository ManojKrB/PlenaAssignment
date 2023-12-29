import {configureStore} from '@reduxjs/toolkit';
import ProductReducer from './ProductsSlice';
import CartReducer from './CartSlice';

export const store = configureStore({
  reducer: {
    product: ProductReducer,
    cart: CartReducer,
  },
});
