var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React from 'react';
import ReactDOM from 'react-dom';
export function enhanceWithClickOutside(Component) {
    return class EnhancedComponent extends React.Component {
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
            if ((!domNode || !domNode.contains(e.target)) &&
                this.__wrappedInstance &&
                typeof this.__wrappedInstance.handleClickOutside === 'function') {
                this.__wrappedInstance.handleClickOutside(e);
            }
        }
        render() {
            const rest = __rest(this.props, []);
            return (<Component {...rest} ref={(c) => {
                this.__wrappedInstance = c;
                // eslint-disable-next-line react/no-find-dom-node
                this.__domNode = ReactDOM.findDOMNode(c);
            }}/>);
        }
    };
}
