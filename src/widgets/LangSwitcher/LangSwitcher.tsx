import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

export const LangSwitcher = memo(() => {
    const { t, i18n } = useTranslation();

    const changeLnguage = () => {
        i18n.changeLanguage(
            i18n.language === 'ru' ? 'en' : 'ru'
        );
    };

    return (
        <Button
            className='switcher_lang'
            title={t('LangTitle')}
            onClick={changeLnguage}
        >
            {t('Language')}
        </Button>
    );
});

LangSwitcher.displayName = 'LangSwitcher';
