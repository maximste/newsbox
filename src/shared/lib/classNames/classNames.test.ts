import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expectedClass = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe(expectedClass);
    });

    test('with mods', () => {
        const expectedClass = 'someClass class1 class2 hovered scrollable';
        const mods = { hovered: true, scrollable: true };
        expect(classNames('someClass', mods, ['class1', 'class2']))
            .toBe(expectedClass);
    });

    test('with mod false', () => {
        const expectedClass = 'someClass class1 class2 hovered';
        const mods = { hovered: true, scrollable: false };
        expect(classNames('someClass', mods, ['class1', 'class2']))
            .toBe(expectedClass);
    });

    test('with mod undefined', () => {
        const expectedClass = 'someClass class1 class2 hovered';
        expect(classNames('someClass', { hovered: true, scrollable: undefined }, ['class1', 'class2']))
            .toBe(expectedClass);
    });
});
