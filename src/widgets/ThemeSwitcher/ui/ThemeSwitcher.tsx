import { memo } from 'react';
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
            className='switcher_theme'
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
