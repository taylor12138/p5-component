function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/* eslint-disable react/jsx-key */
import React, { useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import Title from "../Title";
import akechi from "./assets/akechi.png";
import ann from "./assets/ann.png";
import futaba from "./assets/futaba.png";
import haru from "./assets/haru.png";
import lavenza from "./assets/lavenza.png";
import makoto from "./assets/makoto.png";
import mona from "./assets/mona.png";
import ryuji from "./assets/ryuji.png";
import sumire from "./assets/sumire.png";
import yusuke from "./assets/yusuke.png";
import notification from "./assets/notification.png";
import "./index.less";
var character_data = [{
  chinese: '摩尔 加纳',
  eng: 'mona'
}, {
  chinese: '坂本 龙司',
  eng: 'ryuji'
}, {
  chinese: '高卷 杏',
  eng: 'ann'
}, {
  chinese: '喜多川 祐介',
  eng: 'yusuke'
}, {
  chinese: '新岛 真',
  eng: 'makoto'
}, {
  chinese: '佐仓 双叶',
  eng: 'futaba'
}, {
  chinese: '奥村 春',
  eng: 'haru'
}, {
  chinese: '明智 吾郎',
  eng: 'akechi'
}, {
  chinese: '芳泽 霞',
  eng: 'kasumi'
}, {
  chinese: '芳泽 堇',
  eng: 'sumire'
}, {
  chinese: '拉雯妲',
  eng: 'lavenza'
}];
function DialogBox(_ref) {
  var _character_data$find;
  var top = _ref.top,
    left = _ref.left,
    character = _ref.character,
    content = _ref.content,
    handleClose = _ref.handleClose;
  var image = useMemo(function () {
    switch (character) {
      case 'akechi':
        return akechi;
      case 'ann':
        return ann;
      case 'futaba':
        return futaba;
      case 'lavenza':
        return lavenza;
      case 'haru':
        return haru;
      case 'makoto':
        return makoto;
      case 'yusuke':
        return yusuke;
      case 'mona':
        return mona;
      case 'ryuji':
        return ryuji;
      case 'kasumi':
        return sumire;
      default:
        return sumire;
    }
  }, [character]);
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    currentLeft = _useState2[0],
    setCurrentLeft = _useState2[1];
  useEffect(function () {
    setTimeout(function () {
      setCurrentLeft(left);
    }, 0);
  }, [left]);
  var chineseName = ((_character_data$find = character_data.find(function (item) {
    return item.eng === character;
  })) === null || _character_data$find === void 0 ? void 0 : _character_data$find.chinese) || '';
  return /*#__PURE__*/React.createElement("div", {
    className: "p5-noti-ctn",
    style: {
      top: top + 'px',
      left: currentLeft + 'px'
    },
    onClick: handleClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "p5-noti-sub-ctn"
  }, /*#__PURE__*/React.createElement("img", {
    className: "p5-portrait-img",
    src: image,
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "p5-dialog-ctn"
  }, /*#__PURE__*/React.createElement("img", {
    className: "p5-dialog-img",
    src: notification,
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "p5-noti-title"
  }, /*#__PURE__*/React.createElement(Title, {
    content: chineseName
  })), /*#__PURE__*/React.createElement("div", {
    className: "p5-noti-text"
  }, content))));
}
var showing = false;
export var showDialog = function showDialog(_ref2) {
  var top = _ref2.top,
    left = _ref2.left,
    content = _ref2.content,
    _ref2$character = _ref2.character,
    character = _ref2$character === void 0 ? 'kasumi' : _ref2$character;
  if (showing) {
    return function () {
      console.log('already showing');
    };
  }
  showing = true;
  var container = document.createElement('div');
  document.body.appendChild(container);

  //@ts-ignore
  var root = ReactDOM.createRoot(container); // 使用 createRoot 创建 root

  var handleClose = function handleClose() {
    if (!showing) {
      return;
    }
    showing = false;

    // 卸载并移除 DOM 节点
    root.unmount();
    document.body.removeChild(container);
  };
  root.render( /*#__PURE__*/React.createElement(DialogBox, {
    top: top,
    left: left,
    content: content,
    character: character,
    handleClose: handleClose
  }));
  console.log('Dialog rendered to body');
  return handleClose;
};
export default DialogBox;