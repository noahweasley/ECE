import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import resetReducer from '../features/reset/resetSlice'
import emailReducer from '../features/reset/emailRedux.js'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    reset: resetReducer,
    email: emailReducer
  },
});
