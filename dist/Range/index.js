function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useMemo, useState } from 'react';
import "../global.less";
import "./index.less";
function Range(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    max = _ref.max,
    min = _ref.min,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? 'top' : _ref$placement;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isShow = _useState2[0],
    setIsShow = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    value = _useState4[0],
    setValue = _useState4[1];
  var iconPosition = useMemo(function () {
    var _document$querySelect;
    var width = (_document$querySelect = document.querySelector('#volume')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.clientWidth;
    console.log(width, value, 'width');
    if (!value || !width) {
      return {
        left: '0px',
        top: placement === 'top' ? '-30px' : '24px'
      };
    }
    var val = +value;
    var left = (val - min) / (max - min) * (width - 14) - 4;
    console.log(val, max);
    return {
      left: "".concat(left, "px"),
      top: placement === 'top' ? '-30px' : '24px'
    };
  }, [max, min, placement, value]);
  return /*#__PURE__*/React.createElement("div", {
    className: "p5-range ".concat(className),
    onMouseEnter: function onMouseEnter() {
      setIsShow(true);
    },
    onMouseLeave: function onMouseLeave() {
      setIsShow(false);
    }
  }, isShow && /*#__PURE__*/React.createElement("span", {
    className: "p5-slider-icon p5-text",
    style: {
      left: iconPosition.left,
      top: iconPosition.top
    }
  }, value), /*#__PURE__*/React.createElement("input", {
    className: isShow ? "p5-slider-progress p5-slider-progress-hover" : "p5-slider-progress p5-slider-progress-static",
    type: "range",
    id: "volume",
    name: "volume",
    min: min,
    max: max,
    onChange: function onChange(v) {
      setValue(v.target.value);
    }
  }));
}
export default Range;