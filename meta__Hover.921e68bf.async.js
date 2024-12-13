(self.webpackChunkp5_react_component=self.webpackChunkp5_react_component||[]).push([[209],{60374:function(r,s,n){"use strict";n.r(s),n.d(s,{demos:function(){return D}});var v=n(17061),i=n.n(v),m=n(13012),u=n.n(m),l=n(17156),g=n.n(l),c=n(67294),O=n(37055),P=n(76588),_=n(50960),D={"src-hover-demo-0":{component:c.memo(c.lazy(g()(i()().mark(function x(){var y,E;return i()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(n.bind(n,76588));case 2:return y=d.sent,E=y.Font,d.t0=u(),d.next=7,Promise.resolve().then(n.bind(n,50960));case 7:return d.t1=d.sent,(0,d.t0)(d.t1),d.abrupt("return",{default:function(){return c.createElement("div",null,c.createElement("span",{class:"p5-hover-animation-gray"},"\u89E6\u53D1hover\u7279\u6548 gray"),c.createElement("div",null),c.createElement("span",{class:"p5-hover-animation-mix"},"\u89E6\u53D1hover\u7279\u6548 mix"),c.createElement(E,null,c.createElement("span",{class:"p5-hover-animation-mix"},"\u6211\u662F\u602A\u76D7\uFF0C\u8FD9\u662F\u6211\u7684\u9884\u544A\u51FD\uFF0C\u8C22\u8C22")))}});case 10:case"end":return d.stop()}},x)})))),asset:{type:"BLOCK",id:"src-hover-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Font } from 'p5-react-component';
import '../global.less';

export default () => <div>
    <span class="p5-hover-animation-gray">\u89E6\u53D1hover\u7279\u6548 gray</span>
    <div />
    <span class="p5-hover-animation-mix">\u89E6\u53D1hover\u7279\u6548 mix</span>
    <Font>
        <span class="p5-hover-animation-mix">\u6211\u662F\u602A\u76D7\uFF0C\u8FD9\u662F\u6211\u7684\u9884\u544A\u51FD\uFF0C\u8C22\u8C22</span>
    </Font>
</div>`},"p5-react-component":{type:"NPM",value:"0.0.1"},"../global.less":{type:"FILE",value:n(42411).Z}},entry:"index.jsx"},context:{"../global.less":_,"p5-react-component":P,"/home/runner/work/p5-component/p5-component/src/global.less":_},renderOpts:{compile:function(){var x=g()(i()().mark(function E(){var b,d=arguments;return i()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,n.e(335).then(n.bind(n,37335));case 2:return h.abrupt("return",(b=h.sent).default.apply(b,d));case 3:case"end":return h.stop()}},E)}));function y(){return x.apply(this,arguments)}return y}()}}}},76588:function(r,s,n){"use strict";n.r(s),n.d(s,{Font:function(){return b},Loading:function(){return H}});var v=n(42122),i=n.n(v),m=n(70215),u=n.n(m),l=n(67294),g=n(50960),c=n(85893),O=["className","children"],P=/Android\s+([\d.]+);/i,_=navigator.userAgent,D=!!_.match(P),x=function(){var a=_.match(P);return a?parseFloat(a[1]):0},y=!D||x()>=6;function E(p){var a=p.className,t=a===void 0?"":a,o=p.children,f=u()(p,O),e=(0,l.useMemo)(function(){return y?"".concat(t," font-fz"):t},[t]);return(0,c.jsx)("div",i()(i()({className:e},f),{},{children:o}))}var b=E,d=n.p+"static/crowd0.460bbf7e.png",I=n.p+"static/crowd1.fe498716.png",h=n.p+"static/crowd2.846ce32e.png",R=n.p+"static/crowd3.954093e4.png",B=n.p+"static/crowd4.ec23720f.png",C=n.p+"static/crowd5.e2bd2014.png",W=n.p+"static/crowd6.53c731a0.png",F=n.p+"static/crowd7.73f4e184.png",T=n.p+"static/crowd8.48fb6013.png",K=n.p+"static/crowd9.b9d4423a.png",N=n.p+"static/crowd10.713dce8d.png",S=n.p+"static/crowd11.bc690236.png",A=[d,I,h,R,B,C,W,F,T,K,N,S],L=[],j=A.length,M=new Set,w={width:window.innerWidth,height:window.innerHeight,loop:!0,pause:!1,fixed:!1,end:!1,resize:!1,opacity:1,step:2},U=function(){var a=document.querySelector("#p5-loading-crowd");if(a)for(var t=a.width,o=0;o<j*2;o++){var f=A[o%j],e=new Image;e.src=f,L.push({img:e,step:Math.random()*2+2,step_y:Math.random()*.2+.2,x:t+o*100,y:20,flag_x:o<j,flag_y:!0,idx:o})}},z=function(){var a=document.querySelector("#p5-loading-crowd");if(a){var t=a.width;M.clear(),w.end=!1,L.forEach(function(o,f){o.step=Math.random()*w.step+w.step,o.step_y=Math.random()*.2+.2,o.x=t+f*100})}},$=function(){var a=document.querySelector("#p5-loading-crowd");if(a){var t=a.getContext("2d");if(t){var o=a.width,f=a.height;t.clearRect(0,0,o,f),t.beginPath(),t.fillStyle="rgb(0, 0, 0)",t.fillRect(0,0,o,f),L.forEach(function(e){e.img.complete&&(e.x>=-e.img.width?(e.x-=e.step,e.flag_y?e.y-e.step_y>=0?e.y-=e.step_y:e.flag_y=!1:e.y+e.step_y<=20?e.y+=e.step_y:e.flag_y=!0,t.save(),e.flag_x&&(t.scale(-1,1),t.translate(-o,0)),t.drawImage(e.img,0,0,e.img.width,e.img.height,e.x,e.y,f/2,f),t.restore()):(M.add(e.idx),M.size===j*2?w.loop?z():w.end=!0:M.size===j*2-2&&!w.loop&&(w.opacity=0)))}),t.save(),t.shadowBlur=100,t.fillStyle="rgb(0,0,0,0.2)",t.shadowColor="#8360c3",t.fillRect(0,0,o,f),t.restore()}}},k=function p(){$(),requestAnimationFrame(p)};function H(p){var a=p.width,t=p.height,o=p.className,f=o===void 0?"":o,e=(0,l.useRef)(null);return(0,l.useEffect)(function(){U(),k()},[]),(0,c.jsx)("canvas",{ref:e,id:"p5-loading-crowd",width:a,height:t,className:f,children:"index"})}},50960:function(r,s,n){"use strict";n.r(s)},41565:function(r,s,n){"use strict";n.r(s),n.d(s,{texts:function(){return i}});var v=n(37055);const i=[]},42411:function(r,s){"use strict";s.Z=`@color-gray: #808080;

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
}`},13012:function(r){function s(n){if(n==null)throw new TypeError("Cannot destructure "+n)}r.exports=s,r.exports.__esModule=!0,r.exports.default=r.exports},70215:function(r,s,n){var v=n(7071);function i(m,u){if(m==null)return{};var l=v(m,u),g,c;if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(m);for(c=0;c<O.length;c++)g=O[c],!(u.indexOf(g)>=0)&&Object.prototype.propertyIsEnumerable.call(m,g)&&(l[g]=m[g])}return l}r.exports=i,r.exports.__esModule=!0,r.exports.default=r.exports},7071:function(r){function s(n,v){if(n==null)return{};var i={},m=Object.keys(n),u,l;for(l=0;l<m.length;l++)u=m[l],!(v.indexOf(u)>=0)&&(i[u]=n[u]);return i}r.exports=s,r.exports.__esModule=!0,r.exports.default=r.exports}}]);
