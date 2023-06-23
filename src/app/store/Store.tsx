import { configureStore } from '@reduxjs/toolkit'
import alertReducer from "./AlertSlice";

export default configureStore({
  reducer: {
    alert: alertReducer
  }
})
