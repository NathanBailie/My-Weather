import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getCityList } from 'entities/ForecastAdder';
import cls from './CityList.module.scss';

export const CityList = memo(() => {
    const { t } = useTranslation();
    const cityList = useSelector(getCityList);

    const list = cityList.map((item, index) => {
        const { id, city, country, state } = item;
        const stateTitle = state ? `, ${t('State')}` : '';

        return (
            <button
                className={classNames(cls.CityList__item, {}, [])}
                key={id}
                title={`${t('City')}, ${t('CountryCode')}${stateTitle}`}
            >
                {`${city}, ${country}` + `${state ? `, ${state}` : ''}`}
            </button>
        )
    })

    if (cityList.length === 0) { return null }

    return (
        <div className={classNames(cls.CityList, {}, [])}>
            <h2>{t('ChooseYourCity')}</h2>
            {list}
        </div>
    )
});

CityList.displayName = 'CityList';
