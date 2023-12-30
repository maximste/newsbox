// Контекст создается для возможности иметь глобальный доступ к настройке темы
import { createContext } from 'react';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export interface ThemeContextProps {
    theme?: Theme; // Значение самой темы
    setTheme?: (theme: Theme) => void // Принимает значение новой темы и ничего не возвращает
}

export const ThemeContext = createContext<ThemeContextProps>({});

// Сохраняем настройку темы в local storage
export const LOCAL_STORAGE_THEME_KEY = 'theme';
