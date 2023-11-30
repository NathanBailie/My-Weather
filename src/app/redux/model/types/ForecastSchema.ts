import { type LoadingStatus } from './LoadingStatus';
import { type FinalObject } from './TypesForDataSorting';

export interface ForecastSchema {
    data: FinalObject
    loadingStatus: LoadingStatus
    error: boolean
    errorText: string
}
