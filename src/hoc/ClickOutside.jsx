import React from 'react';
import ReactDOM from 'react-dom';

export function enhanceWithClickOutside(Component) {
    return class EnhancedComponent extends React.Component {
        __domNode;

        constructor(props) {
            super(props);
            this.handleClickOutside = this.handleClickOutside.bind(this);
        }

        componentDidMount() {
            document.addEventListener('click', this.handleClickOutside, true);
        }

        componentWillUnmount() {
            document.removeEventListener('click', this.handleClickOutside, true);
        }

        handleClickOutside(e) {
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
                    ref={c => {
                        this.__wrappedInstance = c;
                        // eslint-disable-next-line react/no-find-dom-node
                        this.__domNode = ReactDOM.findDOMNode(c);
                    }}
                />
            );
        }
    }
}