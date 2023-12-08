import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { type FinalObject } from 'app/redux/model/types/TypesForDataSorting';
import {
    type WeatherDescriptionKey,
    weatherDescriptionsEn,
    weatherDescriptionsRu
} from 'shared/lib/DescriptionDictionary';
import { type imageNumberType, imageObect } from 'shared/lib/imagesObject';
import { Icon } from 'shared/ui/Icon/Icon';
import { daysFullNameEn, daysFullNameRu } from 'shared/lib/DataArrays';
import cls from './LowerPart.module.scss';

interface LowerPartProps {
    className?: string
    forecast: FinalObject
}

export const LowerPart = memo((props: LowerPartProps) => {
    const { className, forecast } = props;
    const { t, i18n } = useTranslation('infoPanel');
    const dictionary = i18n.language === 'ru' ? weatherDescriptionsRu : weatherDescriptionsEn;

    const content = forecast.data.map((day, index) => {
        const { date, temp, feelsLike, weatherDescr, iconNumber } = day;
        const castedWeatherDescr = weatherDescr as WeatherDescriptionKey;
        const castedIconNumber = iconNumber as imageNumberType;
        const dayNumber = new Date(date.split('-').join(', ')).getDay();

        const dayNamesArray = i18n.language === 'ru' ? daysFullNameRu : daysFullNameEn;
        const dayName = dayNamesArray[dayNumber];

        return (
            <div className={cls.LowerPart__item} key={index}>
                <h2 className={cls.LowerPart__name}>{dayName}</h2>
                <Icon src={imageObect[castedIconNumber]} alt="weather_icon" size='80px' />
                <div className={cls.LowerPart__tempWrapper}>
                    <h2>{temp} &#176;</h2>
                    <span>{t('Feels like')} {feelsLike} &#176;</span>
                </div>
                <span className={cls.LowerPart__descr}>{dictionary[castedWeatherDescr]}</span>
            </div>
        )
    })

    return (
        <div className={classNames(cls.LowerPart, {}, [className])}>
            {content}
        </div>
    );
});

LowerPart.displayName = 'LowerPart';
