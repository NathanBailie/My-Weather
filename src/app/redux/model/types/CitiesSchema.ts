import { type structuredCitiesData } from '../lib/sortCities';
import { type LoadingStatus } from './LoadingStatus';

export interface CitiesSchema {
    cities: structuredCitiesData[] | []
    citiesLoadingStatus: LoadingStatus
    citiesError: boolean
    citiesErrorText: CitiesErrorText
}

export type CitiesErrorText = 'EmptyField' | 'LongCityName' | 'WrongName' | 'WrongRequest' | '';
