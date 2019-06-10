import * as React from 'react';
import ReactDOM from 'react-dom';

export function enhanceWithClickOutsides(Component: any) {
    return class EnhancedComponent extends React.Component {
        public __wrappedInstance: any;
        public __domNode: any;

        constructor(props: any) {
            super(props);
            this.handleClickOutside = this.handleClickOutside.bind(this);
        }

        public componentDidMount() {
            document.addEventListener('click', this.handleClickOutside, true);
        }

        public componentWillUnmount() {
            document.removeEventListener('click', this.handleClickOutside, true);
        }

        public handleClickOutside(e: { target: any; }) {
            const domNode = this.__domNode;

            if (
                (!domNode || !domNode.contains(e.target)) &&
                this.__wrappedInstance &&
                typeof this.__wrappedInstance.handleClickOutside === 'function'
            ) {
                this.__wrappedInstance.handleClickOutside(e);
            }
        }

        public render() {
            const { ...rest } = this.props;

            return (
                <Component
                    {...rest}
                    ref={(c: React.ReactInstance) => {
                        this.__wrappedInstance = c;
                        // eslint-disable-next-line react/no-find-dom-node
                        this.__domNode = ReactDOM.findDOMNode(c);
                    }}
                />
            );
        }
    };
}

function enhanceWithClickOutside(Component: any, onClickOutside: any) {
    return (props: any) => {
        const node: any = React.useRef();

        const handleClick = (ev: any) => {
            if (!node.current.contains(ev.target)) { onClickOutside(); }
        };

        React.useEffect(() => {
            document.addEventListener('mousedown', handleClick);
            return () => document.removeEventListener('mousedown', handleClick);
        }, []);

        return (
            <div
                ref={node}
            >
                <Component />
            </div>
        );
    };
}