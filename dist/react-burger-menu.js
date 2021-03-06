(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.BurgerMenu = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
}
var _react = typeof window !== 'undefined' ? window['React'] : typeof global !== 'undefined' ? global['React'] : null;
var _react2 = _interopRequireDefault(_react);
var _radium = typeof window !== 'undefined' ? window['Radium'] : typeof global !== 'undefined' ? global['Radium'] : null;
var _radium2 = _interopRequireDefault(_radium);
var BurgerIcon = (0, _radium2['default'])(_react2['default'].createClass({
        getLineStyle: function getLineStyle(index) {
            return {
                position: 'absolute',
                height: '20%',
                left: 0,
                right: 0,
                top: 20 * (index * 2) + '%',
                opacity: this.state.hover ? 0.6 : 1
            };
        },
        handleHover: function handleHover() {
            this.setState({ hover: !this.state.hover });
        },
        getInitialState: function getInitialState() {
            return { hover: false };
        },
        render: function render() {
            var buttonStyle = {
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    margin: 0,
                    padding: 0,
                    border: 'none',
                    fontSize: 14,
                    color: 'transparent',
                    background: 'transparent',
                    outline: 'none'
                };
            return _react2['default'].createElement('div', {
                className: 'bm-burger-button',
                style: { zIndex: 1 }
            }, _react2['default'].createElement('span', {
                className: 'bm-burger-bars',
                style: this.getLineStyle(0)
            }), _react2['default'].createElement('span', {
                className: 'bm-burger-bars',
                style: this.getLineStyle(1)
            }), _react2['default'].createElement('span', {
                className: 'bm-burger-bars',
                style: this.getLineStyle(2)
            }), _react2['default'].createElement('button', {
                onClick: this.props.onClick,
                onMouseEnter: this.handleHover,
                onMouseLeave: this.handleHover,
                style: buttonStyle
            }, 'Open Menu'));
        }
    }));
