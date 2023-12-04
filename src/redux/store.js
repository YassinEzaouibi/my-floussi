import { configureStore, } from '@reduxjs/toolkit'
import calclulateurBudjetReducer, { calclulateurBudjetSlice } from './calculateurBudjetSlice'
const store = configureStore({
    reducer: {
        calculateurBudjet: calclulateurBudjetReducer

    },

})

export default store