import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

export const LangSwitcher = memo(() => {
    const { t, i18n } = useTranslation();

    const changeLnguage = () => {
        i18n.changeLanguage(
            i18n.language === 'ru' ? 'en' : 'ru'
        );
    };

    return (
        <button
            className={classNames('', {}, [])}
            onClick={changeLnguage}>
            {t('Language')}
        </button>
    );
});

LangSwitcher.displayName = 'LangSwitcher';
