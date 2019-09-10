export class SimpleObservable {
    private observers: Array<((change?: string) => void)> = [];

    public subscribe(observer: (change?: string) => void): () => void {
        this.observers.push(observer);

        return () => {
            const index = this.observers.indexOf(observer);
            this.observers.splice(index, 1);
        };
    }

    public inform(change?: string) {
        this.observers.forEach((observer) => observer(change));
    }
}
