export interface InitialObject {
    temp: number[]
    feelsLike: number[]
    tempMin: number[]
    tempMax: number[]
    pressure: number[]
    humidity: number[]
    visibility: number[]
    iconSrc: string[]
    weatherDescr: string[]
    date: string
}

export interface AveragedObject {
    temp: number
    feelsLike: number
    tempMin: number
    tempMax: number
    pressure: number
    humidity: number
    visibility: number
    iconSrc: string
    weatherDescr: string
    date: string
}

export interface FinalObject {
    id: string
    name: string
    country: string
    lat: number
    lon: number
    sunrise: string
    sunset: string
    currentDate: string
    data: AveragedObject[]
}
