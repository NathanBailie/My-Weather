import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { citiesReducer, modalAndInputReducer } from 'app/redux';

const rootReducer = combineReducers({
    modalAndInput: modalAndInputReducer,
    cities: citiesReducer
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: IS_DEV
});

export type AppDispatch = typeof store.dispatch;
