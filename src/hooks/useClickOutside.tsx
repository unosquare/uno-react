import * as React from 'react';

export function useClickOutside(Component: any, onClickOutside: any) {
    return (props: any) => {
        const node: any = React.useRef();

        const handleClick = (ev: any) => {
            if (!node.current.contains(ev.target)) { onClickOutside(); }
        };

        React.useEffect(() => {
            document.addEventListener('click', handleClick);
            return () => document.removeEventListener('click', handleClick);
        }, []);

        return (
            <div
                ref={node}
            >
                <Component
                    {...props}
                />
            </div>
        );
    };
}
