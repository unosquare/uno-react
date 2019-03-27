export const onEnterKey = (callback: () => void) => (ev: { keyCode: number; }) => {
    if (ev.keyCode === 13) {
        callback();
    }
};

export const asyncOnEnterKey = (callback: () => void) => async (ev: { keyCode: number; }) => {
    if (ev.keyCode === 13) {
        await callback();
    }
};
