export declare class SimpleObservable {
    private observers;
    subscribe(observer: (change?: string) => void): () => void;
    inform(change?: string): void;
}
