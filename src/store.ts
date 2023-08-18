import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './reducers/employeeReducer';
import baseApi from './service';

const store = configureStore({
  reducer: {
    employee: employeeReducer,
    [baseApi.reducerPath]: baseApi.reducer
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), baseApi.middleware]
});

export default store;
