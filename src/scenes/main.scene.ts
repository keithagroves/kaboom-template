import k from '../kaboom';

export const mainScene = (): void => {
    const {
        add,
        height,
        origin,
        pos,
        text,
        width
    } = k;
    add([
        text('KABOOM STARTER TEMPLATE!', 32),
        pos(width() / 2, height() / 2),
        origin('center')
    ]);
};
