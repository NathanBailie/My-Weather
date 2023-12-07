import { type Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import thermometerLight from 'shared/assets/icons/cardInfoPanel/thermometerLight.png';
import thermometerDark from 'shared/assets/icons/cardInfoPanel/thermometerDark.png';
import forecastLight from 'shared/assets/icons/cardInfoPanel/forecastLight.png';
import forecastDark from 'shared/assets/icons/cardInfoPanel/forecastDark.png';
import { type DataObject } from 'app/redux/model/types/TypesForDataSorting';
import cls from './InfoPanel.module.scss';
import { CurrentWeatherInfo } from '../CurrentWeatherInfo/CurrentWeatherInfo';
import { NextDaysForecast } from '../NextDaysForecast/NextDaysForecast';

interface InfoPanelProps {
    className?: string
    data: DataObject[]
}

export const InfoPanel = memo((props: InfoPanelProps) => {
    const { className, data } = props;
    const { t } = useTranslation('Buttons');
    const { theme } = useTheme();
    const [activeBtn, setActiveBtn] = useState('today');
    const thermometerIcon = theme === 'light' ? thermometerLight : thermometerDark;
    const forecastIcon = theme === 'light' ? forecastLight : forecastDark;

    const todayMods: Mods = {
        [cls.InfoPanel__switcher_active]: activeBtn === 'today'
    };

    const forecastMods: Mods = {
        [cls.InfoPanel__switcher_active]: activeBtn === 'forecast'
    };

    return (
        <div className={classNames(cls.InfoPanel, {}, [className])}>
            <div className={cls.InfoPanel__switchers}>
                <button
                    className={classNames(cls.InfoPanel__switcher, todayMods, [className])}
                    onClick={() => { setActiveBtn('today') }}
                    title={t('Today')}
                >
                    <img src={thermometerIcon} alt="thermometer" />
                </button>
                <button
                    className={classNames(cls.InfoPanel__switcher, forecastMods, [className])}
                    onClick={() => { setActiveBtn('forecast') }}
                    title={t('NextDays')}
                >
                    <img src={forecastIcon} alt="weather" />
                </button>
            </div>
            <div className={cls.InfoPanel__divider}></div>
            {activeBtn === 'today' ? <CurrentWeatherInfo data={data[0]} /> : null}
            {activeBtn === 'forecast' ? <NextDaysForecast data={data} /> : null}
        </div>
    );
});

InfoPanel.displayName = 'InfoPanel';
