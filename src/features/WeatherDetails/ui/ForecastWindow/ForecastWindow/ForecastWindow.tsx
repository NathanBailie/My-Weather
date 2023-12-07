import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { type FinalObject } from 'app/redux/model/types/TypesForDataSorting';
import { UpperPart } from '../UpperPart/UpperPart';
import { LowerPart } from '../LowerPart/LowerPart';
import cls from './ForecastWindow.module.scss';

interface ForecastWindowProps {
    className?: string
    forecast: FinalObject
}

export const ForecastWindow = memo((props: ForecastWindowProps) => {
    const { className, forecast } = props;
    const { t, i18n } = useTranslation('infoPanel');

    if (forecast === undefined) {
        return null;
    }

    return (
        <div className={classNames(cls.ForecastWindow, {}, [className])}>
            <UpperPart forecast={forecast} />
            <LowerPart forecast={forecast} />
        </div>
    );
});

ForecastWindow.displayName = 'ForecastWindow';
