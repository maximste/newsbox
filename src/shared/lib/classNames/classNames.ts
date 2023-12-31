// Некий самописный аналог библиотеки https://www.npmjs.com/package/classnames
type Mods = Record<string, boolean | string>;

// eslint-disable-next-line max-len
export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className),
    ].join(' ');
}

// Пример реализации
// classNames('remove-btn', {hovered: false, selectable: true, red: false}, ['withPadings'])
// результат: 'remove-btn selectable withPaddings'
