import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forecastActions, getForecastData } from 'app/redux';
import { isObjectEqual } from 'app/redux/model/lib/utils';
import { WEATHER_FORECAST_KEY } from 'shared/const/localstorage';
import { ForecastWindow } from '../ForecastWindow/ForecastWindow/ForecastWindow';
import cls from './WeatherDetails.module.scss';

interface WeatherDetailsProps {
    className?: string
    cityName: string
}

export const WeatherDetails = memo((props: WeatherDetailsProps) => {
    const { className, cityName } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const forecastsData = useSelector(getForecastData);
    const needForecast = forecastsData.filter((city) => city.name === cityName)[0];

    useEffect(() => {
        const storedForecastJSON = localStorage.getItem(WEATHER_FORECAST_KEY);
        const storedForecastData = storedForecastJSON && JSON.parse(storedForecastJSON);

        if (storedForecastData && !isObjectEqual(storedForecastData, forecastsData)) {
            dispatch(forecastActions.getForecastDataFromLocalstore(storedForecastData));
        }
    }, [forecastsData, dispatch]);

    return (
        <div className={classNames(cls.WeatherDetails, {}, [className])}>
            <ForecastWindow forecast={needForecast} />
        </div>
    );
});

WeatherDetails.displayName = 'WeatherDetails';
