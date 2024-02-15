import { configureStore } from '@reduxjs/toolkit';
import authenticatedUser from './slice/authenticatedUser';


const store = configureStore({
  reducer: {
    authenticatedUser:authenticatedUser
  }
});

export default store;
