import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import cls from './ForecastList.module.scss';
import { WEATHER_FORECAST_KEY } from 'shared/const/localstorage';
import { useDispatch, useSelector } from 'react-redux';
import { forecastActions, getForecastData } from 'app/redux';

interface ForecastListProps {
    className?: string
}

export const ForecastList = memo((props: ForecastListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const forecastData = useSelector(getForecastData);

    useEffect(() => {
        dispatch(forecastActions.getForecastDataFromLocalstore())
    })

    if (forecastData.length === 0 || forecastData === null) {
        return null;
    }

    const content = forecastData.map((item) => {
        const { id, name, country, lat, lon, data, date } = item;

        return (
            <div className={cls.ForecastList__item} key={id}>

            </div>
        )
    })

    return (
        <div className={classNames(cls.ForecastList, {}, [className])}>
            ForecastList
        </div>
    );
});

ForecastList.displayName = 'ForecastList';
