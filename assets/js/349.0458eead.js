(self.webpackChunkzxuqian_cn=self.webpackChunkzxuqian_cn||[]).push([[349],{1756:function(e,t,n){"use strict";n.d(t,{Z:function(){return O}});var r=n(2122),o=n(7294),a=n(6010),l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},s={Prism:n(7410).Z,theme:l};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=i({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=i({},n,{backgroundColor:null}),o};function y(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var m=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=i({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==o&&(a.style=void 0!==a.style?i({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),c(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var l=r?{display:"inline-block"}:{},s=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(s))}})),c(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,l=i({},y(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?i({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),c(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,l=0,s=[],c=[s];l>-1;){for(;(a=r[l]++)<o[l];){var i=void 0,h=t[l],y=n[l][a];if("string"==typeof y?(h=l>0?h:["plain"],i=y):(h=d(h,y.type),y.alias&&(h=d(h,y.alias)),i=y.content),"string"==typeof i){var m=i.split(u),g=m.length;s.push({types:h,content:m[0]});for(var f=1;f<g;f++)p(s),c.push(s=[]),s.push({types:h,content:m[f]})}else l++,t.push(h),n.push(i),r.push(0),o.push(i.length)}l--,t.pop(),n.pop(),r.pop(),o.pop()}return p(s),c}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var g=n(7594),f=n.n(g),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},b=n(5350),k=n(9306),E=function(){var e=(0,k.LU)().prism,t=(0,b.Z)().isDarkTheme,n=e.theme||v,r=e.darkTheme||n;return t?r:n},j=n(4973),Z="codeBlockContainer_K1bP",N="codeBlockContent_hGly",x="codeBlockTitle_eoMF",T="codeBlock_23N8",C="codeBlockWithTitle_2JqI",L="copyButton_Ue-o",B="codeBlockLines_39YC",_=/{([\d,-]+)}/,P=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")};function O(e){var t=e.children,n=e.className,l=e.metastring,c=e.title,i=(0,k.LU)().prism,u=(0,o.useState)(!1),p=u[0],d=u[1],h=(0,o.useState)(!1),y=h[0],g=h[1];(0,o.useEffect)((function(){g(!0)}),[]);var v=(0,k.bc)(l)||c,b=(0,o.useRef)(null),O=[],S=E(),D=Array.isArray(t)?t.join(""):t;if(l&&_.test(l)){var w=l.match(_)[1];O=f()(w).filter((function(e){return e>0}))}var A=n&&n.replace(/language-/,"");!A&&i.defaultLanguage&&(A=i.defaultLanguage);var I=D.replace(/\n$/,"");if(0===O.length&&void 0!==A){for(var z,R="",$=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return P(["js","jsBlock"]);case"jsx":case"tsx":return P(["js","jsBlock","jsx"]);case"html":return P(["js","jsBlock","html"]);case"python":case"py":return P(["python"]);default:return P()}}(A),F=D.replace(/\n$/,"").split("\n"),U=0;U<F.length;){var q=U+1,V=F[U].match($);if(null!==V){switch(V.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":R+=q+",";break;case"highlight-start":z=q;break;case"highlight-end":R+=z+"-"+(q-1)+","}F.splice(U,1)}else U+=1}O=f()(R),I=F.join("\n")}var W=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,o=document.createElement("textarea"),a=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var l=document.getSelection(),s=!1;l.rangeCount>0&&(s=l.getRangeAt(0)),r.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(i){}o.remove(),s&&(l.removeAllRanges(),l.addRange(s)),a&&a.focus()}(I),d(!0),setTimeout((function(){return d(!1)}),2e3)};return o.createElement(m,(0,r.Z)({},s,{key:String(y),theme:S,code:I,language:A}),(function(e){var t,n=e.className,l=e.style,s=e.tokens,c=e.getLineProps,i=e.getTokenProps;return o.createElement("div",{className:Z},v&&o.createElement("div",{style:l,className:x},v),o.createElement("div",{className:(0,a.Z)(N,A)},o.createElement("pre",{tabIndex:0,className:(0,a.Z)(n,T,"thin-scrollbar",(t={},t[C]=v,t)),style:l},o.createElement("code",{className:B},s.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=c({line:e,key:t});return O.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),o.createElement("span",(0,r.Z)({key:t},n),e.map((function(e,t){return o.createElement("span",(0,r.Z)({key:t},i({token:e,key:t})))})))})))),o.createElement("button",{ref:b,type:"button","aria-label":(0,j.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,a.Z)(L,"clean-btn"),onClick:W},p?o.createElement(j.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.createElement(j.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},6159:function(e,t,n){"use strict";n.d(t,{N:function(){return p},Z:function(){return d}});var r=n(9756),o=n(2122),a=n(7294),l=n(6010),s=n(4973),c=n(9306),i="enhancedAnchor_2LWZ",u="h1Heading_27L5",p=function(e){var t=Object.assign({},e);return a.createElement("header",null,a.createElement("h1",(0,o.Z)({},t,{id:void 0,className:u}),t.children))},d=function(e){return"h1"===e?p:(t=e,function(e){var n,o=e.id,u=(0,r.Z)(e,["id"]),p=(0,c.LU)().navbar.hideOnScroll;return o?a.createElement(t,u,a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.Z)("anchor",(n={},n[i]=!p,n)),id:o}),u.children,a.createElement("a",{className:"hash-link",href:"#"+o,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):a.createElement(t,u)});var t}},3491:function(e,t,n){"use strict";var r=n(7294),o=n(6742),a=n(8573),l=n(6159),s={code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(a.Z,e):r.createElement("code",e)},a:function(e){return r.createElement(o.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:r.createElement(a.Z,(0,r.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:(0,l.Z)("h1"),h2:(0,l.Z)("h2"),h3:(0,l.Z)("h3"),h4:(0,l.Z)("h4"),h5:(0,l.Z)("h5"),h6:(0,l.Z)("h6")};t.Z=s},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);