import { configureStore, } from '@reduxjs/toolkit'
import calclulateurBudjetReducer, { calclulateurBudjetSlice } from './calculateurBudjetSlice'
import { persistReducer, persistStore } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, calclulateurBudjetReducer)

const store = configureStore({
    reducer: {
        calculateurBudjet: persistedReducer,

    },
    middleware: [thunk]


})
export const persistor = persistStore(store)
export default store