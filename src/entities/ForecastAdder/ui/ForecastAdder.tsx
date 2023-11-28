import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cityDay from 'shared/assets/icons/city_day.png';
import cityNight from 'shared/assets/icons/city_night.png';
import { useTheme } from 'app/providers/ThemeProvider';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from 'app/providers/StoreProvider/config/store';
import { fetchCities } from '../model/services/fetchCities';
import cls from './ForecastAdder.module.scss';

export const ForecastAdder = memo(() => {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const dispatch = useDispatch<AppDispatch>();

    const image = theme === 'light' ? cityDay : cityNight;

    return (
        <div className={classNames(cls.ForecastAdder, {}, [])}>
            <h2>{t('AddCity')}</h2>
            <div
                className={classNames(cls.ForecastAdder__plus)}
                onClick={() => {
                    // dispatch(fetchCities('Kazan'))
                }}
            >
                <span></span>
                <span></span>
            </div>
            <img src={image} alt="city" />
        </div>
    );
});

ForecastAdder.displayName = 'ForecastAdder';
