import type { CitiesSchema, ForecastSchema, ModalAndInputSchema } from 'app/redux'

export interface StateSchema {
    modalAndInput: ModalAndInputSchema
    cities: CitiesSchema
    forecast: ForecastSchema
}
