import { configureStore } from '@reduxjs/toolkit';
import slideReducer from '../features/slices/SliderSlice';
import productsReducer from '../features/slices/productsSlice';
import cartReducer from '../features/slices/cartSlice';
import authReducer from '../features/slices/authSlice';
import wishReducer from '../features/slices/wishSlice';

export const store = configureStore({
  reducer: {
    slider: slideReducer,
    products: productsReducer,
    cart: cartReducer,
    user: authReducer,
    wish: wishReducer,
  },
});
