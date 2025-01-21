function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useCallback, useMemo, useState } from 'react';
import "../global.less";
import "./index.less";
function Range(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$modelValue = _ref.modelValue,
    modelValue = _ref$modelValue === void 0 ? true : _ref$modelValue,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isShow = _useState2[0],
    setIsShow = _useState2[1];
  var _useState3 = useState(modelValue),
    _useState4 = _slicedToArray(_useState3, 2),
    value = _useState4[0],
    setVal = _useState4[1];

  // 设置switch大小
  var setSwitchSize = useMemo(function () {
    return "p5-switch-size-".concat(size);
  }, [size]);
  var onChange = useCallback(function (e) {
    setVal(e.target.checked);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: value ? "p5-switch-ctn p5-switch-on ".concat(setSwitchSize, " ").concat(className) : " p5-switch-ctn p5-switch-off ".concat(setSwitchSize, " ").concat(className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "p5-switch-bg-ctn"
  }, /*#__PURE__*/React.createElement("span", {
    className: isShow ? 'p5-switch-bg-move p5-switch-bg' : 'p5-switch-bg'
  })), /*#__PURE__*/React.createElement("span", {
    className: "p5-switch-icon"
  }), /*#__PURE__*/React.createElement("span", {
    className: isShow ? 'p5-switch-sub-icon' : ''
  }), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    onClick: onChange,
    onMouseEnter: function onMouseEnter() {
      setIsShow(true);
    },
    onMouseLeave: function onMouseLeave() {
      setIsShow(false);
    }
  }));
}
export default Range;