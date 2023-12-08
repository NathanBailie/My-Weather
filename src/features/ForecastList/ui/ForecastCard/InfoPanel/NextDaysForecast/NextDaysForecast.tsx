import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { type DataObject } from 'app/redux/model/types/TypesForDataSorting';
import { type imageNumberType, imageObect } from 'shared/lib/imagesObject';
import cls from './NextDaysForecast.module.scss';
import { dayShortRu, daysShortEn } from 'shared/lib/DataArrays';
import { Icon } from 'shared/ui/Icon/Icon';

interface NextDaysForecastProps {
    className?: string
    data: DataObject[]
}

export const NextDaysForecast = memo((props: NextDaysForecastProps) => {
    const { className, data } = props;
    const { t, i18n } = useTranslation();
    const daysArray = i18n.language === 'ru' ? dayShortRu : daysShortEn;

    const weatherObject = data.map((item) => {
        const { date, temp, iconNumber } = item;
        const newDate = date.split('-').join(', ');
        const dayOfWeek = new Date(newDate).getDay();
        const castedIconNumber = iconNumber as imageNumberType;

        return { day: daysArray[dayOfWeek], iconSrc: imageObect[castedIconNumber], temp }
    })

    const result = weatherObject.map(({ day, iconSrc, temp }, index) => {
        return (
            <div className={cls.NextDaysForecast__item} key={index}>
                <h2>{day}</h2>
                <Icon src={iconSrc} alt="weather_icon" size='35px' />
                <span>{temp}</span>
            </div>
        )
    })

    return (
        <div className={classNames(cls.NextDaysForecast, {}, [className])}>
            {result}
        </div>
    );
});

NextDaysForecast.displayName = 'NextDaysForecast';
