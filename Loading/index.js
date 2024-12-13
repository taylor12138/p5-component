import React, { useEffect, useRef } from 'react';
import c0 from "./crowd/crowd0.png";
import c1 from "./crowd/crowd1.png";
import c2 from "./crowd/crowd2.png";
import c3 from "./crowd/crowd3.png";
import c4 from "./crowd/crowd4.png";
import c5 from "./crowd/crowd5.png";
import c6 from "./crowd/crowd6.png";
import c7 from "./crowd/crowd7.png";
import c8 from "./crowd/crowd8.png";
import c9 from "./crowd/crowd9.png";
import c10 from "./crowd/crowd10.png";
import c11 from "./crowd/crowd11.png";
var crowd_imgs = [c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11];
var img_list = [];
var img_num = crowd_imgs.length;
var img_set = new Set();
var default_config = {
  width: window.innerWidth,
  height: window.innerHeight,
  loop: true,
  pause: false,
  fixed: false,
  end: false,
  resize: false,
  opacity: 1,
  step: 2
};
var initImgList = function initImgList() {
  var canvas = document.querySelector('#p5-loading-crowd');
  if (!canvas) {
    return;
  }
  var width = canvas.width;
  for (var i = 0; i < img_num * 2; i++) {
    var img = crowd_imgs[i % img_num];
    var temp_img = new Image();
    temp_img.src = img;
    img_list.push({
      img: temp_img,
      step: Math.random() * 2 + 2,
      step_y: Math.random() * 0.2 + 0.2,
      x: width + i * 100,
      y: 20,
      flag_x: i < img_num ? true : false,
      flag_y: true,
      idx: i
    });
  }
};
var updateImgList = function updateImgList() {
  var canvas = document.querySelector('#p5-loading-crowd');
  if (!canvas) {
    return;
  }
  var width = canvas.width;
  img_set.clear();
  default_config.end = false;
  img_list.forEach(function (item, idx) {
    item.step = Math.random() * default_config.step + default_config.step;
    item.step_y = Math.random() * 0.2 + 0.2;
    item.x = width + idx * 100;
  });
};
var render = function render() {
  var canvas = document.querySelector('#p5-loading-crowd');
  if (!canvas) {
    return;
  }
  var ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }
  var width = canvas.width;
  var height = canvas.height;
  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();
  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.fillRect(0, 0, width, height);
  img_list.forEach(function (item) {
    if (item.img.complete) {
      if (item.x >= -item.img.width) {
        item.x -= item.step;
        if (item.flag_y) {
          if (item.y - item.step_y >= 0) item.y -= item.step_y;else item.flag_y = false;
        } else {
          if (item.y + item.step_y <= 20) item.y += item.step_y;else item.flag_y = true;
        }
        ctx.save();
        if (item.flag_x) {
          ctx.scale(-1, 1);
          ctx.translate(-width, 0);
        }
        ctx.drawImage(item.img, 0, 0, item.img.width, item.img.height, item.x, item.y, height / 2, height);
        ctx.restore();
      } else {
        img_set.add(item.idx);
        if (img_set.size === img_num * 2) {
          if (default_config.loop) updateImgList();else {
            default_config.end = true;
          }
        } else if (img_set.size === img_num * 2 - 2 && !default_config.loop) {
          default_config.opacity = 0;
        }
      }
    }
  });
  ctx.save();
  ctx.shadowBlur = 100;
  ctx.fillStyle = "rgb(0,0,0,0.2)";
  ctx.shadowColor = "#8360c3";
  ctx.fillRect(0, 0, width, height);
  ctx.restore();
};
var update = function update() {
  render();
  requestAnimationFrame(update);
};
export default function Loading(_ref) {
  var width = _ref.width,
    height = _ref.height,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  var canvasRef = useRef(null);
  useEffect(function () {
    initImgList();
    update();
  }, []);
  return /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    id: "p5-loading-crowd",
    width: width,
    height: height,
    className: className
  }, "index");
}