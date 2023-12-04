import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { type DataObject } from 'app/redux/model/types/TypesForDataSorting';
import tempMinIcon from 'shared/assets/icons/cardInfoPanel/tempMin.png';
import tempMaxIcon from 'shared/assets/icons/cardInfoPanel/tempMax.png';
import humidityIcon from 'shared/assets/icons/cardInfoPanel/humidity.png';
import pressureIcon from 'shared/assets/icons/cardInfoPanel/pressure.png';
import currentWeatherIcon from 'shared/assets/icons/cardInfoPanel/currentWeather.png';
import cls from './CurrentWeatherInfo.module.scss';

interface CurrentWeatherInfoProps {
    className?: string
    data: DataObject
}

export const CurrentWeatherInfo = memo((props: CurrentWeatherInfoProps) => {
    const { className, data } = props;
    const { tempMin, tempMax, humidity, pressure, iconSrc } = data;
    const { t } = useTranslation();

    const weatherInfo = [
        { info: tempMin, iconSrc: tempMinIcon, alt: 'temp_min' },
        { info: tempMax, iconSrc: tempMaxIcon, alt: 'temp_max' },
        { info: humidity, iconSrc: humidityIcon, alt: 'humidity' },
        { info: pressure, iconSrc: pressureIcon, alt: 'pressure' }
    ]

    return (
        <div className={classNames(cls.CurrentWeatherInfo, {}, [className])}>
            <div className={cls.CurrentWeatherInfo__item}>
                <img src={currentWeatherIcon} alt="weather" />
                <div className={cls.CurrentWeatherInfo__infoWrapper}>
                    <img src={iconSrc} alt="weather_icon" />
                </div>
            </div>
            {weatherInfo.map((item, id) => {
                return (
                    <div className={cls.CurrentWeatherInfo__item} key={id}>
                        <img src={item.iconSrc} alt={item.alt} />
                        <div className={cls.CurrentWeatherInfo__infoWrapper}>
                            <span>{item.info}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    );
});

CurrentWeatherInfo.displayName = 'CurrentWeatherInfo';