exports['default'] = BurgerIcon;
module.exports = exports['default'];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports['default'] = {
    slide: require('./menus/slide'),
    stack: require('./menus/stack'),
    elastic: require('./menus/elastic'),
    bubble: require('./menus/bubble'),
    push: require('./menus/push'),
    pushRotate: require('./menus/pushRotate'),
    scaleDown: require('./menus/scaleDown'),
    scaleRotate: require('./menus/scaleRotate'),
    fallDown: require('./menus/fallDown')
};
module.exports = exports['default'];
},{"./menus/bubble":6,"./menus/elastic":7,"./menus/fallDown":8,"./menus/push":9,"./menus/pushRotate":10,"./menus/scaleDown":11,"./menus/scaleRotate":12,"./menus/slide":13,"./menus/stack":14}],3:[function(require,module,exports){
(function (global){
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
}
var _react = typeof window !== 'undefined' ? window['React'] : typeof global !== 'undefined' ? global['React'] : null;
var _react2 = _interopRequireDefault(_react);
var _radium = typeof window !== 'undefined' ? window['Radium'] : typeof global !== 'undefined' ? global['Radium'] : null;
var _radium2 = _interopRequireDefault(_radium);
var CrossIcon = (0, _radium2['default'])(_react2['default'].createClass({
        getCrossStyle: function getCrossStyle(type) {
            return {
                position: 'absolute',
                width: 3,
                height: 14,
                top: 14,
                right: 18,
                cursor: 'pointer',
                transform: type === 'before' ? 'rotate(45deg)' : 'rotate(-45deg)',
                zIndex: 1
            };
        },
        render: function render() {
            var buttonStyle = {
                    width: 14,
                    height: 14,
                    position: 'absolute',
                    right: 13,
                    top: 14,
                    padding: 0,
                    overflow: 'hidden',
                    textIndent: 14,
                    fontSize: 14,
                    border: 'none',
                    background: 'transparent',
                    color: 'transparent',
                    outline: 'none',
                    zIndex: 1
                };
            return _react2['default'].createElement('div', null, _react2['default'].createElement('span', {
                className: 'bm-cross',
                style: this.getCrossStyle('before')
            }), _react2['default'].createElement('span', {
                className: 'bm-cross',
                style: this.getCrossStyle('after')
            }), _react2['default'].createElement('button', {
                onClick: this.props.onClick,
                style: buttonStyle
            }, 'Close Menu'));
        }
    }));
exports['default'] = CrossIcon;
module.exports = exports['default'];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var styles = {
        overlay: function overlay(isOpen) {
            return {
                position: 'fixed',
                zIndex: 1,
                width: '100%',
                height: '100%',
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)',
                transition: isOpen ? 'opacity 0.3s' : 'opacity 0.3s, transform 0s 0.3s'
            };
        },
        menuWrap: function menuWrap(isOpen, width, right) {
            return {
                position: 'fixed',
                right: right ? 0 : 'inherit',
                zIndex: 2,
                width: width,
                height: '100%',
                transform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
                transition: 'all 0.5s'
            };
        },
        menu: function menu() {
            return {
                height: '100%',
                boxSizing: 'border-box'
            };
        },
        itemList: function itemList() {
            return { height: '100%' };
        },
        item: function item() {
            return {
                display: 'block',
                outline: 'none'
            };
        }
    };
exports['default'] = styles;
module.exports = exports['default'];
},{}],5:[function(require,module,exports){
(function (global){
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
}
var _react = typeof window !== 'undefined' ? window['React'] : typeof global !== 'undefined' ? global['React'] : null;
var _react2 = _interopRequireDefault(_react);
var _radium = typeof window !== 'undefined' ? window['Radium'] : typeof global !== 'undefined' ? global['Radium'] : null;
var _radium2 = _interopRequireDefault(_radium);
var _baseStyles = require('./baseStyles');
var _baseStyles2 = _interopRequireDefault(_baseStyles);
var _BurgerIcon = require('./BurgerIcon');
var _BurgerIcon2 = _interopRequireDefault(_BurgerIcon);
var _CrossIcon = require('./CrossIcon');
var _CrossIcon2 = _interopRequireDefault(_CrossIcon);
exports['default'] = function (styles) {
    return (0, _radium2['default'])(_react2['default'].createClass({
        propTypes: {
            id: _react2['default'].PropTypes.string,
            isOpen: _react2['default'].PropTypes.bool,
            onStateChange: _react2['default'].PropTypes.func,
            outerContainerId: _react2['default'].PropTypes.string,
            pageWrapId: _react2['default'].PropTypes.string,
            right: _react2['default'].PropTypes.bool,
            width: _react2['default'].PropTypes.number
        },
        toggleMenu: function toggleMenu() {
            this.applyWrapperStyles();
            var newState = { isOpen: !this.state.isOpen };
            this.setState(newState, this.props.onStateChange.bind(null, newState));
        },
        applyWrapperStyles: function applyWrapperStyles() {
            if (styles.pageWrap && this.props.pageWrapId) {
                this.handleExternalWrapper(this.props.pageWrapId, styles.pageWrap, true);
            }
            if (styles.outerContainer && this.props.outerContainerId) {
                this.handleExternalWrapper(this.props.outerContainerId, styles.outerContainer, true);
            }
        },
        clearWrapperStyles: function clearWrapperStyles() {
            if (styles.pageWrap && this.props.pageWrapId) {
                this.handleExternalWrapper(this.props.pageWrapId, styles.pageWrap, false);
            }
            if (styles.outerContainer && this.props.outerContainerId) {
                this.handleExternalWrapper(this.props.outerContainerId, styles.outerContainer, false);
            }
        },
        handleExternalWrapper: function handleExternalWrapper(id, wrapperStyles, set) {
            var html = document.getElementsByTagName('html')[0];
            var body = document.getElementsByTagName('body')[0];
            var wrapper = document.getElementById(id);
            if (!wrapper) {
                console.error('Element with ID \'' + id + '\' not found');
                return;
            }
            wrapperStyles = wrapperStyles(this.state.isOpen, this.props.width, this.props.right);
            for (var prop in wrapperStyles) {
                if (wrapperStyles.hasOwnProperty(prop)) {
                    wrapper.style[prop] = set ? wrapperStyles[prop] : '';
                }
            }
            [
                html,
                body
            ].forEach(function (element) {
                element.style['overflow-x'] = set ? 'hidden' : '';
            });
        },
        listenForClose: function listenForClose(e) {
            e = e || window.event;
            if (this.state.isOpen && (e.key === 'Escape' || e.keyCode === 27)) {
                this.toggleMenu();
            }
        },
        getDefaultProps: function getDefaultProps() {
            return {
                id: '',
                isOpen: false,
                onStateChange: function onStateChange() {
                },
                outerContainerId: '',
                pageWrapId: '',
                right: false,
                width: 300
            };
        },
        getInitialState: function getInitialState() {
            return { isOpen: false };
        },
        componentWillMount: function componentWillMount() {
            if (!styles) {
                throw new Error('No styles supplied');
            }
            if (styles.pageWrap && !this.props.pageWrapId) {
                console.warn('No pageWrapId supplied');
            }
            if (styles.outerContainer && !this.props.outerContainerId) {
                console.warn('No outerContainerId supplied');
            }
            if (this.props.isOpen !== this.state.isOpen) {
                this.toggleMenu();
            }
        },
        componentDidMount: function componentDidMount() {
            window.onkeydown = this.listenForClose;
        },
        componentWillUnmount: function componentWillUnmount() {
            window.onkeydown = null;
            this.clearWrapperStyles();
        },
        componentDidUpdate: function componentDidUpdate() {
            var _this = this;
            if (styles.svg && this.isMounted()) {
                (function () {
                    var snap = undefined;
                    try {
                        snap = function () {
                            throw new Error('Cannot find module \'imports?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js\' from \'/home/development/Documents/projects/react-burger-menu/src\'');
                        }();
                    } catch (e) {
                        snap = typeof window !== 'undefined' ? window['Snap'] : typeof global !== 'undefined' ? global['Snap'] : null;
                    }
                    var morphShape = document.getElementsByClassName('bm-morph-shape')[0];
                    var s = snap(morphShape);
                    var path = s.select('path');
                    if (_this.state.isOpen) {
                        styles.svg.animate(path);
                    } else {
                        setTimeout(function () {
                            path.attr('d', styles.svg.pathInitial);
                        }, 300);
                    }
                }());
            }
        },
        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
            if (nextProps.isOpen !== this.state.isOpen) {
                this.toggleMenu();
            }
        },
        render: function render() {
            var _this2 = this;
            var items = undefined, svg = undefined;
            var menuWrapStyles = [_baseStyles2['default'].menuWrap(this.state.isOpen, this.props.width, this.props.right)];
            var menuStyles = [_baseStyles2['default'].menu(this.state.isOpen)];
            var itemListStyles = [_baseStyles2['default'].itemList()];
            var closeButtonStyles = undefined;
            if (styles.menuWrap) {
                menuWrapStyles.push(styles.menuWrap(this.state.isOpen, this.props.width, this.props.right));
            }
            if (styles.menu) {
                menuStyles.push(styles.menu(this.state.isOpen, this.props.width, this.props.right));
            }
            if (styles.itemList) {
                itemListStyles.push(styles.itemList(this.props.right));
            }
            if (styles.closeButton) {
                closeButtonStyles = styles.closeButton(this.state.isOpen, this.props.width, this.props.right);
            }
            if (this.props.children) {
                items = _react2['default'].Children.map(this.props.children, function (item, index) {
                    var itemStyles = [_baseStyles2['default'].item(_this2.state.isOpen)];
                    if (styles.item) {
                        itemStyles.push(styles.item(_this2.state.isOpen, _this2.props.width, index + 1, _this2.props.right));
                    }
                    var extraProps = {
                            key: index,
                            style: itemStyles
                        };
                    return _react2['default'].cloneElement(item, extraProps);
                });
            }
            if (styles.svg) {
                svg = _react2['default'].createElement('div', {
                    className: 'bm-morph-shape',
                    style: styles.morphShape(this.props.right)
                }, _react2['default'].createElement('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    width: '100%',
                    height: '100%',
                    viewBox: '0 0 100 800',
                    preserveAspectRatio: 'none'
                }, _react2['default'].createElement('path', { d: styles.svg.pathInitial })));
            }
            return _react2['default'].createElement('div', null, _react2['default'].createElement('div', {
                id: this.props.id,
                className: 'bm-menu-wrap',
                style: menuWrapStyles
            }, svg, _react2['default'].createElement('div', {
                className: 'bm-menu',
                style: menuStyles
            }, _react2['default'].createElement('nav', {
                className: 'bm-item-list',
                style: itemListStyles
            }, items)), _react2['default'].createElement('div', { style: closeButtonStyles }, _react2['default'].createElement(_CrossIcon2['default'], { onClick: this.toggleMenu }))), _react2['default'].createElement(_BurgerIcon2['default'], { onClick: this.toggleMenu }));
        }
    }));
};
module.exports = exports['default'];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./BurgerIcon":1,"./CrossIcon":3,"./baseStyles":4}],6:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
}
var _menuFactory = require('../menuFactory');
var _menuFactory2 = _interopRequireDefault(_menuFactory);
var styles = {
        svg: {
            pathInitial: 'M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z',
            pathOpen: 'M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z',
            animate: function animate(path) {
                var pos = 0;
                var steps = this.pathOpen.split(';');
                var stepsTotal = steps.length;
                var mina = window.mina;
                var nextStep = function nextStep() {
                    if (pos > stepsTotal - 1)
                        return;
                    path.animate({ path: steps[pos] }, pos === 0 ? 400 : 500, pos === 0 ? mina.easein : mina.elastic, function () {
                        nextStep();
                    });
                    pos++;
                };
                nextStep();
            }
        },
        morphShape: function morphShape(right) {
            return {
                position: 'fixed',
                width: '100%',
                height: '100%',
                right: right ? 'inherit' : 0,
                left: right ? 0 : 'inherit',
                transform: right ? 'rotateY(180deg)' : 'rotateY(0deg)'
            };
        },
        menuWrap: function menuWrap(isOpen, width, right) {
            return {
                transform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
                transition: isOpen ? 'transform 0.4s 0s' : 'transform 0.4s'
            };
        },
        menu: function menu(isOpen, width, right) {
            width -= 140;
            return {
                position: 'fixed',
                transform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(' + width + 'px, 0, 0)' : 'translate3d(-' + width + 'px, 0, 0)',
                transition: isOpen ? 'opacity 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27)' : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
                opacity: isOpen ? 1 : 0
            };
        },
        item: function item(isOpen, width, nthChild, right) {
            width -= 140;
            return {
                transform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(' + width + 'px, 0, 0)' : 'translate3d(-' + width + 'px, 0, 0)',
                transition: isOpen ? 'opacity 0.3s 0.4s, transform 0.3s 0.4s' : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
                opacity: isOpen ? 1 : 0
            };
        },
        closeButton: function closeButton(isOpen, width, right) {
            width -= 140;
            return {
                transform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(' + width + 'px, 0, 0)' : 'translate3d(-' + width + 'px, 0, 0)',
                transition: isOpen ? 'opacity 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27)' : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
                opacity: isOpen ? 1 : 0
            };
        }
    };
exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];
},{"../menuFactory":5}],7:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
}
var _menuFactory = require('../menuFactory');
var _menuFactory2 = _interopRequireDefault(_menuFactory);
var styles = {
        svg: {
            pathInitial: 'M-1,0h101c0,0-97.833,153.603-97.833,396.167C2.167,627.579,100,800,100,800H-1V0z',
            pathOpen: 'M-1,0h101c0,0,0-1,0,395c0,404,0,405,0,405H-1V0z',
            animate: function animate(path) {
                path.animate({ path: this.pathOpen }, 400, window.mina.easeinout);
            }
        },
        morphShape: function morphShape(right) {
            return {
                position: 'fixed',
                width: 120,
                height: '100%',
                right: right ? 'inherit' : 0,
                left: right ? 0 : 'inherit',
                transform: right ? 'rotateY(180deg)' : ''
            };
        },
        menuWrap: function menuWrap(isOpen, width, right) {
            return {
                transform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
                transition: 'all 0.3s'
            };
        },
        menu: function menu(isOpen, width, right) {
            return {
                position: 'fixed',
                right: right ? 0 : 'inherit',
                width: 'calc(100% - 120px)',
                whiteSpace: 'nowrap',
                boxSizing: 'border-box'
            };
        },
        itemList: function itemList(right) {
            if (right) {
                return {
                    position: 'relative',
                    left: '-110px'
                };
            }
        },
        pageWrap: function pageWrap(isOpen, width, right) {
            return {
                transform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(-100px, 0, 0)' : 'translate3d(100px, 0, 0)',
                transition: isOpen ? 'all 0.3s' : 'all 0.3s 0.1s'
            };
        },
        outerContainer: function outerContainer(isOpen) {
            return { overflow: isOpen ? '' : 'hidden' };
        }
    };
exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];
},{"../menuFactory":5}],8:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
}
var _menuFactory = require('../menuFactory');
var _menuFactory2 = _interopRequireDefault(_menuFactory);
var styles = {
        menuWrap: function menuWrap(isOpen) {
            return {
                transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(0, -100%, 0)',
                transition: 'all 0.5s ease-in-out'
            };
        },
        pageWrap: function pageWrap(isOpen, width, right) {
            return {
                transform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(-' + width + 'px, 0, 0)' : 'translate3d(' + width + 'px, 0, 0)',
                transition: 'all 0.5s'
            };
        },
        outerContainer: function outerContainer(isOpen) {
            return {
                perspective: '1500px',
                perspectiveOrigin: '0% 50%',
                overflow: isOpen ? '' : 'hidden'
            };
        }
    };
exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];
},{"../menuFactory":5}],9:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
}
var _menuFactory = require('../menuFactory');
var _menuFactory2 = _interopRequireDefault(_menuFactory);
var styles = {
        pageWrap: function pageWrap(isOpen, width, right) {
            return {
                transform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(-' + width + 'px, 0, 0)' : 'translate3d(' + width + 'px, 0, 0)',
                transition: 'all 0.5s'
            };
        },
        outerContainer: function outerContainer(isOpen) {
            return { overflow: isOpen ? '' : 'hidden' };
        }
    };
exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];
},{"../menuFactory":5}],10:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
}
var _menuFactory = require('../menuFactory');
var _menuFactory2 = _interopRequireDefault(_menuFactory);
var styles = {
        pageWrap: function pageWrap(isOpen, width, right) {
            return {
                transform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(-' + width + 'px, 0, 0) rotateY(15deg)' : 'translate3d(' + width + 'px, 0, 0) rotateY(-15deg)',
                transformOrigin: right ? '100% 50%' : '0% 50%',
                transformStyle: 'preserve-3d',
                transition: 'all 0.5s'
            };
        },
        outerContainer: function outerContainer(isOpen) {
            return {
                perspective: '1500px',
                overflow: isOpen ? '' : 'hidden'
            };
        }
    };
exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];
},{"../menuFactory":5}],11:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
}
var _menuFactory = require('../menuFactory');
var _menuFactory2 = _interopRequireDefault(_menuFactory);
var styles = {
        pageWrap: function pageWrap(isOpen, width) {
            return {
                transform: isOpen ? 'translate3d(0, 0, -1px)' : 'translate3d(0, 0, -' + width + 'px)',
                transformOrigin: '100%',
                transformStyle: 'preserve-3d',
                transition: 'all 0.5s'
            };
        },
        outerContainer: function outerContainer() {
            return { perspective: '1500px' };
        }
    };
exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];
},{"../menuFactory":5}],12:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
}
var _menuFactory = require('../menuFactory');
var _menuFactory2 = _interopRequireDefault(_menuFactory);
var styles = {
        pageWrap: function pageWrap(isOpen, width, right) {
            return {
                transform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(-100px, 0, -600px) rotateY(20deg)' : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
                transformStyle: 'preserve-3d',
                transition: 'all 0.5s',
                overflow: isOpen ? '' : 'hidden'
            };
        },
        outerContainer: function outerContainer(isOpen) {
            return {
                perspective: '1500px',
                overflow: isOpen ? '' : 'hidden'
            };
        }
    };
exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];
},{"../menuFactory":5}],13:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
}
var _menuFactory = require('../menuFactory');
var _menuFactory2 = _interopRequireDefault(_menuFactory);
var styles = {};
exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];
},{"../menuFactory":5}],14:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
}
var _menuFactory = require('../menuFactory');
var _menuFactory2 = _interopRequireDefault(_menuFactory);
var styles = {
        menuWrap: function menuWrap(isOpen, width, right) {
            width += 20;
            return {
                transform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(' + width + 'px, 0, 0)' : 'translate3d(-' + width + 'px, 0, 0)',
                transition: isOpen ? 'transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)' : 'transform 0.4s cubic-bezier(0.7, 0, 0.3, 1)'
            };
        },
        item: function item(isOpen, width, nthChild) {
            return {
                transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(0, ' + nthChild * 500 + 'px, 0)',
                transition: isOpen ? 'transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)' : 'transform 0s 0.2s cubic-bezier(0.7, 0, 0.3, 1)'
            };
        }
    };
exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];
},{"../menuFactory":5}]},{},[2])(2)
});