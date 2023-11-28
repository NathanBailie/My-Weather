import { createSlice } from '@reduxjs/toolkit';
import type { ForecastsSchema } from '../types/ForecastsSchema';
import { fetchCities } from '../services/fetchCities';
import { sortCities } from '../lib/sortCities';

const initialState: ForecastsSchema = {
    cities: [],
    citiesLoadingStatus: 'idle',
    citiesLoadingError: false,
    citiesLoadingErrorText: null,
    data: [],
    status: 'idle',
    error: null
};

export const forecastsSlice = createSlice({
    name: 'forecasts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCities.pending, (state) => {
                state.citiesLoadingStatus = 'loading';
                state.citiesLoadingError = false;
            })
            .addCase(fetchCities.fulfilled, (state, action) => {
                state.citiesLoadingStatus = 'succeeded';
                state.citiesLoadingError = false;
                state.cities = sortCities(action.payload);
            })
            .addCase(fetchCities.rejected, (state, action) => {
                state.citiesLoadingStatus = 'failed';
                state.citiesLoadingError = true;
                state.citiesLoadingErrorText = action.error.message ?? null;
            });
    }
});

export const { actions: forecastsActions } = forecastsSlice;
export const { reducer: forecastsReducer } = forecastsSlice;
