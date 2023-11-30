import { type ForecastData } from '../types/ForecastDataTypes';
import type { AveragedObject, FinalObject, InitialObject } from '../types/TypesForDataSorting';
import {
    findAverage,
    findMostFrequentStringInArray,
    getNearestFourDaysDate,
    kelvinToCelsius,
    normalizeString,
    timestampToTime
} from './utils';

export function sortData(data: ForecastData): FinalObject {
    const fourNearestDaysDate = getNearestFourDaysDate(); // [ '2023-12-29','2023-11-30','2023-12-1','2023-12-2','2023-12-3']

    let newData: InitialObject[] = [];

    for (let i = 0; i < fourNearestDaysDate.length; i++) {
        newData.push({
            temp: [],
            feels_like: [],
            temp_min: [],
            temp_max: [],
            pressure: [],
            humidity: [],
            visibility: [],
            descr: [],
            date: fourNearestDaysDate[i]
        });
    }

    for (let i = 0; i < newData.length; i++) {
        for (let j = 0; j < data.list.length; j++) {
            let newReg = new RegExp(newData[i].date);
            let inspect = newReg.test(data.list[j].dt_txt);

            if (inspect) {
                newData[i].temp.push(data.list[j].main.temp);
                newData[i].feels_like.push(data.list[j].main.feels_like);
                newData[i].temp_min.push(data.list[j].main.temp_min);
                newData[i].temp_max.push(data.list[j].main.temp_max);
                newData[i].pressure.push(data.list[j].main.pressure);
                newData[i].humidity.push(data.list[j].main.humidity);
                newData[i].visibility.push(data.list[j].visibility);
                newData[i].descr.push(data.list[j].weather[0].main);
            }
        }
    }
    let newAveragedData: AveragedObject[] = [];

    for (let elem of newData) {
        let newObject: AveragedObject = {};

        newObject.temp = Math.round(kelvinToCelsius(findAverage(elem.temp)));
        newObject.feels_like = Math.round(kelvinToCelsius(findAverage(elem.feels_like)));
        newObject.temp_min = Math.round(kelvinToCelsius(findAverage(elem.temp_min)));
        newObject.temp_max = Math.round(kelvinToCelsius(findAverage(elem.temp_max)));
        newObject.pressure = Math.round(findAverage(elem.pressure));
        newObject.humidity = Math.round(findAverage(elem.humidity));
        newObject.visibility = Math.round(findAverage(elem.temp));
        newObject.descr = normalizeString(findMostFrequentStringInArray(elem.descr));
        newObject.date = elem.date;

        newAveragedData.push(newObject);
    }

    const finalData: FinalObject = {
        name: data.city.name,
        country: data.city.country,
        lat: data.city.coord.lat,
        lon: data.city.coord.lon,
        sunrise: timestampToTime(data.city.sunrise),
        sunset: timestampToTime(data.city.sunset),
        date: newAveragedData[0].date,
        data: newAveragedData
    };

    return finalData;
}
