import { configureStore, } from '@reduxjs/toolkit'
import calclulateurBudjetReducer from './calculateurBudjetSlice'
import smPatrimoineReducer from './smPatrimoineSlice'
import questionnaireReducer from './questionnaireSlice'
import tarifsReducer from './tarifsSlice'
import { persistReducer, persistStore } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
}
const persistedCbudgetReducer = persistReducer(persistConfig, calclulateurBudjetReducer)
const persistedSmPatrimoineReducer = persistReducer(persistConfig, smPatrimoineReducer)
const persistedTarifsReducer = persistReducer(persistConfig, tarifsReducer)

const store = configureStore({
    reducer: {
        calculateurBudjet: persistedCbudgetReducer,
        smPatrioine: persistedSmPatrimoineReducer,
        questionnaire: questionnaireReducer,
        tarifs: persistedTarifsReducer


    },
    middleware: [thunk]


})
export const persistor = persistStore(store)
export default store