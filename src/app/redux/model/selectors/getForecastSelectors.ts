import { type StateSchema } from 'app/providers/StoreProvider';

export const getForecastData = (state: StateSchema) => state.forecast.data;
export const getForecastLoadingStatus = (state: StateSchema) => state.forecast.loadingStatus;
export const getForecastError = (state: StateSchema) => state.forecast.error;
export const getForecastErrorText = (state: StateSchema) => state.forecast.errorText;
export const getForecastCurrentDate = (state: StateSchema) => state.forecast.currentDate;
