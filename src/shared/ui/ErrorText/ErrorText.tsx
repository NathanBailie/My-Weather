import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ErrorText.module.scss';

interface ErrorTextProps {
    text?: string
}

export const ErrorText = memo((props: ErrorTextProps) => {
    const { text } = props;
    const { t } = useTranslation();

    if (text) {
        return (
            <span className={classNames(cls.ErrorText, {}, [])}>
                {t(text)}
            </span>
        )
    }

    return null;
});

ErrorText.displayName = 'ErrorText';
