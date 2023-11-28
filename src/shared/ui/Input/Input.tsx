import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { memo, type ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './Input.module.scss';
import { forecastsActions, getCitiesLoadingStatus, useValidateInput } from 'entities/ForecastAdder';
import { fetchCities } from 'entities/ForecastAdder/model/services/fetchCities';
import type { AppDispatch } from 'app/providers/StoreProvider/config/store';

interface InputProps {
    placeholder: string
    inputValue: string
}

export const Input = memo((props: InputProps) => {
    const { inputValue, placeholder } = props;
    const { validateInput } = useValidateInput();
    const dispatch = useDispatch<AppDispatch>();

    const citiesLoadingStatus = useSelector(getCitiesLoadingStatus);

    const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(forecastsActions.changeInputValue(e.target.value));
    };

    const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            validateInput()
        }
    }

    return (
        <input
            className={classNames(cls.Input, {}, [])}
            type='text'
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => { onChangeInputValue(e) }}
            onKeyDown={(e) => { keyPressHandler(e) }}
            disabled={citiesLoadingStatus === 'loading'}
        />
    );
});

Input.displayName = 'Input';
