// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../node_modules/react-router-dom/es/Router.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Router = _interopRequireDefault(require("react-router/es/Router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Written in this round about way for babel-transform-imports
var _default = _Router.default;
exports.default = _default;
},{"react-router/es/Router":"../node_modules/react-router/es/Router.js"}],"../node_modules/react-router-dom/es/BrowserRouter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _warning = _interopRequireDefault(require("warning"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _history = require("history");

var _Router = _interopRequireDefault(require("./Router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * The public API for a <Router> that uses HTML5 history.
 */
var BrowserRouter = function (_React$Component) {
  _inherits(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _history.createBrowserHistory)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  BrowserRouter.prototype.componentWillMount = function componentWillMount() {
    (0, _warning.default)(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.");
  };

  BrowserRouter.prototype.render = function render() {
    return _react.default.createElement(_Router.default, {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(_react.default.Component);

BrowserRouter.propTypes = {
  basename: _propTypes.default.string,
  forceRefresh: _propTypes.default.bool,
  getUserConfirmation: _propTypes.default.func,
  keyLength: _propTypes.default.number,
  children: _propTypes.default.node
};
var _default = BrowserRouter;
exports.default = _default;
},{"warning":"../node_modules/warning/warning.js","react":"../node_modules/react/index.js","prop-types":"../node_modules/prop-types/index.js","history":"../node_modules/history/es/index.js","./Router":"../node_modules/react-router-dom/es/Router.js"}],"../node_modules/react-router-dom/es/HashRouter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _warning = _interopRequireDefault(require("warning"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _history = require("history");

var _Router = _interopRequireDefault(require("./Router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * The public API for a <Router> that uses window.location.hash.
 */
var HashRouter = function (_React$Component) {
  _inherits(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _history.createHashHistory)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  HashRouter.prototype.componentWillMount = function componentWillMount() {
    (0, _warning.default)(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.");
  };

  HashRouter.prototype.render = function render() {
    return _react.default.createElement(_Router.default, {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(_react.default.Component);

HashRouter.propTypes = {
  basename: _propTypes.default.string,
  getUserConfirmation: _propTypes.default.func,
  hashType: _propTypes.default.oneOf(["hashbang", "noslash", "slash"]),
  children: _propTypes.default.node
};
var _default = HashRouter;
exports.default = _default;
},{"warning":"../node_modules/warning/warning.js","react":"../node_modules/react/index.js","prop-types":"../node_modules/prop-types/index.js","history":"../node_modules/history/es/index.js","./Router":"../node_modules/react-router-dom/es/Router.js"}],"../node_modules/react-router-dom/es/Link.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _invariant = _interopRequireDefault(require("invariant"));

var _history = require("history");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;

          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        innerRef = _props.innerRef,
        props = _objectWithoutProperties(_props, ["replace", "to", "innerRef"]); // eslint-disable-line no-unused-vars


    (0, _invariant.default)(this.context.router, "You should not use <Link> outside a <Router>");
    (0, _invariant.default)(to !== undefined, 'You must specify the "to" property');
    var history = this.context.router.history;
    var location = typeof to === "string" ? (0, _history.createLocation)(to, null, null, history.location) : to;
    var href = history.createHref(location);
    return _react.default.createElement("a", _extends({}, props, {
      onClick: this.handleClick,
      href: href,
      ref: innerRef
    }));
  };

  return Link;
}(_react.default.Component);

Link.propTypes = {
  onClick: _propTypes.default.func,
  target: _propTypes.default.string,
  replace: _propTypes.default.bool,
  to: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
  innerRef: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func])
};
Link.defaultProps = {
  replace: false
};
Link.contextTypes = {
  router: _propTypes.default.shape({
    history: _propTypes.default.shape({
      push: _propTypes.default.func.isRequired,
      replace: _propTypes.default.func.isRequired,
      createHref: _propTypes.default.func.isRequired
    }).isRequired
  }).isRequired
};
var _default = Link;
exports.default = _default;
},{"react":"../node_modules/react/index.js","prop-types":"../node_modules/prop-types/index.js","invariant":"../node_modules/invariant/browser.js","history":"../node_modules/history/es/index.js"}],"../node_modules/react-router-dom/es/MemoryRouter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MemoryRouter = _interopRequireDefault(require("react-router/es/MemoryRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Written in this round about way for babel-transform-imports
var _default = _MemoryRouter.default;
exports.default = _default;
},{"react-router/es/MemoryRouter":"../node_modules/react-router/es/MemoryRouter.js"}],"../node_modules/react-router-dom/es/Route.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Route = _interopRequireDefault(require("react-router/es/Route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Written in this round about way for babel-transform-imports
var _default = _Route.default;
exports.default = _default;
},{"react-router/es/Route":"../node_modules/react-router/es/Route.js"}],"../node_modules/react-router-dom/es/NavLink.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Route = _interopRequireDefault(require("./Route"));

