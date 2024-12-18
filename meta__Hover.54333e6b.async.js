(self.webpackChunkp5_react_component=self.webpackChunkp5_react_component||[]).push([[209],{60374:function(i,d,n){"use strict";n.r(d),n.d(d,{demos:function(){return z}});var b=n(17061),f=n.n(b),v=n(13012),h=n.n(v),l=n(17156),y=n.n(l),r=n(67294),C=n(37055),B=n(53145),D=n(50960),z={"src-hover-demo-0":{component:r.memo(r.lazy(y()(f()().mark(function I(){var P,N;return f()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(n.bind(n,53145));case 2:return P=p.sent,N=P.Font,p.t0=h(),p.next=7,Promise.resolve().then(n.bind(n,50960));case 7:return p.t1=p.sent,(0,p.t0)(p.t1),p.abrupt("return",{default:function(){return r.createElement("div",null,r.createElement("span",{class:"p5-hover-animation-gray"},"\u89E6\u53D1hover\u7279\u6548 gray"),r.createElement("div",null),r.createElement("span",{class:"p5-hover-animation-mix"},"\u89E6\u53D1hover\u7279\u6548 mix"),r.createElement(N,null,r.createElement("span",{class:"p5-hover-animation-mix"},"\u6211\u662F\u602A\u76D7\uFF0C\u8FD9\u662F\u6211\u7684\u9884\u544A\u51FD\uFF0C\u8C22\u8C22")))}});case 10:case"end":return p.stop()}},I)})))),asset:{type:"BLOCK",id:"src-hover-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Font } from 'p5-react-component';
import '../global.less';

export default () => <div>
    <span class="p5-hover-animation-gray">\u89E6\u53D1hover\u7279\u6548 gray</span>
    <div />
    <span class="p5-hover-animation-mix">\u89E6\u53D1hover\u7279\u6548 mix</span>
    <Font>
        <span class="p5-hover-animation-mix">\u6211\u662F\u602A\u76D7\uFF0C\u8FD9\u662F\u6211\u7684\u9884\u544A\u51FD\uFF0C\u8C22\u8C22</span>
    </Font>
</div>`},"p5-react-component":{type:"NPM",value:"0.0.1"},"../global.less":{type:"FILE",value:n(42411).Z}},entry:"index.jsx"},context:{"../global.less":D,"p5-react-component":B,"/home/runner/work/p5-component/p5-component/src/global.less":D},renderOpts:{compile:function(){var I=y()(f()().mark(function N(){var L,p=arguments;return f()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,n.e(335).then(n.bind(n,37335));case 2:return j.abrupt("return",(L=j.sent).default.apply(L,p));case 3:case"end":return j.stop()}},N)}));function P(){return I.apply(this,arguments)}return P}()}}}},53145:function(i,d,n){"use strict";n.r(d),n.d(d,{Font:function(){return L},Loading:function(){return cn},Range:function(){return pn},Switch:function(){return fn},Title:function(){return $}});var b=n(42122),f=n.n(b),v=n(70215),h=n.n(v),l=n(67294),y=n(50960),r=n(85893),C=["className","children"],B=/Android\s+([\d.]+);/i,D=navigator.userAgent,z=!!D.match(B),I=function(){var o=D.match(B);return o?parseFloat(o[1]):0},P=!z||I()>=6;function N(s){var o=s.className,t=o===void 0?"":o,a=s.children,c=h()(s,C),e=(0,l.useMemo)(function(){return P?"".concat(t," font-fz"):t},[t]);return(0,r.jsx)("div",f()(f()({className:e},c),{},{children:a}))}var L=N;function p(s){var o=s.content,t=s.selected_font_color,a=t===void 0?"#fff":t,c=s.font_color,e=c===void 0?"#000":c,x=s.selected_bg_color,A=x===void 0?"#000":x,g=(0,l.useMemo)(function(){for(var w=[" ",",","\uFF0C",".","\u3002","!","\uFF01","?","\uFF1F"],m=w.includes(o[1])?{}:{1:1},u=2;u<o.length;u++)!w.includes(o[u])&&w.includes(o[u-2])&&(m[u]=1);return m},[o]),S=function(m){var u=Math.random()<.5?Math.random()*10:-Math.random()*10;return{color:(g==null?void 0:g[m])===1?a:e,"background-color":(g==null?void 0:g[m])===1?A:"",transform:"rotate(".concat(u,"deg)")}},_=o.split("");return(0,r.jsx)("p",{className:"p5-title-ctn",children:_==null?void 0:_.map(function(w,m){return(0,r.jsx)("span",{style:S(m),children:w})})})}var $=p,j=n.p+"static/crowd0.460bbf7e.png",V=n.p+"static/crowd1.fe498716.png",G=n.p+"static/crowd2.846ce32e.png",Z=n.p+"static/crowd3.954093e4.png",J=n.p+"static/crowd4.ec23720f.png",Q=n.p+"static/crowd5.e2bd2014.png",X=n.p+"static/crowd6.53c731a0.png",Y=n.p+"static/crowd7.73f4e184.png",q=n.p+"static/crowd8.48fb6013.png",nn=n.p+"static/crowd9.b9d4423a.png",en=n.p+"static/crowd10.713dce8d.png",tn=n.p+"static/crowd11.bc690236.png",U=[j,V,G,Z,J,Q,X,Y,q,nn,en,tn],H=[],R=U.length,F=new Set,O={width:window.innerWidth,height:window.innerHeight,loop:!0,pause:!1,fixed:!1,end:!1,resize:!1,opacity:1,step:2},on=function(){var o=document.querySelector("#p5-loading-crowd");if(o)for(var t=o.width,a=0;a<R*2;a++){var c=U[a%R],e=new Image;e.src=c,H.push({img:e,step:Math.random()*2+2,step_y:Math.random()*.2+.2,x:t+a*100,y:20,flag_x:a<R,flag_y:!0,idx:a})}},an=function(){var o=document.querySelector("#p5-loading-crowd");if(o){var t=o.width;F.clear(),O.end=!1,H.forEach(function(a,c){a.step=Math.random()*O.step+O.step,a.step_y=Math.random()*.2+.2,a.x=t+c*100})}},rn=function(){var o=document.querySelector("#p5-loading-crowd");if(o){var t=o.getContext("2d");if(t){var a=o.width,c=o.height;t.clearRect(0,0,a,c),t.beginPath(),t.fillStyle="rgb(0, 0, 0)",t.fillRect(0,0,a,c),H.forEach(function(e){e.img.complete&&(e.x>=-e.img.width?(e.x-=e.step,e.flag_y?e.y-e.step_y>=0?e.y-=e.step_y:e.flag_y=!1:e.y+e.step_y<=20?e.y+=e.step_y:e.flag_y=!0,t.save(),e.flag_x&&(t.scale(-1,1),t.translate(-a,0)),t.drawImage(e.img,0,0,e.img.width,e.img.height,e.x,e.y,c/2,c),t.restore()):(F.add(e.idx),F.size===R*2?O.loop?an():O.end=!0:F.size===R*2-2&&!O.loop&&(O.opacity=0)))}),t.save(),t.shadowBlur=100,t.fillStyle="rgb(0,0,0,0.2)",t.shadowColor="#8360c3",t.fillRect(0,0,a,c),t.restore()}}},sn=function s(){rn(),requestAnimationFrame(s)};function cn(s){var o=s.width,t=s.height,a=s.className,c=a===void 0?"":a,e=(0,l.useRef)(null);return(0,l.useEffect)(function(){on(),sn()},[]),(0,r.jsx)("canvas",{ref:e,id:"p5-loading-crowd",width:o,height:t,className:c,children:"index"})}var ln=n(27424),W=n.n(ln);function dn(s){var o=s.className,t=o===void 0?"":o,a=s.max,c=s.min,e=s.placement,x=e===void 0?"top":e,A=(0,l.useState)(!1),g=W()(A,2),S=g[0],_=g[1],w=(0,l.useState)(""),m=W()(w,2),u=m[0],K=m[1],T=(0,l.useMemo)(function(){var M,E=(M=document.querySelector("#volume"))===null||M===void 0?void 0:M.clientWidth;if(console.log(E,u,"width"),!u||!E)return{left:"0px",top:x==="top"?"-30px":"24px"};var k=+u,mn=(k-c)/(a-c)*(E-14)-4;return console.log(k,a),{left:"".concat(mn,"px"),top:x==="top"?"-30px":"24px"}},[a,c,x,u]);return(0,r.jsxs)("div",{className:"p5-range ".concat(t),onMouseEnter:function(){_(!0)},onMouseLeave:function(){_(!1)},children:[S&&(0,r.jsx)("span",{className:"p5-slider-icon p5-text",style:{left:T.left,top:T.top},children:u}),(0,r.jsx)("input",{className:S?"p5-slider-progress p5-slider-progress-hover":"p5-slider-progress p5-slider-progress-static",type:"range",id:"volume",name:"volume",min:c,max:a,onChange:function(E){K(E.target.value)}})]})}var pn=dn;function un(s){var o=s.className,t=o===void 0?"":o,a=s.modelValue,c=a===void 0?!0:a,e=s.size,x=e===void 0?"medium":e,A=(0,l.useState)(!1),g=W()(A,2),S=g[0],_=g[1],w=(0,l.useState)(c),m=W()(w,2),u=m[0],K=m[1],T=(0,l.useMemo)(function(){return"p5-switch-size-".concat(x)},[x]),M=(0,l.useCallback)(function(E){K(E.target.checked)},[]);return(0,r.jsxs)("div",{className:u?"p5-switch-ctn p5-switch-on ".concat(T," ").concat(t):" p5-switch-ctn p5-switch-off ".concat(T," ").concat(t),children:[(0,r.jsx)("div",{className:"p5-switch-bg-ctn",children:(0,r.jsx)("span",{className:S?"p5-switch-bg-move p5-switch-bg":"p5-switch-bg"})}),(0,r.jsx)("span",{className:"p5-switch-icon"}),(0,r.jsx)("span",{className:S?"p5-switch-sub-icon":""}),(0,r.jsx)("input",{type:"checkbox",onClick:M,onMouseEnter:function(){_(!0)},onMouseLeave:function(){_(!1)}})]})}var fn=un},50960:function(i,d,n){"use strict";n.r(d)},41565:function(i,d,n){"use strict";n.r(d),n.d(d,{texts:function(){return f}});var b=n(37055);const f=[]},42411:function(i,d){"use strict";d.Z=`@color-gray: #808080;
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
}`},13012:function(i){function d(n){if(n==null)throw new TypeError("Cannot destructure "+n)}i.exports=d,i.exports.__esModule=!0,i.exports.default=i.exports},70215:function(i,d,n){var b=n(7071);function f(v,h){if(v==null)return{};var l=b(v,h),y,r;if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(v);for(r=0;r<C.length;r++)y=C[r],!(h.indexOf(y)>=0)&&Object.prototype.propertyIsEnumerable.call(v,y)&&(l[y]=v[y])}return l}i.exports=f,i.exports.__esModule=!0,i.exports.default=i.exports},7071:function(i){function d(n,b){if(n==null)return{};var f={},v=Object.keys(n),h,l;for(l=0;l<v.length;l++)h=v[l],!(b.indexOf(h)>=0)&&(f[h]=n[h]);return f}i.exports=d,i.exports.__esModule=!0,i.exports.default=i.exports}}]);
