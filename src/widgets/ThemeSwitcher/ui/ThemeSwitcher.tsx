import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Icon } from 'shared/ui/Icon/Icon';
import lightIcon from 'shared/assets/icons/themes/light.png';
import darkIcon from 'shared/assets/icons/themes/dark.png';
import { Button, ButtonSizes } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './ThemeSwitcher.module.scss';

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
            size={ButtonSizes.SWITCHER_THEME}
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
