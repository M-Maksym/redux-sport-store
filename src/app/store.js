import { configureStore } from '@reduxjs/toolkit';
import slideReducer from '../features/slices/SliderSlice';
import productsReducer from '../features/slices/productsSlice';
import cartReducer from '../features/slices/cartSlice';

export const store = configureStore({
  reducer: {
    slider: slideReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});
