import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ThemeSwitcher.module.scss';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Icon } from 'shared/ui/Icon/Icon';
import lightIcon from 'shared/assets/icons/themes/light.png';
import darkIcon from 'shared/assets/icons/themes/dark.png';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

export const ThemeSwitcher = memo(() => {
    const { theme, themeChanger } = useTheme();
    const { t } = useTranslation();

    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, ['themeBtn'])}
            onClick={themeChanger}
            title={
                theme === Theme.DARK
                    ? t('DarkTheme')
                    : t('LightTheme')
            }
        >
            {
                theme === Theme.DARK
                    ? <Icon src={darkIcon} />
                    : <Icon src={lightIcon} />
            }
        </Button>
    );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
