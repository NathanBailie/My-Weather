export interface CitiesData {
    name: string
    local_names: Record<string, string>
    lat: number
    lon: number
    country: string
    state?: string
}

export interface structuredCitiesData {
    id: number
    city: string
    country: string
    state?: string
    lat: number
    lon: number
}

export function sortCities(array: CitiesData[]): structuredCitiesData[] {
    const structuredData = array.map((item, index) => {
        return {
            id: index,
            city: item.name,
            country: item.country,
            state: item.state,
            lat: item.lat,
            lon: item.lon
        }
    });

    return structuredData;
}
