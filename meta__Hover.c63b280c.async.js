(self.webpackChunkp5_react_component=self.webpackChunkp5_react_component||[]).push([[209],{60374:function(a,i,n){"use strict";n.r(i),n.d(i,{demos:function(){return R}});var v=n(17061),u=n.n(v),m=n(13012),f=n.n(m),d=n(17156),g=n.n(d),s=n(67294),O=n(37055),I=n(34448),_=n(50960),R={"src-hover-demo-0":{component:s.memo(s.lazy(g()(u()().mark(function j(){var y,x;return u()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(n.bind(n,34448));case 2:return y=p.sent,x=y.Font,p.t0=f(),p.next=7,Promise.resolve().then(n.bind(n,50960));case 7:return p.t1=p.sent,(0,p.t0)(p.t1),p.abrupt("return",{default:function(){return s.createElement("div",null,s.createElement("span",{class:"p5-hover-animation-gray"},"\u89E6\u53D1hover\u7279\u6548 gray"),s.createElement("div",null),s.createElement("span",{class:"p5-hover-animation-mix"},"\u89E6\u53D1hover\u7279\u6548 mix"),s.createElement(x,null,s.createElement("span",{class:"p5-hover-animation-mix"},"\u6211\u662F\u602A\u76D7\uFF0C\u8FD9\u662F\u6211\u7684\u9884\u544A\u51FD\uFF0C\u8C22\u8C22")))}});case 10:case"end":return p.stop()}},j)})))),asset:{type:"BLOCK",id:"src-hover-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Font } from 'p5-react-component';
import '../global.less';

export default () => <div>
    <span class="p5-hover-animation-gray">\u89E6\u53D1hover\u7279\u6548 gray</span>
    <div />
    <span class="p5-hover-animation-mix">\u89E6\u53D1hover\u7279\u6548 mix</span>
    <Font>
        <span class="p5-hover-animation-mix">\u6211\u662F\u602A\u76D7\uFF0C\u8FD9\u662F\u6211\u7684\u9884\u544A\u51FD\uFF0C\u8C22\u8C22</span>
    </Font>
</div>`},"p5-react-component":{type:"NPM",value:"0.0.1"},"../global.less":{type:"FILE",value:n(42411).Z}},entry:"index.jsx"},context:{"../global.less":_,"p5-react-component":I,"/home/runner/work/p5-component/p5-component/src/global.less":_},renderOpts:{compile:function(){var j=g()(u()().mark(function x(){var M,p=arguments;return u()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,n.e(335).then(n.bind(n,37335));case 2:return h.abrupt("return",(M=h.sent).default.apply(M,p));case 3:case"end":return h.stop()}},x)}));function y(){return j.apply(this,arguments)}return y}()}}}},34448:function(a,i,n){"use strict";n.r(i),n.d(i,{Font:function(){return M},Loading:function(){return tn},Range:function(){return an}});var v=n(42122),u=n.n(v),m=n(70215),f=n.n(m),d=n(67294),g=n(50960),s=n(85893),O=["className","children"],I=/Android\s+([\d.]+);/i,_=navigator.userAgent,R=!!_.match(I),j=function(){var r=_.match(I);return r?parseFloat(r[1]):0},y=!R||j()>=6;function x(c){var r=c.className,t=r===void 0?"":r,o=c.children,l=f()(c,O),e=(0,d.useMemo)(function(){return y?"".concat(t," font-fz"):t},[t]);return(0,s.jsx)("div",u()(u()({className:e},l),{},{children:o}))}var M=x,p=n.p+"static/crowd0.460bbf7e.png",S=n.p+"static/crowd1.fe498716.png",h=n.p+"static/crowd2.846ce32e.png",H=n.p+"static/crowd3.954093e4.png",$=n.p+"static/crowd4.ec23720f.png",k=n.p+"static/crowd5.e2bd2014.png",G=n.p+"static/crowd6.53c731a0.png",V=n.p+"static/crowd7.73f4e184.png",Z=n.p+"static/crowd8.48fb6013.png",J=n.p+"static/crowd9.b9d4423a.png",Q=n.p+"static/crowd10.713dce8d.png",X=n.p+"static/crowd11.bc690236.png",B=[p,S,h,H,$,k,G,V,Z,J,Q,X],A=[],b=B.length,L=new Set,w={width:window.innerWidth,height:window.innerHeight,loop:!0,pause:!1,fixed:!1,end:!1,resize:!1,opacity:1,step:2},Y=function(){var r=document.querySelector("#p5-loading-crowd");if(r)for(var t=r.width,o=0;o<b*2;o++){var l=B[o%b],e=new Image;e.src=l,A.push({img:e,step:Math.random()*2+2,step_y:Math.random()*.2+.2,x:t+o*100,y:20,flag_x:o<b,flag_y:!0,idx:o})}},q=function(){var r=document.querySelector("#p5-loading-crowd");if(r){var t=r.width;L.clear(),w.end=!1,A.forEach(function(o,l){o.step=Math.random()*w.step+w.step,o.step_y=Math.random()*.2+.2,o.x=t+l*100})}},nn=function(){var r=document.querySelector("#p5-loading-crowd");if(r){var t=r.getContext("2d");if(t){var o=r.width,l=r.height;t.clearRect(0,0,o,l),t.beginPath(),t.fillStyle="rgb(0, 0, 0)",t.fillRect(0,0,o,l),A.forEach(function(e){e.img.complete&&(e.x>=-e.img.width?(e.x-=e.step,e.flag_y?e.y-e.step_y>=0?e.y-=e.step_y:e.flag_y=!1:e.y+e.step_y<=20?e.y+=e.step_y:e.flag_y=!0,t.save(),e.flag_x&&(t.scale(-1,1),t.translate(-o,0)),t.drawImage(e.img,0,0,e.img.width,e.img.height,e.x,e.y,l/2,l),t.restore()):(L.add(e.idx),L.size===b*2?w.loop?q():w.end=!0:L.size===b*2-2&&!w.loop&&(w.opacity=0)))}),t.save(),t.shadowBlur=100,t.fillStyle="rgb(0,0,0,0.2)",t.shadowColor="#8360c3",t.fillRect(0,0,o,l),t.restore()}}},en=function c(){nn(),requestAnimationFrame(c)};function tn(c){var r=c.width,t=c.height,o=c.className,l=o===void 0?"":o,e=(0,d.useRef)(null);return(0,d.useEffect)(function(){Y(),en()},[]),(0,s.jsx)("canvas",{ref:e,id:"p5-loading-crowd",width:r,height:t,className:l,children:"index"})}var on=n(27424),N=n.n(on);function rn(c){var r=c.className,t=r===void 0?"":r,o=c.max,l=c.min,e=c.placement,C=e===void 0?"top":e,sn=(0,d.useState)(!1),T=N()(sn,2),W=T[0],F=T[1],cn=(0,d.useState)(""),K=N()(cn,2),P=K[0],ln=K[1],U=(0,d.useMemo)(function(){var E,D=(E=document.querySelector("#volume"))===null||E===void 0?void 0:E.clientWidth;if(console.log(D,P,"width"),!P||!D)return{left:"0px",top:C==="top"?"-30px":"24px"};var z=+P,dn=(z-l)/(o-l)*(D-14)-4;return console.log(z,o),{left:"".concat(dn,"px"),top:C==="top"?"-30px":"24px"}},[o,l,C,P]);return(0,s.jsxs)("div",{className:"p5-range ".concat(t),onMouseEnter:function(){F(!0)},onMouseLeave:function(){F(!1)},children:[W&&(0,s.jsx)("span",{className:"p5-slider-icon p5-text",style:{left:U.left,top:U.top},children:P}),(0,s.jsx)("input",{className:W?"p5-slider-progress p5-slider-progress-hover":"p5-slider-progress p5-slider-progress-static",type:"range",id:"volume",name:"volume",min:l,max:o,onChange:function(D){ln(D.target.value)}})]})}var an=rn},50960:function(a,i,n){"use strict";n.r(i)},41565:function(a,i,n){"use strict";n.r(i),n.d(i,{texts:function(){return u}});var v=n(37055);const u=[]},42411:function(a,i){"use strict";i.Z=`@color-gray: #808080;
@color-white: #fff;
@color-black: #000;

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
}`},13012:function(a){function i(n){if(n==null)throw new TypeError("Cannot destructure "+n)}a.exports=i,a.exports.__esModule=!0,a.exports.default=a.exports},70215:function(a,i,n){var v=n(7071);function u(m,f){if(m==null)return{};var d=v(m,f),g,s;if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(m);for(s=0;s<O.length;s++)g=O[s],!(f.indexOf(g)>=0)&&Object.prototype.propertyIsEnumerable.call(m,g)&&(d[g]=m[g])}return d}a.exports=u,a.exports.__esModule=!0,a.exports.default=a.exports},7071:function(a){function i(n,v){if(n==null)return{};var u={},m=Object.keys(n),f,d;for(d=0;d<m.length;d++)f=m[d],!(v.indexOf(f)>=0)&&(u[f]=n[f]);return u}a.exports=i,a.exports.__esModule=!0,a.exports.default=a.exports}}]);
