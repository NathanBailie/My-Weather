import { type StateSchema } from 'app/providers/StoreProvider';

export const getCities = (state: StateSchema) => state.cities.cities;
export const getCitiesLoadingStatus = (state: StateSchema) => state.cities.citiesLoadingStatus;
export const getCitiesError = (state: StateSchema) => state.cities.citiesError;
export const getCitiesErrorText = (state: StateSchema) => state.cities.citiesErrorText;
