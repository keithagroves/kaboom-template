import kaboom from 'kaboom';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const k: any = kaboom({
    scale: 1,
    fullscreen: true,
    clearColor: [ 0, 0, 0, 1 ],
    debug: true,
});

export default k;
