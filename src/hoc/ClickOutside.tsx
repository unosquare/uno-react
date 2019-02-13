import React from 'react';
import ReactDOM from 'react-dom';

export function enhanceWithClickOutside(Component: React.ComponentType<*>) {
    return class EnhancedComponent extends React.Component<*> {
        public __domNode: *;
        public __wrappedInstance: ?React.Component<*>;
        public handleClickOutside: (e: Event) => void;

        constructor(props: any) {
            super(props);
            this.handleClickOutside = this.handleClickOutside.bind(this);
        }

        componentDidMount() {
            document.addEventListener('click', this.handleClickOutside, true);
        }

        componentWillUnmount() {
            document.removeEventListener('click', this.handleClickOutside, true);
        }

        public handleClickOutside(e: any) {
            const domNode = this.__domNode;
            if (
                (!domNode || !domNode.contains(e.target)) &&
                this.__wrappedInstance &&
                typeof this.__wrappedInstance.handleClickOutside === 'function'
            ) {
                this.__wrappedInstance.handleClickOutside(e);
            }
        }

        render() {
            const { ...rest } = this.props;

            return (
                <Component
                    {...rest}
                    ref={(c: any) => {
                        this.__wrappedInstance = c;
                        this.__domNode = ReactDOM.findDOMNode(c);
                    }}
                />
            );
        }
    }
}