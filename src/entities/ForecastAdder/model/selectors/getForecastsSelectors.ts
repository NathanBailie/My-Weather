import { type StateSchema } from 'app/providers/StoreProvider';

export const getModalIsOpen = (state: StateSchema) => state.forecasts.modalIsOpen;

export const getInputValue = (state: StateSchema) => state.forecasts.inputValue;

export const getCitiesLoadingStatus = (state: StateSchema) => state.forecasts.citiesLoadingStatus;
export const getCitiesError = (state: StateSchema) => state.forecasts.citiesError;
export const getCitiesErrorText = (state: StateSchema) => state.forecasts.citiesErrorText;

export const getDataErrorText = (state: StateSchema) => state.forecasts.dataErrorText;
