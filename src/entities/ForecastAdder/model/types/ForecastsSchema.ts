import type { structuredCitiesData } from '../lib/sortCities';

export interface ForecastsSchema {
    modalIsOpen: boolean
    modalText: string | null
    cities: structuredCitiesData[]
    citiesLoadingStatus: 'idle' | 'loading' | 'succeeded' | 'failed'
    citiesLoadingError: boolean
    citiesLoadingErrorText: string | null
    data: any
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}
