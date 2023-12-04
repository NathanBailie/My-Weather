import { type ForecastData } from '../types/ForecastDataTypes';
import type { DataObject, FinalObject, InitialObject } from '../types/TypesForDataSorting';
import {
    findAverage,
    findMostFrequentStringInArray,
    getNearestFourDaysDate,
    kelvinToCelsius,
    normalizeString,
    timestampToTime
} from './utils';
import uuid from 'react-uuid';

export function sortData(data: ForecastData, prevIndex?: string): FinalObject {
    const fourNearestDaysDate = getNearestFourDaysDate(); // [ '2023-12-29','2023-11-30','2023-12-1','2023-12-2','2023-12-3']
    let iconBaseLink = 'https://openweathermap.org/img/wn/';
    let newData: InitialObject[] = [];

    for (let i = 0; i < fourNearestDaysDate.length; i++) {
        newData.push({
            temp: [],
            feelsLike: [],
            tempMin: [],
            tempMax: [],
            pressure: [],
            humidity: [],
            visibility: [],
            iconSrc: [],
            weatherDescr: [],
            date: fourNearestDaysDate[i]
        });
        for (let j = 0; j < data.list.length; j++) {
            let newReg = new RegExp(newData[i].date);
            let inspect = newReg.test(data.list[j].dt_txt);

            if (inspect) {
                newData[i].temp.push(data.list[j].main.temp);
                newData[i].feelsLike.push(data.list[j].main.feels_like);
                newData[i].tempMin.push(data.list[j].main.temp_min);
                newData[i].tempMax.push(data.list[j].main.temp_max);
                newData[i].pressure.push(data.list[j].main.pressure);
                newData[i].humidity.push(data.list[j].main.humidity);
                newData[i].visibility.push(data.list[j].visibility);
                newData[i].iconSrc.push(`${iconBaseLink}${data.list[j].weather[0].icon}@2x.png`);
                newData[i].weatherDescr.push(data.list[j].weather[0].description);
            }
        }
    }

    let sortedDataObject: DataObject[] = [];

    for (let elem of newData) {
        let newObject = {
            temp: Math.round(kelvinToCelsius(findAverage(elem.temp))),
            feelsLike: Math.round(kelvinToCelsius(findAverage(elem.feelsLike))),
            tempMin: Math.round(kelvinToCelsius(findAverage(elem.tempMin))),
            tempMax: Math.round(kelvinToCelsius(findAverage(elem.tempMax))),
            pressure: Math.round(findAverage(elem.pressure)),
            humidity: Math.round(findAverage(elem.humidity)),
            visibility: Math.round(findAverage(elem.temp)),
            iconSrc: normalizeString(findMostFrequentStringInArray(elem.iconSrc)),
            weatherDescr: findMostFrequentStringInArray(elem.weatherDescr),
            date: elem.date
        };

        sortedDataObject.push(newObject)
    }

    const finalData: FinalObject = {
        id: prevIndex ?? uuid(),
        name: data.city.name,
        country: data.city.country,
        lat: data.city.coord.lat,
        lon: data.city.coord.lon,
        sunrise: timestampToTime(data.city.sunrise),
        sunset: timestampToTime(data.city.sunset),
        currentDate: sortedDataObject[0].date,
        data: sortedDataObject
    };

    return finalData;
}
