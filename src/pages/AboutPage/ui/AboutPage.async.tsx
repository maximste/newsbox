import { lazy } from 'react';

// Компонент AboutPage должеен обязательно экспортироваться по дефолту
export const AboutPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // TODO: Искусственная задержка для тестирования подгрузки, удалить перед релизом
    setTimeout(() => resolve(import('./AboutPage')), 2000)
}));
