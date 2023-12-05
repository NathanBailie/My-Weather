import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { type DataObject } from 'app/redux/model/types/TypesForDataSorting';
import { type imageNumberType, imageObect } from 'shared/lib/imagesObject';
import cls from './NextDaysForecast.module.scss';

interface NextDaysForecastProps {
    className?: string
    data: DataObject[]
}

export const NextDaysForecast = memo((props: NextDaysForecastProps) => {
    const { className, data } = props;
    const { t, i18n } = useTranslation();
    const daysRu = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const daysEn = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const daysArray = i18n.language === 'ru' ? daysRu : daysEn;

    let resultObject = data.map((item) => {
        const { date, temp, iconNumber } = item;
        const newDate = date.split('-').join(', ');
        const dayOfWeek = new Date(newDate).getDay();
        const castedIconNumber = iconNumber as imageNumberType;

        return { day: daysArray[dayOfWeek], iconSrc: imageObect[castedIconNumber], temp }
    })

    let result = resultObject.map(({ day, iconSrc, temp }, index) => {
        return (
            <div className={cls.NextDaysForecast__item} key={index}>
                <h2>{day}</h2>
                <img src={iconSrc} alt="weather_icon" />
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
