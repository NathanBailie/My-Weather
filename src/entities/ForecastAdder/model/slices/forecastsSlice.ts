import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { CitiesErrorsText, ErrorField, ErrorTextField, ForecastsSchema } from '../types/ForecastsSchema';
import { fetchCities } from '../services/fetchCities';
import { sortCities } from '../lib/sortCities';

const initialState: ForecastsSchema = {
    modalIsOpen: false,

    inputValue: '',

    cities: [],
    citiesLoadingStatus: 'idle',
    citiesError: false,
    citiesErrorText: '',

    data: [],
    status: 'idle',
    dataError: false,
    dataErrorText: ''
};

export const forecastsSlice = createSlice({
    name: 'forecasts',
    initialState,
    reducers: {
        openModal: (state) => {
            state.modalIsOpen = true;
        },
        closeModal: (state) => {
            state.modalIsOpen = false;
            state.inputValue = '';
            state.cities = [];
            state.citiesError = false;
            state.citiesErrorText = '';
            state.dataError = false;
            state.dataError = false;
        },
        changeInputValue: (state, action) => {
            state.inputValue = action.payload;
        },
        changeErrorsCondition: (state, action: PayloadAction<{ fieldName: ErrorField, condition: boolean }>) => {
            const { fieldName, condition } = action.payload;
            state[`${fieldName}`] = condition;
        },
        changeErrorsText: (state, action: PayloadAction<{ fieldName: ErrorTextField, text: CitiesErrorsText }>) => {
            const { fieldName, text } = action.payload;
            state[`${fieldName}`] = text;
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
            .addCase(fetchCities.rejected, (state, action) => {
                state.citiesLoadingStatus = 'failed';
                state.citiesError = true;
                state.citiesErrorText = 'WrongRequest';
            });
    }
});

export const { actions: forecastsActions } = forecastsSlice;
export const { reducer: forecastsReducer } = forecastsSlice;
