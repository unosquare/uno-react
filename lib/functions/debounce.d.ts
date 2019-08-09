export declare type Procedure = (...args: any[]) => void;
export declare function debounce<F extends Procedure>(func: F, waitMilliseconds?: number): F;
