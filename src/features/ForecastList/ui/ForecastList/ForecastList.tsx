import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import cls from './ForecastList.module.scss';
import { WEATHER_FORECAST_KEY } from 'shared/const/localstorage';
import { useDispatch, useSelector } from 'react-redux';
import { forecastActions, getForecastData } from 'app/redux';
import { isObjectEqual } from 'app/redux/model/lib/utils';
import { Icon } from 'shared/ui/Icon/Icon';

interface ForecastListProps {
    className?: string
}

export const ForecastList = memo((props: ForecastListProps) => {
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

    const content = forecastData.map((item) => {
        const { id, name, country, lat, lon, data, currentDate } = item;
        const { temp, feelsLike, iconSrc, weatherDescr } = data[0];

        return (
            <div className={cls.ForecastList__item} key={id}>
                <h2 className={cls.ForecastList__name}>{name}</h2>
                <Icon src={iconSrc} alt={weatherDescr} size='200px' />
                <h2 className={cls.ForecastList__temp}>{temp}&#176;</h2>
                <span className={cls.ForecastList__descr}>{weatherDescr}</span>
                <div className={cls.ForecastList__tempWrapper}>
                    <div className={cls.ForecastList__tempMin}>

                    </div>
                    <div className={cls.ForecastList__tempMax}>

                    </div>
                </div>
            </div>
        );
    })

    return (
        <div className={classNames(cls.ForecastList, {}, [className])}>
            {content}
        </div>
    );
});

ForecastList.displayName = 'ForecastList';
