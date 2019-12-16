export declare function enhanceWithClickOutside(Component: any): {
    new (props: any): {
        __wrappedInstance: any;
        __domNode: any;
        componentDidMount(): void;
        componentWillUnmount(): void;
        handleClickOutside(e: {
            target: any;
        }): void;
        render(): any;
    };
};
