import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSizes } from 'shared/ui/Button/Button';

export const LangSwitcher = memo(() => {
    const { t, i18n } = useTranslation();

    const changeLnguage = () => {
        i18n.changeLanguage(
            i18n.language === 'ru' ? 'en' : 'ru'
        );
    };

    return (
        <Button
            className={classNames('', {}, ['langBtn'])}
            title={t('LangTitle')}
            onClick={changeLnguage}
            size={ButtonSizes.SWITCHER_LANG}
        >
            {t('Language')}
        </Button>
    );
});

LangSwitcher.displayName = 'LangSwitcher';
