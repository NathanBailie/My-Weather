import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ThemeSwitcher.module.scss';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Icon } from 'shared/ui/Icon/Icon';
import lightIcon from 'shared/assets/icons/themes/light.png';
import darkIcon from 'shared/assets/icons/themes/dark.png';
import { Button } from 'shared/ui/Button/Button';

export const ThemeSwitcher = memo(() => {
    const { theme, themeChanger } = useTheme();

    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [])}
            onClick={themeChanger}
            title={
                theme === Theme.DARK
                    ? 'Темная тема'
                    : 'Светлая тема'
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
