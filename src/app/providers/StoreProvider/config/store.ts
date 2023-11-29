import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { citiesReducer, forecastReducer, modalAndInputReducer } from 'app/redux';

const rootReducer = combineReducers({
    modalAndInput: modalAndInputReducer,
    cities: citiesReducer,
    forecast: forecastReducer
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: IS_DEV
});

export type AppDispatch = typeof store.dispatch;
