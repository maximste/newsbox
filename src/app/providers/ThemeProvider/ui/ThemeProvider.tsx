import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

// Тема по-умолчанию - из local storage по ключу LOCAL_STORAGE_THEME_KEY (см. Themecontext.ts)
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme;
}

/* Провайдер для работы с контекстом ThemeContext. Обернув приложение в этот провайдер будем
иметь доступ к теме из любого вложенного компонента
children - дочерний компонент, который оборачивается провайдером.
Тип FC - functional component, из которого можно получить children
*/
const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    /* Чтобы каждый раз не создавался новый объект, не менялась ссылка на этот объект,
    и компонент не перерисовывался, необходимо его мемоизировать */
    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
