import { createSlice } from '@reduxjs/toolkit';
import { type ForecastSchema } from '../types/ForecastSchema';
import { fetchForecast } from '../services/fetchForecast';
import { sortData } from '../lib/sortData';
import { WEATHER_FORECAST_KEY } from 'shared/const/localstorage';
import { updateForecast } from '../services/updateForecast';

const initialState: ForecastSchema = {
    data: [],
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
        },
        getForecastDataFromLocalstore: (state, action) => {
            state.data = action.payload;
        },
        deleteForecast: (state, action) => {
            const newData = state.data.filter((forecast) => forecast.id !== action.payload);
            state.data = newData;
            localStorage.setItem(WEATHER_FORECAST_KEY, JSON.stringify(newData))
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
                state.data = [...state.data, sortData(action.payload)];
                localStorage.setItem(WEATHER_FORECAST_KEY, JSON.stringify(state.data));
            })
            .addCase(fetchForecast.rejected, (state, action) => {
                state.loadingStatus = 'failed';
                state.error = true;
                state.errorText = action.error.message ?? '';
            })

            .addCase(updateForecast.pending, (state) => {
                state.error = false;
            })
            .addCase(updateForecast.fulfilled, (state, action) => {
                state.error = false;
                const [newForecastData, prevId] = action.payload;
                const newforecast = sortData(newForecastData, prevId);

                const newData = state.data.map((forecast) => {
                    if (forecast.id !== newforecast.id) {
                        return forecast;
                    } else {
                        return newforecast;
                    }
                });

                state.data = newData;
                localStorage.setItem(WEATHER_FORECAST_KEY, JSON.stringify(state.data));
            })
            .addCase(updateForecast.rejected, (state, action) => {
                console.log(action.error.message);
            });
    }
});

export const { actions: forecastActions } = forecastSlice;
export const { reducer: forecastReducer } = forecastSlice;
