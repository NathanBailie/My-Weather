import { createContext } from 'react';

export enum Theme {
    DARK = 'dark',
    LIGHT = 'light'
}

export interface ThemeContextProps {
    theme?: Theme
    setTheme?: (theme: Theme) => void
}

export const WEATHER_THEME_KEY = 'theme';

export const ThemeContext = createContext<ThemeContextProps>({});
