import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './NextDaysForecast.module.scss';
import { type DataObject } from 'app/redux/model/types/TypesForDataSorting';

interface NextDaysForecastProps {
    className?: string
    data: DataObject[]
}

export const NextDaysForecast = memo((props: NextDaysForecastProps) => {
    const { className, data } = props;
    const { t } = useTranslation();

    let resultObject = data.map((item) => {
        const { date, temp } = item;
        const resultDate = Number(date.split('-').splice(-1, 1).join(''));
        return { date: resultDate, temp }
    })

    let result = resultObject.map(({ date, temp }, index) => {
        return (
            <div className={cls.NextDaysForecast__item} key={index}>
                <h2>{date}</h2>
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
