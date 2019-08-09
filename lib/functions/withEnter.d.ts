export declare const onEnterKey: (callback: () => void) => (ev: {
    keyCode: number;
}) => void;
export declare const asyncOnEnterKey: (callback: () => void) => (ev: {
    keyCode: number;
}) => Promise<void>;
