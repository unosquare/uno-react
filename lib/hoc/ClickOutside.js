"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
function enhanceWithClickOutside(Component) {
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
            return (React.createElement(Component, Object.assign({}, rest, { ref: (c) => {
                    this.__wrappedInstance = c;
                    // eslint-disable-next-line react/no-find-dom-node
                    this.__domNode = react_dom_1.default.findDOMNode(c);
                } })));
        }
    };
}
exports.enhanceWithClickOutside = enhanceWithClickOutside;
//# sourceMappingURL=ClickOutside.js.map