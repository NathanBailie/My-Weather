import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { useDispatch } from 'react-redux';
import cityDay from 'shared/assets/icons/city_day.png';
import cityNight from 'shared/assets/icons/city_night.png';
import { modalAndInputActions } from 'app/redux';
import cls from './ForecastAdder.module.scss';

export const ForecastAdder = memo(() => {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const dispatch = useDispatch();

    const image = theme === 'light' ? cityDay : cityNight;

    return (
        <div className={classNames(cls.ForecastAdder, {}, [])}>
            <h2>{t('AddCity')}</h2>
            <button
                className={classNames(cls.ForecastAdder__plus)}
                onClick={() => {
                    dispatch(modalAndInputActions.openModal())
                }}
            >
                <span></span>
                <span></span>
            </button>
            <img src={image} alt="city" />
        </div>
    );
});

ForecastAdder.displayName = 'ForecastAdder';
