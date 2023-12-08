import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import france from 'shared/assets/images/bg/france.jpg';
import qatar from 'shared/assets/images/bg/qatar.jpg';
import rabat from 'shared/assets/images/bg/rabat.jpg';
import japan from 'shared/assets/images/bg/japan.jpg';
import { getRandomNum } from 'shared/lib/utilFunctions';
import { useTheme } from 'app/providers/ThemeProvider';
import {
    type WeatherDescriptionKey,
    weatherDescriptionsEn,
    weatherDescriptionsRu
} from 'shared/lib/DescriptionDictionary';
import { type FinalObject } from 'app/redux/model/types/TypesForDataSorting';
import minTemp from 'shared/assets/icons/minTemp.png';
import maxTemp from 'shared/assets/icons/maxTemp.png';
import cls from './UpperPart.module.scss';

interface UpperPartProps {
    className?: string
    forecast: FinalObject
}

export const UpperPart = memo((props: UpperPartProps) => {
    const {
        className,
        forecast
    } = props;
    const { name, country, sunrise, sunset } = forecast;
    const todayWeather = forecast.data[0];
    const {
        temp,
        feelsLike,
        tempMin,
        tempMax,
        humidity,
        pressure,
        weatherDescr
    } = todayWeather;
    const { t, i18n } = useTranslation('infoPanel');
    const { theme } = useTheme();

    const darkImages = [france, qatar];
    const lightImages = [rabat, japan];
    const darkImage = darkImages[getRandomNum(0, 1)];
    const lightImage = lightImages[getRandomNum(0, 1)];
    const finalBgImage = theme === 'dark' ? darkImage : lightImage;

    const dictionary = i18n.language === 'ru' ? weatherDescriptionsRu : weatherDescriptionsEn;
    const castedWeatherDescr = weatherDescr as WeatherDescriptionKey;
    const pressureUnit = i18n.language === 'ru' ? 'гПа' : 'hPa';

    return (
        <div
            className={classNames(cls.UpperPart, {}, [className])}
            style={{ background: `url(${finalBgImage}) center center/cover no-repeat` }}>
            <div className={cls.UpperPart__info}>
                <div className={cls.UpperPart__temp}>
                    <h2>{temp} &#176;</h2>
                    <span>{t('Feels like')} {feelsLike} &#176;</span>

                    <div className={cls.UpperPart__minTempWrapper}>
                        <img src={minTemp} alt="min_temp" />
                        <span>{tempMin} &#176;</span>
                    </div>
                    <div className={cls.UpperPart__maxTempWrapper}>
                        <img src={maxTemp} alt="max_temp" />
                        <span>{tempMax} &#176;</span>
                    </div>
                </div>
                <h3>{dictionary[castedWeatherDescr]}</h3>
                <div className={cls.UpperPart__metrics} title={t('Humidity')}>
                    <div className={cls.UpperPart__metric}>
                        <h4>{t('Humidity')}</h4>
                        <span>{humidity} %</span>
                    </div>
                    <div className={cls.UpperPart__vertDivider}></div>
                    <div className={cls.UpperPart__metric} title={t('Pressure')}>
                        <h4>{t('Pressure')}</h4>
                        <span>{pressure} {pressureUnit}</span>
                    </div>
                </div>
            </div>
            <div className={cls.UpperPart__wrapper}>
                <div className={cls.UpperPart__nameWrapper}>
                    <h2>{name}, {country}</h2>
                    <span></span>
                </div>
                <div className={cls.UpperPart__infoWrapper}>
                    <span>{t('Sunrise')}: {sunrise}</span>
                    <span>{t('Sunset')}: {sunset}</span>
                </div>
            </div>
        </div>
    );
});

UpperPart.displayName = 'UpperPart';
