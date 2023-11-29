import { classNames } from 'shared/lib/classNames/classNames';
import { memo, type ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { type AppDispatch } from 'app/providers/StoreProvider/config/store';
import { modalAndInputActions } from 'app/redux';
import useValidateInput from 'app/redux/model/hooks/useValidate';
import { getCitiesLoadingStatus } from 'app/redux/model/selectors/getCitiesSelectors';
import cls from './Input.module.scss';

interface InputProps {
    placeholder: string
    inputValue: string
}

export const Input = memo((props: InputProps) => {
    const { inputValue, placeholder } = props;
    const dispatch = useDispatch<AppDispatch>();
    const { validateInput } = useValidateInput();
    const citiesLoadingStatus = useSelector(getCitiesLoadingStatus);

    const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(modalAndInputActions.changeInputValue(e.target.value));
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
