import * as React from 'react';

const useClickOutside = (Component: any, onClickOutside: () => void) =>
    function (props: unknown) {
        const node: any = React.useRef();

        const handleClick = React.useCallback(
            (ev: any) => {
                if (!node.current.contains(ev.target)) {
                    onClickOutside();
                }
            },
            [onClickOutside],
        );

        React.useEffect(() => {
            document.addEventListener('click', handleClick);
            return (): void => document.removeEventListener('click', handleClick);
        }, []);

        return (
            <div ref={node}>
                <Component {...(props as Record<string, unknown>)} />
            </div>
        );
    };

export default useClickOutside;
