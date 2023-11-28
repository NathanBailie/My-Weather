import type { structuredCitiesData } from '../lib/sortCities';

export interface ForecastsSchema {
    modalIsOpen: boolean
    inputValue: string
    cities: structuredCitiesData[] | []
    citiesLoadingStatus: 'idle' | 'loading' | 'succeeded' | 'failed'
    citiesError: boolean
    citiesErrorText: CitiesErrorsText
    data: any
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    dataError: boolean
    dataErrorText: string
}

export type CitiesErrorsText = 'EmptyField' | 'LongCityName' | 'WrongName' | 'WrongRequest' | '';
export type ErrorField = 'citiesError' | 'dataError';
export type ErrorTextField = 'citiesErrorText' | 'dataErrorText';
