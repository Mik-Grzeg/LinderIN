import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Offer';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
