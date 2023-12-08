import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getForecastCurrentDate } from 'app/redux';
import { daysFullNameEn, daysFullNameRu, monthsEn, monthsRu } from 'shared/lib/DataArrays';
import cls from './DataShower.module.scss';

interface DataShowerProps {
    className?: string
}

export const DataShower = memo((props: DataShowerProps) => {
    const { className } = props;
    const { t, i18n } = useTranslation();
    const date = useSelector(getForecastCurrentDate)

    if (date.length === 0) {
        return null;
    }

    const dayNamesArray = i18n.language === 'ru' ? daysFullNameRu : daysFullNameEn;
    const monthsArray = i18n.language === 'ru' ? monthsRu : monthsEn;
    const fullDate = new Date(date.split('-').join(', '));

    const todaysDate = fullDate.getDate();
    const dayName = dayNamesArray[fullDate.getDay()];
    const monthsName = monthsArray[fullDate.getMonth()]

    const postfix = i18n.language === 'ru' ? null : 'th';

    return (
        <span className={classNames(cls.DataShower, {}, [className])}>
            {dayName}, {todaysDate}{postfix}, {monthsName}
        </span>
    );
});

DataShower.displayName = 'DataShower';
