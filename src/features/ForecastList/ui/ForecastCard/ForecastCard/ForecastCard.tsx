import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ForecastCard.module.scss';
import { type FinalObject } from 'app/redux/model/types/TypesForDataSorting';
import { Buttons } from '../Buttons/Buttons';
import { InfoPanel } from '../InfoPanel/InfoPanel/InfoPanel';

interface ForecastCardProps {
    className?: string
    forecastObject: FinalObject
}

export const ForecastCard = memo((props: ForecastCardProps) => {
    const {
        className,
        forecastObject

    } = props;
    const { t } = useTranslation();
    const { id, name, lat, lon, data } = forecastObject;
    const todayWeather = forecastObject.data[0];
    const { temp, weatherDescr } = todayWeather;

    return (
        <div className={classNames(cls.ForecastCard, {}, [className])}>
            <h2 className={cls.ForecastCard__name}>{name}</h2>
            <h2 className={cls.ForecastCard__temp}>{temp}&#176;</h2>
            <span className={cls.ForecastCard__descr}>{weatherDescr}</span>
            <Buttons id={id} lat={lat} lon={lon} />
            <InfoPanel data={data} />
        </div>
    );
});

ForecastCard.displayName = 'ForecastCard';
