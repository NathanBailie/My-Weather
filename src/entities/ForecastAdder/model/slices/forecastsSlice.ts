import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { ErrorField, ErrorTextField, ForecastsSchema } from '../types/ForecastsSchema';
import { fetchCities } from '../services/fetchCities';
import { sortCities } from '../lib/sortCities';

const initialState: ForecastsSchema = {
    modalIsOpen: false,
    modalText: null,

    inputValue: '',

    cities: [],
    citiesLoadingStatus: 'idle',
    citiesLoadingError: false,
    citiesLoadingErrorText: null,

    data: [],
    status: 'idle',
    dataLoadingError: false,
    dataLoadingErrorText: null
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
        },
        changeInputValue: (state, action) => {
            state.inputValue = action.payload;
        },
        changeErrorsCondition: (state, action: PayloadAction<{ fieldName: ErrorField, condition: boolean }>) => {
            const { fieldName, condition } = action.payload;
            state[`${fieldName}`] = condition;
        },
        changeErrorsText: (state, action: PayloadAction<{ fieldName: ErrorTextField, text: string }>) => {
            const { fieldName, text } = action.payload;
            state[`${fieldName}`] = text;
        }
    },
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

                if (state.cities.length === 0) {
                    state.citiesLoadingError = true;
                    state.citiesLoadingErrorText = 'InspectYourRequest';
                }
            })
            .addCase(fetchCities.rejected, (state, action) => {
                state.citiesLoadingStatus = 'failed';
                state.citiesLoadingError = true;
                state.citiesLoadingErrorText = 'MistakeRetryYourRequest';
            });
    }
});

export const { actions: forecastsActions } = forecastsSlice;
export const { reducer: forecastsReducer } = forecastsSlice;
