import { useContext } from 'react';
import { WEATHER_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface themeResult {
    theme: Theme
    themeChanger: () => void
}

export function useTheme(): themeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const themeChanger = () => {
        let newTheme: Theme;
        newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

        setTheme?.(newTheme);
        localStorage.setItem(WEATHER_THEME_KEY, newTheme);
    };

    return {
        theme: theme ?? Theme.LIGHT,
        themeChanger
    };
}
