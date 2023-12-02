import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { WEATHER_FORECAST_KEY } from 'shared/const/localstorage';
import { useDispatch, useSelector } from 'react-redux';
import { forecastActions, getForecastData } from 'app/redux';
import { isObjectEqual } from 'app/redux/model/lib/utils';
import { type FinalObject } from 'app/redux/model/types/TypesForDataSorting';
import cls from './ForecastList.module.scss';
import { ForecastCard } from '../ForecastCard/ForecastCard/ForecastCard';

interface ForecastListProps {
    className?: string
}

export const ForecastList = (props: ForecastListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const forecastData = useSelector(getForecastData);

    useEffect(() => {
        const storedForecastJSON = localStorage.getItem(WEATHER_FORECAST_KEY);
        const storedForecastData = storedForecastJSON && JSON.parse(storedForecastJSON);

        if (storedForecastData && !isObjectEqual(storedForecastData, forecastData)) {
            dispatch(forecastActions.getForecastDataFromLocalstore(storedForecastData));
        }
    }, [forecastData, dispatch]);

    if (forecastData === null || forecastData.length === 0) {
        return null;
    }

    const content = forecastData.map((item: FinalObject) => {
        const { id, name, country, lat, lon, data, currentDate, sunrise, sunset } = item;
        const { temp, feelsLike, iconSrc, weatherDescr } = data[0];

        return (
            <div className={cls.ForecastList__item} key={id}>
                <ForecastCard
                    id={id}
                    name={name}
                    descr={weatherDescr}
                    temp={temp}
                    feelsLike={feelsLike}
                    data={data}
                    lat={lat}
                    lon={lon}
                />
            </div>
        );
    })

    return (
        <div className={classNames(cls.ForecastList, {}, [className])}>
            {content}
        </div>
    );
};

ForecastList.displayName = 'ForecastList';
