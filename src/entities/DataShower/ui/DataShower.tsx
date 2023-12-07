import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './DataShower.module.scss';
import { useSelector } from 'react-redux';
import { getForecastCurrentDate } from 'app/redux';

interface DataShowerProps {
    className?: string
}

export const DataShower = memo((props: DataShowerProps) => {
    const { className } = props;
    const { t, i18n } = useTranslation();
    const date = useSelector(getForecastCurrentDate)
    const monthsEn = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const monthsRu = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ];
    const daysRu = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const daysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    if (date.length === 0) {
        return null;
    }
    const dayNamesArray = i18n.language === 'ru' ? daysRu : daysEn;
    const monthsArray = i18n.language === 'ru' ? monthsRu : monthsEn;
    const fullDate = new Date(date.split('-').join(', '));

    const todaysDate = fullDate.getDate();
    const dayName = dayNamesArray[fullDate.getDay()];
    const monthsName = monthsArray[fullDate.getMonth()]

    return (
        <div className={classNames(cls.DataShower, {}, [className])}>
            <span className={cls.DataShower__day}>{dayName}, {todaysDate}th, {monthsName}</span>
        </div>
    );
});

DataShower.displayName = 'DataShower';
