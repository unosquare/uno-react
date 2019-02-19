export const onEnterKey = callback => ev => {
    if (ev.keyCode === 13) {
        callback();
    }
};

export const asyncOnEnterKey = callback => async ev => {
    if (ev.keyCode === 13) {
        await callback();
    }
};
