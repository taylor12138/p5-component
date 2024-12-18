(self.webpackChunkp5_react_component=self.webpackChunkp5_react_component||[]).push([[209],{60374:function(r,o,n){"use strict";n.r(o),n.d(o,{demos:function(){return v}});var d=n(17061),s=n.n(d),u=n(13012),f=n.n(u),g=n(17156),c=n.n(g),t=n(67294),w=n(37055),h=n(78569),_=n(50960),v={"src-hover-demo-0":{component:t.memo(t.lazy(c()(s()().mark(function p(){var l,m;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.bind(n,78569));case 2:return l=e.sent,m=l.Font,e.t0=f(),e.next=7,Promise.resolve().then(n.bind(n,50960));case 7:return e.t1=e.sent,(0,e.t0)(e.t1),e.abrupt("return",{default:function(){return t.createElement("div",null,t.createElement("span",{class:"p5-hover-animation-gray"},"\u89E6\u53D1hover\u7279\u6548 gray"),t.createElement("div",null),t.createElement("span",{class:"p5-hover-animation-mix"},"\u89E6\u53D1hover\u7279\u6548 mix"),t.createElement(m,null,t.createElement("span",{class:"p5-hover-animation-mix"},"\u6211\u662F\u602A\u76D7\uFF0C\u8FD9\u662F\u6211\u7684\u9884\u544A\u51FD\uFF0C\u8C22\u8C22")))}});case 10:case"end":return e.stop()}},p)})))),asset:{type:"BLOCK",id:"src-hover-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Font } from 'p5-react-component';
import '../global.less';

export default () => <div>
    <span class="p5-hover-animation-gray">\u89E6\u53D1hover\u7279\u6548 gray</span>
    <div />
    <span class="p5-hover-animation-mix">\u89E6\u53D1hover\u7279\u6548 mix</span>
    <Font>
        <span class="p5-hover-animation-mix">\u6211\u662F\u602A\u76D7\uFF0C\u8FD9\u662F\u6211\u7684\u9884\u544A\u51FD\uFF0C\u8C22\u8C22</span>
    </Font>
</div>`},"p5-react-component":{type:"NPM",value:"0.0.1"},"../global.less":{type:"FILE",value:n(42411).Z}},entry:"index.jsx"},context:{"../global.less":_,"p5-react-component":h,"/home/runner/work/p5-component/p5-component/src/global.less":_},renderOpts:{compile:function(){var p=c()(s()().mark(function m(){var i,e=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(335).then(n.bind(n,37335));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,e));case 3:case"end":return a.stop()}},m)}));function l(){return p.apply(this,arguments)}return l}()}}}},41565:function(r,o,n){"use strict";n.r(o),n.d(o,{texts:function(){return s}});var d=n(37055);const s=[]},42411:function(r,o){"use strict";o.Z=`@color-gray: #808080;
@color-white: #fff;
@color-black: #000;
@font-size-small: 14px;

@font-face {
    font-family: "p5-Bold";
    font-weight: 700;
    src: url("./Font/AlimamaShuHeiTi-Bold.woff2") format("woff2"),
    url("./Font/AlimamaShuHeiTi-Bold.woff") format("woff");
    font-display: swap;
}

@keyframes bgGray {
    0% {
        top: 6%;
        transform: skew(-10deg, -2deg) scale(0.9);
    }

    20% {
        top: 3%;
        transform: skew(35deg, 4deg) scale(0.9);
    }

    40% {
        top: -2%;
        transform: skew(-20deg, -2deg) scale(0.95);
    }

    60% {
        top: -4%;
        transform: skew(20deg, 2deg) scale(1);
    }

    80% {
        top: 3%;
        transform: skew(-25deg, -4deg) scale(0.94);
    }

    100% {
        top: 6%;
        transform: skew(-10deg, -2deg) scale(0.9);
    }
}

@keyframes bgBlue {
    0% {
        top: 6%;
        transform: skew(-30deg, -2deg) scale(0.7);
    }

    20% {
        top: 3%;
        transform: skew(45deg, 4deg) scale(0.8);
    }

    40% {
        top: -2%;
        transform: skew(-20deg, -2deg) scale(0.9);
    }

    60% {
        top: -4%;
        transform: skew(20deg, 2deg) scale(1);
    }

    80% {
        top: 3%;
        transform: skew(-45deg, -4deg) scale(0.85);
    }

    100% {
        top: 6%;
        transform: skew(45deg, 4deg) scale(0.7);
    }
}

@keyframes bgRed {
    0% {
        top: -4%;
        transform: skew(45deg, 4deg) scale(1);
    }

    20% {
        top: -1%;
        transform: skew(-30deg, -3deg) scale(0.9);
    }

    40% {
        top: 2%;
        transform: skew(60deg, 6deg) scale(0.75);
    }

    60% {
        top: 3%;
        transform: skew(-20deg, -2deg) scale(0.7);
    }

    80% {
        top: -2%;
        transform: skew(30deg, 3deg) scale(0.85);
    }

    100% {
        top: -4%;
        transform: skew(45deg, 4deg) scale(1);
    }
}

.p5-hover-animation-gray {
    position: relative;
    z-index: 1;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    &:hover::before {
        background: @color-gray;
        animation: bgGray 1s ease-out infinite;
    }
}

.p5-hover-pseudo-el-ctn() {
    content: '';
    position: absolute;
    top: -10%;
    left: -10%;
    width: 120%;
    height: 120%;
    z-index: -1;
}

.p5-hover-animation-mix {
    position: relative;
    z-index: 1;

    &:hover::before {
        .p5-hover-pseudo-el-ctn();
        background-color: #1cfeff;
        animation: bgBlue 1s ease-in infinite;
    }

    &:hover::after {
        .p5-hover-pseudo-el-ctn();
        mix-blend-mode: screen;
        background-color: #ff0022;
        animation: bgRed 1s ease-out infinite;
    }
}

.p5-text{
    font-family: 'p5-Bold', serif, 'HanHei SC', 'PingFang SC',
    'Helvetica Neue', Helvetica, sans-serif;
    padding: 0;
    margin: 0;
    text-shadow: 0 1px @color-white, 1px 0 @color-white, -1px 0 @color-white, 0 -1px @color-white;
}

.p5-font(){
    font-family: 'p5-Bold', serif, 'HanHei SC', 'PingFang SC',
    'Helvetica Neue', Helvetica, sans-serif;
}`},13012:function(r){function o(n){if(n==null)throw new TypeError("Cannot destructure "+n)}r.exports=o,r.exports.__esModule=!0,r.exports.default=r.exports}}]);
