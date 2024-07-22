import { configureStore } from '@reduxjs/toolkit'

import titleReducer from './reducers/title'
export default configureStore({
    reducer: {
        title: titleReducer,
    },
  })