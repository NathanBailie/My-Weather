import { type Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import updateDarkIcon from 'shared/assets/icons/cardButtons/updateDark.png';
import updateLightIcon from 'shared/assets/icons/cardButtons/updateLight.png';
import deleteIcon from 'shared/assets/icons/cardButtons/delete.png';
import arrowLightIcon from 'shared/assets/icons/cardButtons/arrowLight.png';
import arrowDarkIcon from 'shared/assets/icons/cardButtons/arrowDark.png';
import { useTheme } from 'app/providers/ThemeProvider';
import { useDispatch } from 'react-redux';
import { forecastActions, updateForecast } from 'app/redux';
import { type AppDispatch } from 'app/providers/StoreProvider/config/store';
import { Link } from 'react-router-dom';
import { RoutePaths } from 'app/providers/AppRouter/lib/routerConfig';
import cls from './Buttons.module.scss';
import { Icon } from 'shared/ui/Icon/Icon';

interface ButtonsProps {
    className?: string
    id: string
    lat: number
    lon: number
    name: string
}

export const Buttons = memo((props: ButtonsProps) => {
    const { className, id, lat, lon, name } = props;
    const { t } = useTranslation('Buttons');
    const { theme } = useTheme();
    const dispatch = useDispatch<AppDispatch>();
    const updateIcon = theme === 'light' ? updateLightIcon : updateDarkIcon;
    const arrowIcon = theme === 'light' ? arrowLightIcon : arrowDarkIcon;
    const [isActive, setIsActive] = useState(false);

    const updateHandler = (lat: number, lon: number, id: string) => {
        setIsActive(true);
        dispatch(updateForecast({ lat, lon, id }))

        setTimeout(() => {
            setIsActive(false);
        }, 500);
    };

    const mods: Mods = {
        [cls.Buttons__button_update]: isActive
    }

    return (
        <div className={classNames(cls.Buttons, {}, [className])}>
            <button
                className={cls.Buttons__button}
                onClick={() => { dispatch(forecastActions.deleteForecast(id)) }}
                title={t('Remove')}
            >
                <Icon src={deleteIcon} alt="delete_button" size='35px' />
            </button>
            <button
                className={classNames(cls.Buttons__button, mods, [])}
                onClick={() => { updateHandler(lat, lon, id) }}
                title={t('Update')}
            >
                <Icon src={updateIcon} alt="update_button" size='35px' />
            </button>
            <button
                className={cls.Buttons__button}
                title={t('More')}
            >
                <Link to={`${RoutePaths.weather_details}${name}`}>
                    <Icon src={arrowIcon} alt="arrow_button" size='35px' />
                </Link>
            </button>
        </div>
    );
});

Buttons.displayName = 'Buttons';
