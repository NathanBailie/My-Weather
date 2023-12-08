import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { type FinalObject } from 'app/redux/model/types/TypesForDataSorting';
import { Buttons } from '../Buttons/Buttons';
import { InfoPanel } from '../InfoPanel/InfoPanel/InfoPanel';
import {
    type WeatherDescriptionKey,
    weatherDescriptionsEn,
    weatherDescriptionsRu
} from 'shared/lib/DescriptionDictionary';
import cls from './ForecastCard.module.scss';

interface ForecastCardProps {
    className?: string
    forecastObject: FinalObject
}

export const ForecastCard = memo((props: ForecastCardProps) => {
    const {
        className,
        forecastObject

    } = props;
    const { t, i18n } = useTranslation();
    const { id, name, lat, lon, data } = forecastObject;
    const todayWeather = forecastObject.data[0];
    const { temp, weatherDescr } = todayWeather;

    const dictionary = i18n.language === 'ru' ? weatherDescriptionsRu : weatherDescriptionsEn;
    const castedWeatherDescr = weatherDescr as WeatherDescriptionKey;

    return (
        <div className={classNames(cls.ForecastCard, {}, [className])}>
            <h2 className={cls.ForecastCard__name}>{name}</h2>
            <h2 className={cls.ForecastCard__temp}>{temp}&#176;</h2>
            <span className={cls.ForecastCard__descr}>{dictionary[castedWeatherDescr]}</span>
            <Buttons id={id} lat={lat} lon={lon} name={name} />
            <InfoPanel data={data} />
        </div>
    );
});

ForecastCard.displayName = 'ForecastCard';
