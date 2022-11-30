import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './features/authenticationSlice'
import commonReducer from './features/commonSlice'
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist'

const reducers = combineReducers({
    auth: authReducer,
    commons: commonReducer
})

const persistConfig = {
    key: "root",
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})