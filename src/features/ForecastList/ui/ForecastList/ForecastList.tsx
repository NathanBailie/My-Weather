import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
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

    const content = forecastData.map((forecastObject: FinalObject) => {
        return (
            <div className={cls.ForecastList__item} key={forecastObject.id}>
                <ForecastCard
                    forecastObject={forecastObject}
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