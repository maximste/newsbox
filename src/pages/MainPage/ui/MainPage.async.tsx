import { lazy } from 'react';

// Компонент MainPage должен обязательно экспортироваться по дефолту
export const MainPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Искусственная задержка для тестирования подгрузки
    setTimeout(() => resolve(import('./MainPage')), 2000);
}));
