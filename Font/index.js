var _excluded = ["className", "children"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useMemo } from 'react';
import "../global.less";
import "./index.less";
var ardVersionPattern = /Android\s+([\d.]+);/i;
var userAgent = navigator.userAgent;
export var IS_ANDROID = !!userAgent.match(ardVersionPattern);
export var getAndroidMainVersion = function getAndroidMainVersion() {
  var match = userAgent.match(ardVersionPattern);
  return match ? parseFloat(match[1]) : 0;
};

// 安卓6以下不用字体
var supportFontFace = !IS_ANDROID || getAndroidMainVersion() >= 6;
function Font(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    children = _ref.children,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var fontClassName = useMemo(function () {
    if (supportFontFace) {
      // 方正盛世楷书简体_中
      return "".concat(className, " font-fz");
    }
    return className;
  }, [className]);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: fontClassName
  }, restProps), children);
}
export default Font;