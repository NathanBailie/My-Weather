import { type Mods, classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useRef, useState, type MutableRefObject, useEffect } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { useDispatch, useSelector } from 'react-redux';
import {
    forecastsActions,
    getCitiesLoadingStatus,
    getCitiesError,
    getInputValue,
    getModalIsOpen,
    useValidateInput,
    getCitiesErrorText
} from 'entities/ForecastAdder';
import { useTheme } from 'app/providers/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import cls from './Modal.module.scss';
import type { AppDispatch } from 'app/providers/StoreProvider/config/store';
import { ErrorText } from '../ErrorText/ErrorText';
import { Loader } from '../Loader/Loader';
import { CityList } from 'entities/CityList';

export const Modal = memo(() => {
    const { t } = useTranslation();
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    const ANIM_DELAY = 300;

    const { theme } = useTheme();
    const { validateInput } = useValidateInput();

    const dispatch = useDispatch<AppDispatch>();
    const modalIsOpen = useSelector(getModalIsOpen);
    const inputValue = useSelector(getInputValue);
    const citiesLoadingStatus = useSelector(getCitiesLoadingStatus);
    const citiesError = useSelector(getCitiesError);
    const citiesErrorText = useSelector(getCitiesErrorText);

    const onCloseModal = useCallback(() => {
        dispatch(forecastsActions.closeModal());
    }, [dispatch]);

    const onContentClick = (e: any) => {
        e.stopPropagation();
    };

    const closeHandler = useCallback(() => {
        setIsClosing(true);
        timerRef.current = setTimeout(() => {
            onCloseModal();
            setIsClosing(false);
        }, ANIM_DELAY);
    }, [onCloseModal]);

    useEffect(() => {
        return () => {
            clearTimeout(timerRef.current);
        };
    }, [modalIsOpen]);

    const mods: Mods = {
        [cls.opened]: modalIsOpen,
        [cls.isClosing]: isClosing
    };

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [theme])}>
                <div className={cls.Modal__window} onClick={(e) => { onContentClick(e) }}>
                    <h2>{t('AddCity')}</h2>
                    <div className={cls.Modal__inputWrapper}>
                        <Input
                            inputValue={inputValue}
                            placeholder={t('TypeYourCity')} />
                        <button
                            onClick={() => { validateInput() }}
                            disabled={citiesLoadingStatus === 'loading'}
                        >
                            &#10149;
                        </button>
                    </div>
                    <ErrorText error={citiesError} text={citiesErrorText} />
                    {citiesLoadingStatus === 'loading' ? <Loader /> : null}
                    {citiesLoadingStatus === 'succeeded' ? <CityList /> : null}

                    <button
                        className={classNames(cls.Modal__closeBtn, mods, [])}
                        onClick={closeHandler}
                    >
                        Close
                    </button>
                </div>
            </div>
        </Portal >
    );
});

Modal.displayName = 'Modal';
