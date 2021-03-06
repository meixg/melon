(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', '../Icon', 'melon-core/classname/cxBuilder', '../babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('../Icon'), require('melon-core/classname/cxBuilder'), require('../babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.Icon, global.cxBuilder, global.babelHelpers);
        global.Selector = mod.exports;
    }
})(this, function (exports, _react, _Icon, _cxBuilder, babelHelpers) {
    'use strict';

    exports.__esModule = true;

    var _react2 = babelHelpers.interopRequireDefault(_react);

    var _Icon2 = babelHelpers.interopRequireDefault(_Icon);

    /**
     * @file melon/region/Selector
     * @author cxtom(cxtom2008@gmail.com)
     */

    var cx = (0, _cxBuilder.create)('RegionSelector');

    var RegionSelector = function (_Component) {
        babelHelpers.inherits(RegionSelector, _Component);

        function RegionSelector(props) {
            babelHelpers.classCallCheck(this, RegionSelector);

            var _this = babelHelpers.possibleConstructorReturn(this, _Component.call(this, props));

            _this.onClick = _this.onClick.bind(_this);

            return _this;
        }

        RegionSelector.prototype.onClick = function onClick(e) {
            var _props = this.props,
                onChange = _props.onChange,
                checked = _props.checked;


            onChange && onChange({
                value: !checked,
                target: this
            });
        };

        RegionSelector.prototype.getIcon = function getIcon(isChecked) {
            var icons = RegionSelector.Icons;
            return icons[isChecked ? 'checked' : 'unchecked'];
        };

        RegionSelector.prototype.render = function render() {
            var _props2 = this.props,
                checked = _props2.checked,
                disabled = _props2.disabled,
                hasInput = _props2.hasInput,
                value = _props2.value,
                name = _props2.name,
                label = _props2.label,
                id = _props2.id;


            var className = cx(this.props).addStates({ checked: checked }).build();

            return _react2['default'].createElement(
                'label',
                { className: className, 'data-region-id': id, onClick: this.onClick },
                hasInput ? _react2['default'].createElement('input', {
                    disabled: disabled,
                    checked: checked,
                    type: 'checkbox',
                    value: value,
                    name: name }) : null,
                _react2['default'].createElement(_Icon2['default'], { icon: this.getIcon(checked) }),
                label
            );
        };

        return RegionSelector;
    }(_react.Component);

    exports['default'] = RegionSelector;


    RegionSelector.displayName = 'RegionSelector';

    RegionSelector.defaultProps = {
        hasInput: false
    };

    RegionSelector.propTypes = {
        label: _react.PropTypes.string,
        value: _react.PropTypes.string,
        checked: _react.PropTypes.bool,
        name: _react.PropTypes.string,
        disabled: _react.PropTypes.bool,
        id: _react.PropTypes.string,
        hasInput: _react.PropTypes.bool,
        onChange: _react.PropTypes.func
    };

    RegionSelector.Icons = {
        checked: 'check-box',
        unchecked: 'check-box-outline-blank'
    };
});
//# sourceMappingURL=Selector.js.map
