/* eslint-disable react/jsx-key */
import React, { useMemo } from 'react';
import "./index.less";
function Title(_ref) {
  var content = _ref.content,
    _ref$selected_font_co = _ref.selected_font_color,
    selected_font_color = _ref$selected_font_co === void 0 ? '#fff' : _ref$selected_font_co,
    _ref$font_color = _ref.font_color,
    font_color = _ref$font_color === void 0 ? '#000' : _ref$font_color,
    _ref$selected_bg_colo = _ref.selected_bg_color,
    selected_bg_color = _ref$selected_bg_colo === void 0 ? '#000' : _ref$selected_bg_colo;
  // 选择需要添加特殊样式的字符
  var getSelectedIdx = useMemo(function () {
    var check_list = [' ', ',', '，', '.', '。', '!', '！', '?', '？'];
    var idx_map = check_list.includes(content[1]) ? {} : {
      1: 1
    };
    for (var i = 2; i < content.length; i++) {
      if (!check_list.includes(content[i]) && check_list.includes(content[i - 2])) idx_map[i] = 1;
    }
    return idx_map;
  }, [content]);
  var getSpanStyle = function getSpanStyle(idx) {
    var degree = Math.random() < 0.5 ? Math.random() * 10 : -Math.random() * 10;
    return {
      color: (getSelectedIdx === null || getSelectedIdx === void 0 ? void 0 : getSelectedIdx[idx]) === 1 ? selected_font_color : font_color,
      'background-color': (getSelectedIdx === null || getSelectedIdx === void 0 ? void 0 : getSelectedIdx[idx]) === 1 ? selected_bg_color : '',
      transform: "rotate(".concat(degree, "deg)")
    };
  };
  var contentArr = content.split('');
  return /*#__PURE__*/React.createElement("p", {
    className: "p5-title-ctn"
  }, contentArr === null || contentArr === void 0 ? void 0 : contentArr.map(function (str, index) {
    return /*#__PURE__*/React.createElement("span", {
      style: getSpanStyle(index)
    }, str);
  }));
}
export default Title;