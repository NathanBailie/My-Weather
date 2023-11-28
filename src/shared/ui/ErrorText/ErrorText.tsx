import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ErrorText.module.scss';

interface ErrorTextProps {
    error?: boolean
    text?: string
}

export const ErrorText = memo((props: ErrorTextProps) => {
    const { error, text } = props;
    const { t } = useTranslation();
    console.log(error, text);

    if (error && text) {
        return (
            <span className={classNames(cls.ErrorText, {}, [])}>
                {t(text)}
            </span>
        )
    }

    return null;
});

ErrorText.displayName = 'ErrorText';
