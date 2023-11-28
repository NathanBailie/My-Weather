import type { structuredCitiesData } from '../lib/sortCities';

export interface ForecastsSchema {
    modalIsOpen: boolean
    modalText: string | null
    inputValue: string
    cities: structuredCitiesData[]
    citiesLoadingStatus: 'idle' | 'loading' | 'succeeded' | 'failed'
    citiesLoadingError: boolean
    citiesLoadingErrorText: string | null
    data: any
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    dataLoadingError: boolean
    dataLoadingErrorText: string | null
}

export type ErrorField = 'citiesLoadingError' | 'dataLoadingError';
export type ErrorTextField = 'citiesLoadingErrorText' | 'dataLoadingErrorText';
