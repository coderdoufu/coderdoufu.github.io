(self.webpackChunkjasperlai=self.webpackChunkjasperlai||[]).push([[1437],{2137:function(e,t,r){"use strict";function n(e,t,r,n,a,i,o){try{var s=e[i](o),l=s.value}catch(u){return void r(u)}s.done?t(l):Promise.resolve(l).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,i){var o=e.apply(t,r);function s(e){n(o,a,i,s,l,"next",e)}function l(e){n(o,a,i,s,l,"throw",e)}s(void 0)}))}}r.d(t,{Z:function(){return a}})},1417:function(e,t,r){"use strict";r.d(t,{zhw:function(){return n},D9H:function(){return a}});var n={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},a={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]}},6299:function(e,t,r){"use strict";var n=r(7294),a=r(6742),i=r(4973);t.Z=function(e){var t=e.metadata,r=t.previousPage,o=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,i.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},r&&n.createElement(a.Z,{className:"pagination-nav__link",to:r},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(i.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},o&&n.createElement(a.Z,{className:"pagination-nav__link",to:o},n.createElement("div",{className:"pagination-nav__label"},n.createElement(i.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))}},7863:function(e,t,r){"use strict";r.d(t,{q:function(){return ye},NI:function(){return $}});var n=r(2122),a=r(9756),i=r(7294);const o={arr:Array.isArray,obj:e=>"[object Object]"===Object.prototype.toString.call(e),fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e,nul:e=>null===e,set:e=>e instanceof Set,map:e=>e instanceof Map,equ(e,t){if(typeof e!=typeof t)return!1;if(o.str(e)||o.num(e))return e===t;if(o.obj(e)&&o.obj(t)&&Object.keys(e).length+Object.keys(t).length===0)return!0;let r;for(r in e)if(!(r in t))return!1;for(r in t)if(e[r]!==t[r])return!1;return!o.und(r)||e===t}};function s(){const e=(0,i.useState)(!1)[1];return(0,i.useCallback)((()=>e((e=>!e))),[])}function l(e,t){return o.und(e)||o.nul(e)?t:e}function u(e){return o.und(e)?[]:o.arr(e)?e:[e]}function c(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return o.fun(e)?e(...r):e}function d(e){const t=function(e){return e.to,e.from,e.config,e.onStart,e.onRest,e.onFrame,e.children,e.reset,e.reverse,e.force,e.immediate,e.delay,e.attach,e.destroyed,e.interpolateTo,e.ref,e.lazy,(0,a.Z)(e,["to","from","config","onStart","onRest","onFrame","children","reset","reverse","force","immediate","delay","attach","destroyed","interpolateTo","ref","lazy"])}(e);if(o.und(t))return(0,n.Z)({to:t},e);const r=Object.keys(e).reduce(((r,a)=>o.und(t[a])?(0,n.Z)({},r,{[a]:e[a]}):r),{});return(0,n.Z)({to:t},r)}class h{constructor(){this.payload=void 0,this.children=[]}getAnimatedValue(){return this.getValue()}getPayload(){return this.payload||this}attach(){}detach(){}getChildren(){return this.children}addChild(e){0===this.children.length&&this.attach(),this.children.push(e)}removeChild(e){const t=this.children.indexOf(e);this.children.splice(t,1),0===this.children.length&&this.detach()}}class f extends h{constructor(){super(...arguments),this.payload=[],this.attach=()=>this.payload.forEach((e=>e instanceof h&&e.addChild(this))),this.detach=()=>this.payload.forEach((e=>e instanceof h&&e.removeChild(this)))}}class p extends h{constructor(){super(...arguments),this.payload={},this.attach=()=>Object.values(this.payload).forEach((e=>e instanceof h&&e.addChild(this))),this.detach=()=>Object.values(this.payload).forEach((e=>e instanceof h&&e.removeChild(this)))}getValue(e){void 0===e&&(e=!1);const t={};for(const r in this.payload){const n=this.payload[r];(!e||n instanceof h)&&(t[r]=n instanceof h?n[e?"getAnimatedValue":"getValue"]():n)}return t}getAnimatedValue(){return this.getValue(!0)}}let g,m;function y(e,t){g={fn:e,transform:t}}function v(e){m=e}let b,w=e=>"undefined"!=typeof window?window.requestAnimationFrame(e):-1;function k(e){b=e}let V,x=()=>Date.now();function E(e){V=e}let A,C,Z=e=>e.current;function O(e){A=e}class P extends p{constructor(e,t){super(),this.update=void 0,this.payload=e.style?(0,n.Z)({},e,{style:A(e.style)}):e,this.update=t,this.attach()}}let j=!1;const q=new Set,M=()=>{if(!j)return!1;let e=x();for(let t of q){let r=!1;for(let n=0;n<t.configs.length;n++){let a,i,o=t.configs[n];for(let t=0;t<o.animatedValues.length;t++){let n=o.animatedValues[t];if(n.done)continue;let s=o.fromValues[t],l=o.toValues[t],u=n.lastPosition,c=l instanceof h,d=Array.isArray(o.initialVelocity)?o.initialVelocity[t]:o.initialVelocity;if(c&&(l=l.getValue()),o.immediate)n.setValue(l),n.done=!0;else if("string"!=typeof s&&"string"!=typeof l){if(void 0!==o.duration)u=s+o.easing((e-n.startTime)/o.duration)*(l-s),a=e>=n.startTime+o.duration;else if(o.decay)u=s+d/(1-.998)*(1-Math.exp(-(1-.998)*(e-n.startTime))),a=Math.abs(n.lastPosition-u)<.1,a&&(l=u);else{i=void 0!==n.lastTime?n.lastTime:e,d=void 0!==n.lastVelocity?n.lastVelocity:o.initialVelocity,e>i+64&&(i=e);let t=Math.floor(e-i);for(let e=0;e<t;++e){d+=1*((-o.tension*(u-l)+-o.friction*d)/o.mass)/1e3,u+=1*d/1e3}let r=!(!o.clamp||0===o.tension)&&(s<l?u>l:u<l),c=Math.abs(d)<=o.precision,h=0===o.tension||Math.abs(l-u)<=o.precision;a=r||c&&h,n.lastVelocity=d,n.lastTime=e}c&&!o.toValues[t].done&&(a=!1),a?(n.value!==l&&(u=l),n.done=!0):r=!0,n.setValue(u),n.lastPosition=u}else n.setValue(l),n.done=!0}t.props.onFrame&&(t.values[o.name]=o.interpolation.getValue())}t.props.onFrame&&t.props.onFrame(t.values),r||(q.delete(t),t.stop(!0))}return q.size?C?C():w(M):j=!1,j};function S(e,t,r){if("function"==typeof e)return e;if(Array.isArray(e))return S({range:e,output:t,extrapolate:r});if(b&&"string"==typeof e.output[0])return b(e);const n=e,a=n.output,i=n.range||[0,1],o=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,a,i,o,s,l){let u=l?l(e):e;if(u<t){if("identity"===o)return u;"clamp"===o&&(u=t)}if(u>r){if("identity"===s)return u;"clamp"===s&&(u=r)}if(n===a)return n;if(t===r)return e<=t?n:a;t===-1/0?u=-u:r===1/0?u-=t:u=(u-t)/(r-t);u=i(u),n===-1/0?u=-u:a===1/0?u+=n:u=u*(a-n)+n;return u}(e,i[t],i[t+1],a[t],a[t+1],l,o,s,n.map)}}class R extends f{constructor(e,t,r,n){super(),this.calc=void 0,this.payload=e instanceof f&&!(e instanceof R)?e.getPayload():Array.isArray(e)?e:[e],this.calc=S(t,r,n)}getValue(){return this.calc(...this.payload.map((e=>e.getValue())))}updateConfig(e,t,r){this.calc=S(e,t,r)}interpolate(e,t,r){return new R(this,e,t,r)}}function T(e,t){"update"in e?t.add(e):e.getChildren().forEach((e=>T(e,t)))}class z extends h{constructor(e){var t;super(),t=this,this.animatedStyles=new Set,this.value=void 0,this.startPosition=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.startTime=void 0,this.lastTime=void 0,this.done=!1,this.setValue=function(e,r){void 0===r&&(r=!0),t.value=e,r&&t.flush()},this.value=e,this.startPosition=e,this.lastPosition=e}flush(){0===this.animatedStyles.size&&T(this,this.animatedStyles),this.animatedStyles.forEach((e=>e.update()))}clearStyles(){this.animatedStyles.clear()}getValue(){return this.value}interpolate(e,t,r){return new R(this,e,t,r)}}class F extends f{constructor(e){super(),this.payload=e.map((e=>new z(e)))}setValue(e,t){void 0===t&&(t=!0),Array.isArray(e)?e.length===this.payload.length&&e.forEach(((e,r)=>this.payload[r].setValue(e,t))):this.payload.forEach((r=>r.setValue(e,t)))}getValue(){return this.payload.map((e=>e.getValue()))}interpolate(e,t){return new R(this,e,t)}}let N=0;class I{constructor(){this.id=void 0,this.idle=!0,this.hasChanged=!1,this.guid=0,this.local=0,this.props={},this.merged={},this.animations={},this.interpolations={},this.values={},this.configs=[],this.listeners=[],this.queue=[],this.localQueue=void 0,this.getValues=()=>this.interpolations,this.id=N++}update(e){if(!e)return this;const t=d(e),r=t.delay,i=void 0===r?0:r,s=t.to,l=(0,a.Z)(t,["delay","to"]);if(o.arr(s)||o.fun(s))this.queue.push((0,n.Z)({},l,{delay:i,to:s}));else if(s){let e={};Object.entries(s).forEach((t=>{let r=t[0],a=t[1];const o=(0,n.Z)({to:{[r]:a},delay:c(i,r)},l),s=e[o.delay]&&e[o.delay].to;e[o.delay]=(0,n.Z)({},e[o.delay],o,{to:(0,n.Z)({},s,o.to)})})),this.queue=Object.values(e)}return this.queue=this.queue.sort(((e,t)=>e.delay-t.delay)),this.diff(l),this}start(e){if(this.queue.length){this.idle=!1,this.localQueue&&this.localQueue.forEach((e=>{let t=e.from,r=void 0===t?{}:t,a=e.to,i=void 0===a?{}:a;o.obj(r)&&(this.merged=(0,n.Z)({},r,this.merged)),o.obj(i)&&(this.merged=(0,n.Z)({},this.merged,i))}));const t=this.local=++this.guid,r=this.localQueue=this.queue;this.queue=[],r.forEach(((n,i)=>{let s=n.delay,l=(0,a.Z)(n,["delay"]);const u=n=>{i===r.length-1&&t===this.guid&&n&&(this.idle=!0,this.props.onRest&&this.props.onRest(this.merged)),e&&e()};let c=o.arr(l.to)||o.fun(l.to);s?setTimeout((()=>{t===this.guid&&(c?this.runAsync(l,u):this.diff(l).start(u))}),s):c?this.runAsync(l,u):this.diff(l).start(u)}))}else o.fun(e)&&this.listeners.push(e),this.props.onStart&&this.props.onStart(),t=this,q.has(t)||q.add(t),j||(j=!0,w(C||M));var t;return this}stop(e){return this.listeners.forEach((t=>t(e))),this.listeners=[],this}pause(e){var t;return this.stop(!0),e&&(t=this,q.has(t)&&q.delete(t)),this}runAsync(e,t){var r=this;e.delay;let i=(0,a.Z)(e,["delay"]);const s=this.local;let l=Promise.resolve(void 0);if(o.arr(i.to))for(let a=0;a<i.to.length;a++){const e=a,t=(0,n.Z)({},i,d(i.to[e]));o.arr(t.config)&&(t.config=t.config[e]),l=l.then((()=>{if(s===this.guid)return new Promise((e=>this.diff(t).start(e)))}))}else if(o.fun(i.to)){let e,t=0;l=l.then((()=>i.to((r=>{const a=(0,n.Z)({},i,d(r));if(o.arr(a.config)&&(a.config=a.config[t]),t++,s===this.guid)return e=new Promise((e=>this.diff(a).start(e)))}),(function(e){return void 0===e&&(e=!0),r.stop(e)})).then((()=>e))))}l.then(t)}diff(e){this.props=(0,n.Z)({},this.props,e);let t=this.props,r=t.from,a=void 0===r?{}:r,i=t.to,s=void 0===i?{}:i,d=t.config,h=void 0===d?{}:d,f=t.reverse,p=t.attach,g=t.reset,y=t.immediate;if(f){var v=[s,a];a=v[0],s=v[1]}this.merged=(0,n.Z)({},a,this.merged,s),this.hasChanged=!1;let w=p&&p(this);if(this.animations=Object.entries(this.merged).reduce(((e,t)=>{let r=t[0],i=t[1],s=e[r]||{};const d=o.num(i),f=o.str(i)&&!i.startsWith("#")&&!/\d/.test(i)&&!m[i],p=o.arr(i),v=!d&&!p&&!f;let k=o.und(a[r])?i:a[r],V=d||p||f?i:1,E=c(h,r);w&&(V=w.animations[r].parent);let A,C=s.parent,Z=s.interpolation,O=u(w?V.getPayload():V),P=i;v&&(P=b({range:[0,1],output:[i,i]})(1));let j=Z&&Z.getValue();const q=!o.und(C)&&s.animatedValues.some((e=>!e.done)),M=!o.equ(P,j),S=!o.equ(P,s.previous),R=!o.equ(E,s.config);if(g||S&&M||R){if(d||f)C=Z=s.parent||new z(k);else if(p)C=Z=s.parent||new F(k);else if(v){let e=s.interpolation&&s.interpolation.calc(s.parent.value);e=void 0===e||g?k:e,s.parent?(C=s.parent,C.setValue(0,!1)):C=new z(0);const t={output:[e,i]};s.interpolation?(Z=s.interpolation,s.interpolation.updateConfig(t)):Z=C.interpolate(t)}return O=u(w?V.getPayload():V),A=u(C.getPayload()),g&&!v&&C.setValue(k,!1),this.hasChanged=!0,A.forEach((e=>{e.startPosition=e.value,e.lastPosition=e.value,e.lastVelocity=q?e.lastVelocity:void 0,e.lastTime=q?e.lastTime:void 0,e.startTime=x(),e.done=!1,e.animatedStyles.clear()})),c(y,r)&&C.setValue(v?V:i,!1),(0,n.Z)({},e,{[r]:(0,n.Z)({},s,{name:r,parent:C,interpolation:Z,animatedValues:A,toValues:O,previous:P,config:E,fromValues:u(C.getValue()),immediate:c(y,r),initialVelocity:l(E.velocity,0),clamp:l(E.clamp,!1),precision:l(E.precision,.01),tension:l(E.tension,170),friction:l(E.friction,26),mass:l(E.mass,1),duration:E.duration,easing:l(E.easing,(e=>e)),decay:E.decay})})}return M?e:(v&&(C.setValue(1,!1),Z.updateConfig({output:[P,P]})),C.done=!0,this.hasChanged=!0,(0,n.Z)({},e,{[r]:(0,n.Z)({},e[r],{previous:P})}))}),this.animations),this.hasChanged){this.configs=Object.values(this.animations),this.values={},this.interpolations={};for(let e in this.animations)this.interpolations[e]=this.animations[e].interpolation,this.values[e]=this.animations[e].interpolation.getValue()}return this}destroy(){this.stop(),this.props={},this.merged={},this.animations={},this.interpolations={},this.values={},this.configs=[],this.local=0}}const _=(e,t)=>{const r=(0,i.useRef)(!1),n=(0,i.useRef)(),a=o.fun(t),s=(0,i.useMemo)((()=>{let r;return n.current&&(n.current.map((e=>e.destroy())),n.current=void 0),[new Array(e).fill().map(((e,n)=>{const i=new I,o=a?c(t,n,i):t[n];return 0===n&&(r=o.ref),i.update(o),r||i.start(),i})),r]}),[e]),l=s[0],u=s[1];n.current=l;(0,i.useImperativeHandle)(u,(()=>({start:()=>Promise.all(n.current.map((e=>new Promise((t=>e.start(t)))))),stop:e=>n.current.forEach((t=>t.stop(e))),get controllers(){return n.current}})));const d=(0,i.useMemo)((()=>e=>n.current.map(((t,r)=>{t.update(a?c(e,r,t):e[r]),u||t.start()}))),[e]);(0,i.useEffect)((()=>{r.current?a||d(t):u||n.current.forEach((e=>e.start()))})),(0,i.useEffect)((()=>(r.current=!0,()=>n.current.forEach((e=>e.destroy())))),[]);const h=n.current.map((e=>e.getValues()));return a?[h,d,e=>n.current.forEach((t=>t.pause(e)))]:h},$=(e,t)=>{const r=(0,i.useRef)(!1),a=o.fun(t),s=c(t),l=(0,i.useRef)(),u=_(e,((e,t)=>(0===e&&(l.current=[]),l.current.push(t),(0,n.Z)({},s,{config:c(s.config,e),attach:e>0&&(()=>l.current[e-1])})))),d=u[0],h=u[1],f=u[2],p=(0,i.useMemo)((()=>e=>h(((t,r)=>{e.reverse;const a=e.reverse?t+1:t-1,i=l.current[a];return(0,n.Z)({},e,{config:c(e.config||s.config,t),attach:i&&(()=>i)})}))),[e,s.reverse]);return(0,i.useEffect)((()=>{r.current&&!a&&p(t)})),(0,i.useEffect)((()=>{r.current=!0}),[]),a?[d,p,f]:d};class L extends p{constructor(e){void 0===e&&(e={}),super(),!e.transform||e.transform instanceof h||(e=g.transform(e)),this.payload=e}}const H={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},G="[-+]?\\d*\\.?\\d+",W=G+"%";function D(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return"\\(\\s*("+t.join(")\\s*,\\s*(")+")\\s*\\)"}const Q=new RegExp("rgb"+D(G,G,G)),B=new RegExp("rgba"+D(G,G,G,G)),U=new RegExp("hsl"+D(G,W,W)),J=new RegExp("hsla"+D(G,W,W,G)),K=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,X=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Y=/^#([0-9a-fA-F]{6})$/,ee=/^#([0-9a-fA-F]{8})$/;function te(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function re(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,a=2*r-n,i=te(a,n,e+1/3),o=te(a,n,e),s=te(a,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function ne(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function ae(e){return(parseFloat(e)%360+360)%360/360}function ie(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function oe(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function se(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Y.exec(e))?parseInt(t[1]+"ff",16)>>>0:H.hasOwnProperty(e)?H[e]:(t=Q.exec(e))?(ne(t[1])<<24|ne(t[2])<<16|ne(t[3])<<8|255)>>>0:(t=B.exec(e))?(ne(t[1])<<24|ne(t[2])<<16|ne(t[3])<<8|ie(t[4]))>>>0:(t=K.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=ee.exec(e))?parseInt(t[1],16)>>>0:(t=X.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=U.exec(e))?(255|re(ae(t[1]),oe(t[2]),oe(t[3])))>>>0:(t=J.exec(e))?(re(ae(t[1]),oe(t[2]),oe(t[3]))|ie(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const le=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,ue=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,ce=new RegExp(`(${Object.keys(H).join("|")})`,"g");let de={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const he=["Webkit","Ms","Moz","O"];function fe(e,t,r){return null==t||"boolean"==typeof t||""===t?"":r||"number"!=typeof t||0===t||de.hasOwnProperty(e)&&de[e]?(""+t).trim():t+"px"}de=Object.keys(de).reduce(((e,t)=>(he.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),de);const pe={};O((e=>new L(e))),E("div"),k((e=>{const t=e.output.map((e=>e.replace(ue,se))).map((e=>e.replace(ce,se))),r=t[0].match(le).map((()=>[]));t.forEach((e=>{e.match(le).forEach(((e,t)=>r[t].push(+e)))}));const a=t[0].match(le).map(((t,a)=>S((0,n.Z)({},e,{output:r[a]}))));return e=>{let r=0;return t[0].replace(le,(()=>a[r++](e))).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,((e,t,r,n,a)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${a})`))}})),v(H),y(((e,t)=>{if(!e.nodeType||void 0===e.setAttribute)return!1;{const i=t.style,o=t.children,s=t.scrollTop,l=t.scrollLeft,u=(0,a.Z)(t,["style","children","scrollTop","scrollLeft"]),c="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName;void 0!==s&&(e.scrollTop=s),void 0!==l&&(e.scrollLeft=l),void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){var r=0===t.indexOf("--"),n=fe(t,i[t],r);"float"===t&&(t="cssFloat"),r?e.style.setProperty(t,n):e.style[t]=n}for(let t in u){const r=c?t:pe[t]||(pe[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())));void 0!==e.getAttribute(r)&&e.setAttribute(r,u[t])}}}),(e=>e));var ge,me;const ye=(ge=e=>(0,i.forwardRef)(((t,r)=>{const l=s(),u=(0,i.useRef)(!0),c=(0,i.useRef)(null),d=(0,i.useRef)(null),h=(0,i.useCallback)((e=>{const t=c.current;c.current=new P(e,(()=>{let e=!1;d.current&&(e=g.fn(d.current,c.current.getAnimatedValue())),d.current&&!1!==e||l()})),t&&t.detach()}),[]);(0,i.useEffect)((()=>()=>{u.current=!1,c.current&&c.current.detach()}),[]),(0,i.useImperativeHandle)(r,(()=>Z(d,u,l))),h(t);const f=c.current.getValue(),p=(f.scrollTop,f.scrollLeft,(0,a.Z)(f,["scrollTop","scrollLeft"])),m=(y=e,!o.fun(y)||y.prototype instanceof i.Component?e=>d.current=function(e,t){return t&&(o.fun(t)?t(e):o.obj(t)&&(t.current=e)),e}(e,r):void 0);var y;return i.createElement(e,(0,n.Z)({},p,{ref:m}))})),void 0===(me=!1)&&(me=!0),e=>(o.arr(e)?e:Object.keys(e)).reduce(((e,t)=>{const r=me?t[0].toLowerCase()+t.substring(1):t;return e[r]=ge(r),e}),ge))(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"])}}]);