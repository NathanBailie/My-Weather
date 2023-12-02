import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ForecastCard.module.scss';
import { type AveragedObject } from 'app/redux/model/types/TypesForDataSorting';

interface ForecastCardProps {
    className?: string
    name: string
    descr: string
    temp: number
    feelsLike: number
    data: AveragedObject[]
}

export const ForecastCard = memo((props: ForecastCardProps) => {
    const {
        className,
        name,
        descr,
        temp,
        data
    } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ForecastCard, {}, [className])}>
            <h2 className={cls.ForecastCard__name}>{name}</h2>
            <h2 className={cls.ForecastCard__temp}>{temp}&#176;</h2>
            <span className={cls.ForecastCard__descr}>{descr}</span>
        </div>
    );
});

ForecastCard.displayName = 'ForecastCard';
