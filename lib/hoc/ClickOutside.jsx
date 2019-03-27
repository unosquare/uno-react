var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    return /** @class */ (function (_super) {
        __extends(EnhancedComponent, _super);
        function EnhancedComponent(props) {
            var _this = _super.call(this, props) || this;
            _this.handleClickOutside = _this.handleClickOutside.bind(_this);
            return _this;
        }
        EnhancedComponent.prototype.componentDidMount = function () {
            document.addEventListener('click', this.handleClickOutside, true);
        };
        EnhancedComponent.prototype.componentWillUnmount = function () {
            document.removeEventListener('click', this.handleClickOutside, true);
        };
        EnhancedComponent.prototype.handleClickOutside = function (e) {
            var domNode = this.__domNode;
            if ((!domNode || !domNode.contains(e.target)) &&
                this.__wrappedInstance &&
                typeof this.__wrappedInstance.handleClickOutside === 'function') {
                this.__wrappedInstance.handleClickOutside(e);
            }
        };
        EnhancedComponent.prototype.render = function () {
            var _this = this;
            var rest = __rest(this.props, []);
            return (<Component {...rest} ref={function (c) {
                _this.__wrappedInstance = c;
                // eslint-disable-next-line react/no-find-dom-node
                _this.__domNode = ReactDOM.findDOMNode(c);
            }}/>);
        };
        return EnhancedComponent;
    }(React.Component));
}
