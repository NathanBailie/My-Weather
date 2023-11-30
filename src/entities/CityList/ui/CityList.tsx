import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCities } from 'app/redux/model/selectors/getCitiesSelectors';
import { type AppDispatch } from 'app/providers/StoreProvider/config/store';
import cls from './CityList.module.scss';
import { Button, ButtonFonts } from 'shared/ui/Button/Button';
import { fetchForecast } from 'app/redux';

export const CityList = memo(() => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();

    const cityList = useSelector(getCities);

    const list = cityList.map((item, index) => {
        const { id, city, country, state, lat, lon } = item;
        const stateTitle = state ? `, ${t('State')}` : '';

        return (
            <Button
                className='city'
                font={ButtonFonts.FONT_L}
                key={id}
                title={`${t('City')}, ${t('CountryCode')}${stateTitle}`}
                onClick={() => { dispatch(fetchForecast({ lat, lon })) }}
            >
                {`${city}, ${country}` + `${state ? `, ${state}` : ''}`}

            </Button>
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
