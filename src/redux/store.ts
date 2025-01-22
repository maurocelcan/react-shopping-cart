import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import cartReducer from './cartSlice'; // Importa el reducer del carrito

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Registra el reducer del carrito
=======
import cartReducer from './slices/cartSlice'; 

export const store = configureStore({
  reducer: {
    cart: cartReducer, 
>>>>>>> b998472 (Update: UI improvements and reusable components)
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;