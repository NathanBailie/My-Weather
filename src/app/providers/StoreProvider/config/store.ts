import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: IS_DEV
});

export type AppDispatch = typeof store.dispatch;
