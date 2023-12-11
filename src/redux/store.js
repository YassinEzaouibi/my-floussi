import { configureStore, } from '@reduxjs/toolkit'
import calclulateurBudjetReducer from './calculateurBudjetSlice'
import smPatrimoineReducer from './smPatrimoineSlice'
import { persistReducer, persistStore } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
}
const persistedCbudgetReducer = persistReducer(persistConfig, calclulateurBudjetReducer)
const persistedSmPatrimoineReducer = persistReducer(persistConfig, smPatrimoineReducer)

const store = configureStore({
    reducer: {
        calculateurBudjet: persistedCbudgetReducer,
        smPatrioine: persistedSmPatrimoineReducer

    },
    middleware: [thunk]


})
export const persistor = persistStore(store)
export default store