export interface InitialObject {
    temp: number[]
    feels_like: number[]
    temp_min: number[]
    temp_max: number[]
    pressure: number[]
    humidity: number[]
    visibility: number[]
    descr: string[]
    date: string
}

export interface AveragedObject {
    temp?: number
    feels_like?: number
    temp_min?: number
    temp_max?: number
    pressure?: number
    humidity?: number
    visibility?: number
    descr?: string
    date?: string
}

export interface FinalObject {
    id?: string
    name?: string
    country?: string
    lat?: number
    lon?: number
    sunrise?: string
    sunset?: string
    date?: string
    data?: AveragedObject[]
}
