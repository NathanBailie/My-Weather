import { type StateSchema } from 'app/providers/StoreProvider';

export const getModalIsOpen = (state: StateSchema) => state.forecasts.modalIsOpen;
export const getModalText = (state: StateSchema) => state.forecasts.modalText;
export const getInputValue = (state: StateSchema) => state.forecasts.inputValue;
export const getCitiesLoadingStatus = (state: StateSchema) => state.forecasts.citiesLoadingStatus;
