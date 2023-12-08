import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { type DataObject } from 'app/redux/model/types/TypesForDataSorting';
import tempMinIcon from 'shared/assets/icons/cardInfoPanel/tempMin.png';
import tempMaxIcon from 'shared/assets/icons/cardInfoPanel/tempMax.png';
import humidityIcon from 'shared/assets/icons/cardInfoPanel/humidity.png';
import pressureIcon from 'shared/assets/icons/cardInfoPanel/pressure.png';
import currentWeatherIcon from 'shared/assets/icons/cardInfoPanel/currentWeather.png';
import { type imageNumberType, imageObect } from 'shared/lib/imagesObject';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './CurrentWeatherInfo.module.scss';

interface CurrentWeatherInfoProps {
    className?: string
    data: DataObject
}

export const CurrentWeatherInfo = memo((props: CurrentWeatherInfoProps) => {
    const { className, data } = props;
    const { tempMin, tempMax, humidity, pressure, iconNumber } = data;
    const { t } = useTranslation('infoPanel');

    const weatherInfo = [
        { info: tempMin, iconSrc: tempMinIcon, descr: 'TempMin' },
        { info: tempMax, iconSrc: tempMaxIcon, descr: 'TempMax' },
        { info: humidity, iconSrc: humidityIcon, descr: 'Humidity' },
        { info: pressure, iconSrc: pressureIcon, descr: 'Pressure' }
    ]
    const castedIconNumber = iconNumber as imageNumberType;

    return (
        <div className={classNames(cls.CurrentWeatherInfo, {}, [className])}>
            <div className={cls.CurrentWeatherInfo__item}>
                <Icon src={currentWeatherIcon} alt="weather" title={t('condition')} size='40px' />
                <div className={cls.CurrentWeatherInfo__infoWrapper}>
                    <Icon src={imageObect[castedIconNumber]} alt="weather_icon" size='50px' />
                </div>
            </div>
            {weatherInfo.map((item, id) => {
                return (
                    <div className={cls.CurrentWeatherInfo__item} key={id}>
                        <Icon
                            src={item.iconSrc}
                            alt={item.descr}
                            title={t(item.descr)}
                            size='40px'
                        />
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
