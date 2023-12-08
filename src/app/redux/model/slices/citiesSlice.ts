import { createSlice } from '@reduxjs/toolkit';
import { type CitiesSchema } from '../types/CitiesSchema';
import { fetchCities } from '../services/fetchCities';
import { sortCities } from '../lib/sortCities';
import { fetchForecast } from '../services/fetchForecast';

const initialState: CitiesSchema = {
    cities: [],
    citiesLoadingStatus: 'idle',
    citiesError: false,
    citiesErrorText: ''
};

export const citiesSlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {
        changeError: (state, action) => {
            state.citiesError = action.payload;
        },
        changeErrorsText: (state, action) => {
            state.citiesErrorText = action.payload;
        },
        resetCititesData: (state) => {
            state.cities = [];
            state.citiesError = false;
            state.citiesErrorText = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCities.pending, (state) => {
                state.citiesLoadingStatus = 'loading';
                state.citiesError = false;
            })
            .addCase(fetchCities.fulfilled, (state, action) => {
                state.citiesLoadingStatus = 'succeeded';
                state.citiesError = false;
                state.cities = sortCities(action.payload);

                if (state.cities.length === 0) {
                    state.citiesError = true;
                    state.citiesErrorText = 'WrongName';
                }
            })
            .addCase(fetchCities.rejected, (state) => {
                state.citiesLoadingStatus = 'failed';
                state.citiesError = true;
                state.citiesErrorText = 'WrongRequest';
            })

            .addCase(fetchForecast.fulfilled, (state, action) => {
                state.cities = [];
                state.citiesLoadingStatus = 'idle';
                state.citiesError = false;
                state.citiesErrorText = '';
            })
    }
});

export const { actions: citiesActions } = citiesSlice;
export const { reducer: citiesReducer } = citiesSlice;
