import { type LoadingStatus } from './LoadingStatus';

export interface ForecastSchema {
    data: any
    loadingStatus: LoadingStatus
    error: boolean
    errorText: string
}
