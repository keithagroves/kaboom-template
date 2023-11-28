import k from '../kaboom';

export const mainScene = (): void => {
    const {
        add,
        height,
        pos,
        width,
        anchor,
        loadSprite,
        sprite,
        area,
        body,
        onKeyDown,
    } = k;
    loadSprite("bean", "bean.png");

    const player = add([
        sprite("bean"),
				area(),
				body(),
        pos(width() / 2, height() / 2),
        anchor("center")
    ]);


    // keypresses
    onKeyDown("a", () => {
        player.move(-120, 0);
    });
    onKeyDown("d", () => {
        player.move(120, 0);
    });
    onKeyDown("s", () => {
        player.move(0, 120);
    });
    onKeyDown("w", () => {
        player.move(0, -120);
    });

};