var _Link = _interopRequireDefault(require("./Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      exact = _ref.exact,
      strict = _ref.strict,
      location = _ref.location,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      ariaCurrent = _ref["aria-current"],
      rest = _objectWithoutProperties(_ref, ["to", "exact", "strict", "location", "activeClassName", "className", "activeStyle", "style", "isActive", "aria-current"]);

  var path = (typeof to === "undefined" ? "undefined" : _typeof(to)) === "object" ? to.pathname : to; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

  var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
  return _react.default.createElement(_Route.default, {
    path: escapedPath,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;
      var isActive = !!(getIsActive ? getIsActive(match, location) : match);
      return _react.default.createElement(_Link.default, _extends({
        to: to,
        className: isActive ? [className, activeClassName].filter(function (i) {
          return i;
        }).join(" ") : className,
        style: isActive ? _extends({}, style, activeStyle) : style,
        "aria-current": isActive && ariaCurrent || null
      }, rest));
    }
  });
};

NavLink.propTypes = {
  to: _Link.default.propTypes.to,
  exact: _propTypes.default.bool,
  strict: _propTypes.default.bool,
  location: _propTypes.default.object,
  activeClassName: _propTypes.default.string,
  className: _propTypes.default.string,
  activeStyle: _propTypes.default.object,
  style: _propTypes.default.object,
  isActive: _propTypes.default.func,
  "aria-current": _propTypes.default.oneOf(["page", "step", "location", "date", "time", "true"])
};
NavLink.defaultProps = {
  activeClassName: "active",
  "aria-current": "page"
};
var _default = NavLink;
exports.default = _default;
},{"react":"../node_modules/react/index.js","prop-types":"../node_modules/prop-types/index.js","./Route":"../node_modules/react-router-dom/es/Route.js","./Link":"../node_modules/react-router-dom/es/Link.js"}],"../node_modules/react-router-dom/es/Prompt.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Prompt = _interopRequireDefault(require("react-router/es/Prompt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Written in this round about way for babel-transform-imports
var _default = _Prompt.default;
exports.default = _default;
},{"react-router/es/Prompt":"../node_modules/react-router/es/Prompt.js"}],"../node_modules/react-router-dom/es/Redirect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Redirect = _interopRequireDefault(require("react-router/es/Redirect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Written in this round about way for babel-transform-imports
var _default = _Redirect.default;
exports.default = _default;
},{"react-router/es/Redirect":"../node_modules/react-router/es/Redirect.js"}],"../node_modules/react-router-dom/es/StaticRouter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _StaticRouter = _interopRequireDefault(require("react-router/es/StaticRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Written in this round about way for babel-transform-imports
var _default = _StaticRouter.default;
exports.default = _default;
},{"react-router/es/StaticRouter":"../node_modules/react-router/es/StaticRouter.js"}],"../node_modules/react-router-dom/es/Switch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Switch = _interopRequireDefault(require("react-router/es/Switch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Written in this round about way for babel-transform-imports
var _default = _Switch.default;
exports.default = _default;
},{"react-router/es/Switch":"../node_modules/react-router/es/Switch.js"}],"../node_modules/react-router-dom/es/generatePath.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _generatePath = _interopRequireDefault(require("react-router/es/generatePath"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Written in this round about way for babel-transform-imports
var _default = _generatePath.default;
exports.default = _default;
},{"react-router/es/generatePath":"../node_modules/react-router/es/generatePath.js"}],"../node_modules/react-router-dom/es/matchPath.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _matchPath = _interopRequireDefault(require("react-router/es/matchPath"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Written in this round about way for babel-transform-imports
var _default = _matchPath.default;
exports.default = _default;
},{"react-router/es/matchPath":"../node_modules/react-router/es/matchPath.js"}],"../node_modules/react-router-dom/es/withRouter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _withRouter = _interopRequireDefault(require("react-router/es/withRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Written in this round about way for babel-transform-imports
var _default = _withRouter.default;
exports.default = _default;
},{"react-router/es/withRouter":"../node_modules/react-router/es/withRouter.js"}],"../node_modules/react-router-dom/es/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "BrowserRouter", {
  enumerable: true,
  get: function () {
    return _BrowserRouter2.default;
  }
});
Object.defineProperty(exports, "HashRouter", {
  enumerable: true,
  get: function () {
    return _HashRouter2.default;
  }
});
Object.defineProperty(exports, "Link", {
  enumerable: true,
  get: function () {
    return _Link2.default;
  }
});
Object.defineProperty(exports, "MemoryRouter", {
  enumerable: true,
  get: function () {
    return _MemoryRouter2.default;
  }
});
Object.defineProperty(exports, "NavLink", {
  enumerable: true,
  get: function () {
    return _NavLink2.default;
  }
});
Object.defineProperty(exports, "Prompt", {
  enumerable: true,
  get: function () {
    return _Prompt2.default;
  }
});
Object.defineProperty(exports, "Redirect", {
  enumerable: true,
  get: function () {
    return _Redirect2.default;
  }
});
Object.defineProperty(exports, "Route", {
  enumerable: true,
  get: function () {
    return _Route2.default;
  }
});
Object.defineProperty(exports, "Router", {
  enumerable: true,
  get: function () {
    return _Router2.default;
  }
});
Object.defineProperty(exports, "StaticRouter", {
  enumerable: true,
  get: function () {
    return _StaticRouter2.default;
  }
});
Object.defineProperty(exports, "Switch", {
  enumerable: true,
  get: function () {
    return _Switch2.default;
  }
});
Object.defineProperty(exports, "generatePath", {
  enumerable: true,
  get: function () {
    return _generatePath2.default;
  }
});
Object.defineProperty(exports, "matchPath", {
  enumerable: true,
  get: function () {
    return _matchPath2.default;
  }
});
Object.defineProperty(exports, "withRouter", {
  enumerable: true,
  get: function () {
    return _withRouter2.default;
  }
});

