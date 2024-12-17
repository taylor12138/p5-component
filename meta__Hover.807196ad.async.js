(self.webpackChunkp5_react_component=self.webpackChunkp5_react_component||[]).push([[209],{60374:function(l,d,n){"use strict";n.r(d),n.d(d,{demos:function(){return T}});var h=n(17061),u=n.n(h),m=n(13012),f=n.n(m),c=n(17156),v=n.n(c),a=n(67294),b=n(37055),A=n(46295),M=n(50960),T={"src-hover-demo-0":{component:a.memo(a.lazy(v()(u()().mark(function S(){var _,j;return u()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(n.bind(n,46295));case 2:return _=p.sent,j=_.Font,p.t0=f(),p.next=7,Promise.resolve().then(n.bind(n,50960));case 7:return p.t1=p.sent,(0,p.t0)(p.t1),p.abrupt("return",{default:function(){return a.createElement("div",null,a.createElement("span",{class:"p5-hover-animation-gray"},"\u89E6\u53D1hover\u7279\u6548 gray"),a.createElement("div",null),a.createElement("span",{class:"p5-hover-animation-mix"},"\u89E6\u53D1hover\u7279\u6548 mix"),a.createElement(j,null,a.createElement("span",{class:"p5-hover-animation-mix"},"\u6211\u662F\u602A\u76D7\uFF0C\u8FD9\u662F\u6211\u7684\u9884\u544A\u51FD\uFF0C\u8C22\u8C22")))}});case 10:case"end":return p.stop()}},S)})))),asset:{type:"BLOCK",id:"src-hover-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Font } from 'p5-react-component';
import '../global.less';

export default () => <div>
    <span class="p5-hover-animation-gray">\u89E6\u53D1hover\u7279\u6548 gray</span>
    <div />
    <span class="p5-hover-animation-mix">\u89E6\u53D1hover\u7279\u6548 mix</span>
    <Font>
        <span class="p5-hover-animation-mix">\u6211\u662F\u602A\u76D7\uFF0C\u8FD9\u662F\u6211\u7684\u9884\u544A\u51FD\uFF0C\u8C22\u8C22</span>
    </Font>
</div>`},"p5-react-component":{type:"NPM",value:"0.0.1"},"../global.less":{type:"FILE",value:n(42411).Z}},entry:"index.jsx"},context:{"../global.less":M,"p5-react-component":A,"/home/runner/work/p5-component/p5-component/src/global.less":M},renderOpts:{compile:function(){var S=v()(u()().mark(function j(){var P,p=arguments;return u()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,n.e(335).then(n.bind(n,37335));case 2:return w.abrupt("return",(P=w.sent).default.apply(P,p));case 3:case"end":return w.stop()}},j)}));function _(){return S.apply(this,arguments)}return _}()}}}},46295:function(l,d,n){"use strict";n.r(d),n.d(d,{Font:function(){return P},Loading:function(){return rn},Range:function(){return ln},Switch:function(){return pn}});var h=n(42122),u=n.n(h),m=n(70215),f=n.n(m),c=n(67294),v=n(50960),a=n(85893),b=["className","children"],A=/Android\s+([\d.]+);/i,M=navigator.userAgent,T=!!M.match(A),S=function(){var r=M.match(A);return r?parseFloat(r[1]):0},_=!T||S()>=6;function j(s){var r=s.className,t=r===void 0?"":r,o=s.children,i=f()(s,b),e=(0,c.useMemo)(function(){return _?"".concat(t," font-fz"):t},[t]);return(0,a.jsx)("div",u()(u()({className:e},i),{},{children:o}))}var P=j,p=n.p+"static/crowd0.460bbf7e.png",W=n.p+"static/crowd1.fe498716.png",w=n.p+"static/crowd2.846ce32e.png",V=n.p+"static/crowd3.954093e4.png",G=n.p+"static/crowd4.ec23720f.png",Z=n.p+"static/crowd5.e2bd2014.png",J=n.p+"static/crowd6.53c731a0.png",Q=n.p+"static/crowd7.73f4e184.png",X=n.p+"static/crowd8.48fb6013.png",Y=n.p+"static/crowd9.b9d4423a.png",q=n.p+"static/crowd10.713dce8d.png",nn=n.p+"static/crowd11.bc690236.png",U=[p,W,w,V,G,Z,J,Q,X,Y,q,nn],z=[],N=U.length,B=new Set,x={width:window.innerWidth,height:window.innerHeight,loop:!0,pause:!1,fixed:!1,end:!1,resize:!1,opacity:1,step:2},en=function(){var r=document.querySelector("#p5-loading-crowd");if(r)for(var t=r.width,o=0;o<N*2;o++){var i=U[o%N],e=new Image;e.src=i,z.push({img:e,step:Math.random()*2+2,step_y:Math.random()*.2+.2,x:t+o*100,y:20,flag_x:o<N,flag_y:!0,idx:o})}},tn=function(){var r=document.querySelector("#p5-loading-crowd");if(r){var t=r.width;B.clear(),x.end=!1,z.forEach(function(o,i){o.step=Math.random()*x.step+x.step,o.step_y=Math.random()*.2+.2,o.x=t+i*100})}},on=function(){var r=document.querySelector("#p5-loading-crowd");if(r){var t=r.getContext("2d");if(t){var o=r.width,i=r.height;t.clearRect(0,0,o,i),t.beginPath(),t.fillStyle="rgb(0, 0, 0)",t.fillRect(0,0,o,i),z.forEach(function(e){e.img.complete&&(e.x>=-e.img.width?(e.x-=e.step,e.flag_y?e.y-e.step_y>=0?e.y-=e.step_y:e.flag_y=!1:e.y+e.step_y<=20?e.y+=e.step_y:e.flag_y=!0,t.save(),e.flag_x&&(t.scale(-1,1),t.translate(-o,0)),t.drawImage(e.img,0,0,e.img.width,e.img.height,e.x,e.y,i/2,i),t.restore()):(B.add(e.idx),B.size===N*2?x.loop?tn():x.end=!0:B.size===N*2-2&&!x.loop&&(x.opacity=0)))}),t.save(),t.shadowBlur=100,t.fillStyle="rgb(0,0,0,0.2)",t.shadowColor="#8360c3",t.fillRect(0,0,o,i),t.restore()}}},an=function s(){on(),requestAnimationFrame(s)};function rn(s){var r=s.width,t=s.height,o=s.className,i=o===void 0?"":o,e=(0,c.useRef)(null);return(0,c.useEffect)(function(){en(),an()},[]),(0,a.jsx)("canvas",{ref:e,id:"p5-loading-crowd",width:r,height:t,className:i,children:"index"})}var sn=n(27424),F=n.n(sn);function cn(s){var r=s.className,t=r===void 0?"":r,o=s.max,i=s.min,e=s.placement,O=e===void 0?"top":e,H=(0,c.useState)(!1),C=F()(H,2),D=C[0],L=C[1],K=(0,c.useState)(""),I=F()(K,2),E=I[0],$=I[1],R=(0,c.useMemo)(function(){var y,g=(y=document.querySelector("#volume"))===null||y===void 0?void 0:y.clientWidth;if(console.log(g,E,"width"),!E||!g)return{left:"0px",top:O==="top"?"-30px":"24px"};var k=+E,un=(k-i)/(o-i)*(g-14)-4;return console.log(k,o),{left:"".concat(un,"px"),top:O==="top"?"-30px":"24px"}},[o,i,O,E]);return(0,a.jsxs)("div",{className:"p5-range ".concat(t),onMouseEnter:function(){L(!0)},onMouseLeave:function(){L(!1)},children:[D&&(0,a.jsx)("span",{className:"p5-slider-icon p5-text",style:{left:R.left,top:R.top},children:E}),(0,a.jsx)("input",{className:D?"p5-slider-progress p5-slider-progress-hover":"p5-slider-progress p5-slider-progress-static",type:"range",id:"volume",name:"volume",min:i,max:o,onChange:function(g){$(g.target.value)}})]})}var ln=cn;function dn(s){var r=s.className,t=r===void 0?"":r,o=s.modelValue,i=o===void 0?!0:o,e=s.size,O=e===void 0?"medium":e,H=(0,c.useState)(!1),C=F()(H,2),D=C[0],L=C[1],K=(0,c.useState)(i),I=F()(K,2),E=I[0],$=I[1],R=(0,c.useMemo)(function(){return"p5-switch-size-".concat(O)},[O]),y=(0,c.useCallback)(function(g){$(g.target.checked)},[]);return(0,a.jsxs)("div",{className:E?"p5-switch-ctn p5-switch-on ".concat(R," ").concat(t):" p5-switch-ctn p5-switch-off ".concat(R," ").concat(t),children:[(0,a.jsx)("div",{className:"p5-switch-bg-ctn",children:(0,a.jsx)("span",{className:D?"p5-switch-bg-move p5-switch-bg":"p5-switch-bg"})}),(0,a.jsx)("span",{className:"p5-switch-icon"}),(0,a.jsx)("span",{className:D?"p5-switch-sub-icon":""}),(0,a.jsx)("input",{type:"checkbox",onClick:y,onMouseEnter:function(){L(!0)},onMouseLeave:function(){L(!1)}})]})}var pn=dn},50960:function(l,d,n){"use strict";n.r(d)},41565:function(l,d,n){"use strict";n.r(d),n.d(d,{texts:function(){return u}});var h=n(37055);const u=[]},42411:function(l,d){"use strict";d.Z=`@color-gray: #808080;
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
}`},13012:function(l){function d(n){if(n==null)throw new TypeError("Cannot destructure "+n)}l.exports=d,l.exports.__esModule=!0,l.exports.default=l.exports},70215:function(l,d,n){var h=n(7071);function u(m,f){if(m==null)return{};var c=h(m,f),v,a;if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(m);for(a=0;a<b.length;a++)v=b[a],!(f.indexOf(v)>=0)&&Object.prototype.propertyIsEnumerable.call(m,v)&&(c[v]=m[v])}return c}l.exports=u,l.exports.__esModule=!0,l.exports.default=l.exports},7071:function(l){function d(n,h){if(n==null)return{};var u={},m=Object.keys(n),f,c;for(c=0;c<m.length;c++)f=m[c],!(h.indexOf(f)>=0)&&(u[f]=n[f]);return u}l.exports=d,l.exports.__esModule=!0,l.exports.default=l.exports}}]);
