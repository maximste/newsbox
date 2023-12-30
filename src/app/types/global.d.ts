// Глобальная декларация типов

declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

// Декларация типов svg, pngб jpg/jpeg для корректного импорта в компоненты
declare module '*.svg' {
    import React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'

/* Global variable used in i18n.ts and buildPlugins.ts to determine
whether mode is development or production */
declare const __IS_DEV__: boolean;