var _BrowserRouter2 = _interopRequireDefault(require("./BrowserRouter"));

var _HashRouter2 = _interopRequireDefault(require("./HashRouter"));

var _Link2 = _interopRequireDefault(require("./Link"));

var _MemoryRouter2 = _interopRequireDefault(require("./MemoryRouter"));

var _NavLink2 = _interopRequireDefault(require("./NavLink"));

var _Prompt2 = _interopRequireDefault(require("./Prompt"));

var _Redirect2 = _interopRequireDefault(require("./Redirect"));

var _Route2 = _interopRequireDefault(require("./Route"));

var _Router2 = _interopRequireDefault(require("./Router"));

var _StaticRouter2 = _interopRequireDefault(require("./StaticRouter"));

var _Switch2 = _interopRequireDefault(require("./Switch"));

var _generatePath2 = _interopRequireDefault(require("./generatePath"));

var _matchPath2 = _interopRequireDefault(require("./matchPath"));

var _withRouter2 = _interopRequireDefault(require("./withRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./BrowserRouter":"../node_modules/react-router-dom/es/BrowserRouter.js","./HashRouter":"../node_modules/react-router-dom/es/HashRouter.js","./Link":"../node_modules/react-router-dom/es/Link.js","./MemoryRouter":"../node_modules/react-router-dom/es/MemoryRouter.js","./NavLink":"../node_modules/react-router-dom/es/NavLink.js","./Prompt":"../node_modules/react-router-dom/es/Prompt.js","./Redirect":"../node_modules/react-router-dom/es/Redirect.js","./Route":"../node_modules/react-router-dom/es/Route.js","./Router":"../node_modules/react-router-dom/es/Router.js","./StaticRouter":"../node_modules/react-router-dom/es/StaticRouter.js","./Switch":"../node_modules/react-router-dom/es/Switch.js","./generatePath":"../node_modules/react-router-dom/es/generatePath.js","./matchPath":"../node_modules/react-router-dom/es/matchPath.js","./withRouter":"../node_modules/react-router-dom/es/withRouter.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52190" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/es.b930524a.map