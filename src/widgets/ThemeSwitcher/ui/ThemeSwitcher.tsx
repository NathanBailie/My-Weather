import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ThemeSwitcher.module.scss';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Icon } from 'shared/ui/Icon/Icon';
import lightIcon from 'shared/assets/icons/themes/light.png';
import darkIcon from 'shared/assets/icons/themes/dark.png';

export const ThemeSwitcher = memo(() => {
    const { theme, themeChanger } = useTheme();

    return (
        <button
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
        </button>
    );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
