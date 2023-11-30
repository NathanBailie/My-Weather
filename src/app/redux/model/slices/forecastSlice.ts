import { createSlice } from '@reduxjs/toolkit';
import { type ForecastSchema } from '../types/ForecastSchema';
import { fetchForecast } from '../services/fetchForecast';
import { sortData } from '../lib/sortData';

const initialState: ForecastSchema = {
    data: {},
    loadingStatus: 'idle',
    error: false,
    errorText: ''
};

export const forecastSlice = createSlice({
    name: 'forecast',
    initialState,
    reducers: {
        changeError: (state, action) => {
            state.error = action.payload;
        },
        changeErrorsText: (state, action) => {
            state.errorText = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchForecast.pending, (state) => {
                state.loadingStatus = 'loading';
                state.error = false;
            })
            .addCase(fetchForecast.fulfilled, (state, action) => {
                state.loadingStatus = 'succeeded';
                state.error = false;
                state.data = sortData(action.payload);
            })
            .addCase(fetchForecast.rejected, (state, action) => {
                state.loadingStatus = 'failed';
                state.error = true;
                state.errorText = action.error.message ?? '';
            });
    }
});

export const { actions: forecastActions } = forecastSlice;
export const { reducer: forecastReducer } = forecastSlice;
