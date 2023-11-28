import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { forecastsReducer } from 'entities/ForecastAdder';

const rootReducer = combineReducers({
    forecasts: forecastsReducer
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: IS_DEV
});

export type AppDispatch = typeof store.dispatch;
