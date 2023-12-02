import { type Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import cls from './Buttons.module.scss';
import updateDarkIcon from 'shared/assets/icons/cardButtons/updateDark.png';
import updateLightIcon from 'shared/assets/icons/cardButtons/updateLight.png';
import deleteIcon from 'shared/assets/icons/cardButtons/delete.png';
import arrowLightIcon from 'shared/assets/icons/cardButtons/arrowLight.png';
import arrowDarkIcon from 'shared/assets/icons/cardButtons/arrowDark.png';
import { useTheme } from 'app/providers/ThemeProvider';
import { useDispatch, useSelector } from 'react-redux';
import { forecastActions, updateForecast } from 'app/redux';
import { type AppDispatch } from 'app/providers/StoreProvider/config/store';

interface ButtonsProps {
    className?: string
    id: string
    lat: number
    lon: number
}

export const Buttons = memo((props: ButtonsProps) => {
    const { className, id, lat, lon } = props;
    const { t } = useTranslation();
    const { theme } = useTheme();
    const dispatch = useDispatch<AppDispatch>();
    const updateIcon = theme === 'light' ? updateLightIcon : updateDarkIcon;
    const arrowIcon = theme === 'light' ? arrowLightIcon : arrowDarkIcon;
    const [isActive, setIsActive] = useState(false);

    const mods: Mods = {
        [cls.Buttons__button_update]: isActive
    }

    const updateHandler = (lat: number, lon: number, id: string) => {
        setIsActive(true);
        dispatch(updateForecast({ lat, lon, id }))

        setTimeout(() => {
            setIsActive(false);
        }, 500);
    };

    return (
        <div className={classNames(cls.Buttons, {}, [className])}>
            <button className={cls.Buttons__button} onClick={() => { dispatch(forecastActions.deleteForecast(id)) }}>
                <img src={deleteIcon} alt="delete_button" />
            </button>
            <button
                className={classNames(cls.Buttons__button, mods, [])}
                onClick={() => { updateHandler(lat, lon, id) }}>
                <img src={updateIcon} alt="upate_button" />
            </button>
            <button className={cls.Buttons__button}>
                <img src={arrowIcon} alt="arrow_button" />
            </button>
        </div>
    );
});

Buttons.displayName = 'Buttons';
