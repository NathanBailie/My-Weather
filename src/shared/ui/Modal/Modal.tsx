import { type Mods, classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useRef, useState, type MutableRefObject, useEffect } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { useDispatch, useSelector } from 'react-redux';
import { forecastsActions, getModalIsOpen, getModalText } from 'entities/ForecastAdder';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';

export const Modal = memo(() => {
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    const ANIM_DELAY = 300;

    const { theme } = useTheme();

    const dispatch = useDispatch();
    const modalIsOpen = useSelector(getModalIsOpen);
    const modalText = useSelector(getModalText);

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
                    <button onClick={closeHandler}>OK</button>
                </div>
            </div>
        </Portal>
    );
});

Modal.displayName = 'Modal';
