(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{92703:function(t,e,n){"use strict";var r=n(50414);function o(){}function a(){}a.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,a,i){if(i!==r){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},45697:function(t,e,n){t.exports=n(92703)()},50414:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98130:function(t,e,n){"use strict";var r=n(67294),o=n(45697);function a(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r,o=u(t);if(e){var a=u(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return(n=r)&&("object"==typeof n||"function"==typeof n)?n:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this)}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function m(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=String(t);if(0===n)return r;var o=r.match(/(.*?)([0-9]+)(.*)/),a=o?o[1]:"",i=o?o[3]:"",s=o?o[2]:r,c=s.length>=n?s:(((function(t){if(Array.isArray(t))return f(t)})(e=Array(n))||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map(function(){return"0"}).join("")+s).slice(-1*n);return"".concat(a).concat(c).concat(i)}var d={daysInHours:!1,zeroPadTime:2},h=function(t){c(n,t);var e=p(n);function n(){var t;return a(this,n),t=e.apply(this,arguments),t.state={count:t.props.count||3},t.startCountdown=function(){t.interval=window.setInterval(function(){0==t.state.count-1?(t.stopCountdown(),t.props.onComplete&&t.props.onComplete()):t.setState(function(t){return{count:t.count-1}})},1e3)},t.stopCountdown=function(){clearInterval(t.interval)},t.addTime=function(e){t.stopCountdown(),t.setState(function(t){return{count:t.count+e}},t.startCountdown)},t}return s(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?(0,r.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(r.Component);h.propTypes={count:o.number,children:o.element,onComplete:o.func};var y=function(t){c(n,t);var e=p(n);function n(t){var o;if(a(this,n),(o=e.call(this,t)).mounted=!1,o.initialTimestamp=o.calcOffsetStartTimestamp(),o.offsetStartTimestamp=o.props.autoStart?0:o.initialTimestamp,o.offsetTime=0,o.legacyMode=!1,o.legacyCountdownRef=(0,r.createRef)(),o.tick=function(){var t=o.calcTimeDelta(),e=t.completed&&!o.props.overtime?void 0:o.props.onTick;o.setTimeDeltaState(t,void 0,e)},o.start=function(){if(!o.isStarted()){var t=o.offsetStartTimestamp;o.offsetStartTimestamp=0,o.offsetTime+=t?o.calcOffsetStartTimestamp()-t:0;var e=o.calcTimeDelta();o.setTimeDeltaState(e,"STARTED",o.props.onStart),o.props.controlled||e.completed&&!o.props.overtime||(o.clearTimer(),o.interval=window.setInterval(o.tick,o.props.intervalDelay))}},o.pause=function(){o.isPaused()||(o.clearTimer(),o.offsetStartTimestamp=o.calcOffsetStartTimestamp(),o.setTimeDeltaState(o.state.timeDelta,"PAUSED",o.props.onPause))},o.stop=function(){o.isStopped()||(o.clearTimer(),o.offsetStartTimestamp=o.calcOffsetStartTimestamp(),o.offsetTime=o.offsetStartTimestamp-o.initialTimestamp,o.setTimeDeltaState(o.calcTimeDelta(),"STOPPED",o.props.onStop))},o.isStarted=function(){return o.isStatus("STARTED")},o.isPaused=function(){return o.isStatus("PAUSED")},o.isStopped=function(){return o.isStatus("STOPPED")},o.isCompleted=function(){return o.isStatus("COMPLETED")},t.date){var i=o.calcTimeDelta();o.state={timeDelta:i,status:i.completed?"COMPLETED":"STOPPED"}}else o.legacyMode=!0;return o}return s(n,[{key:"componentDidMount",value:function(){!this.legacyMode&&(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(t){this.legacyMode||this.props.date===t.date||(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var t=this.props,e=t.date,n=t.now,r=t.precision,o=t.controlled,a=t.overtime;return function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.now,o=void 0===r?Date.now:r,a=n.precision,i=n.controlled,s=n.offsetTime,c=n.overtime;e="string"==typeof t?new Date(t).getTime():t instanceof Date?t.getTime():t,i||(e+=void 0===s?0:s);var u=i?e:e-o(),l=Math.round(1e3*parseFloat(((c?u:Math.max(0,u))/1e3).toFixed(Math.min(20,Math.max(0,void 0===a?0:a))))),p=Math.abs(l)/1e3;return{total:l,days:Math.floor(p/86400),hours:Math.floor(p/3600%24),minutes:Math.floor(p/60%60),seconds:Math.floor(p%60),milliseconds:Number((p%1*1e3).toFixed()),completed:l<=0}}(e,{now:n,precision:r,controlled:o,offsetTime:this.offsetTime,overtime:a})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(t){this.legacyCountdownRef.current.addTime(t)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(t){return this.state.status===t}},{key:"setTimeDeltaState",value:function(t,e,n){var r=this;if(this.mounted){var o=t.completed&&!this.state.timeDelta.completed,a=t.completed&&"STARTED"===e;return o&&!this.props.overtime&&this.clearTimer(),this.setState(function(n){var o=e||n.status;return t.completed&&!r.props.overtime?o="COMPLETED":e||"COMPLETED"!==o||(o="STOPPED"),{timeDelta:t,status:o}},function(){n&&n(r.state.timeDelta),r.props.onComplete&&(o||a)&&r.props.onComplete(t,a)})}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var t,e,n,r,o,a,i,s,c,u,l,p=this.props,f=p.daysInHours,h=p.zeroPadTime,y=p.zeroPadDays,v=this.state.timeDelta;return Object.assign(Object.assign({},v),{api:this.getApi(),props:this.props,formatted:(t=v.days,e=v.hours,n=v.minutes,r=v.seconds,a=(o=Object.assign(Object.assign({},d),{daysInHours:f,zeroPadTime:h,zeroPadDays:y})).daysInHours,i=o.zeroPadTime,c=void 0===(s=o.zeroPadDays)?i:s,u=Math.min(2,i),l=a?m(e+24*t,i):m(e,u),{days:a?"":m(t,c),hours:l,minutes:m(n,u),seconds:m(r,u)})})}},{key:"render",value:function(){if(this.legacyMode){var t=this.props,e=t.count,n=t.children,o=t.onComplete;return(0,r.createElement)(h,{ref:this.legacyCountdownRef,count:e,onComplete:o},n)}var a=this.props,i=a.className,s=a.overtime,c=a.children,u=a.renderer,l=this.getRenderProps();if(u)return u(l);if(c&&this.state.timeDelta.completed&&!s)return(0,r.cloneElement)(c,{countdown:l});var p=l.formatted,f=p.days,m=p.hours,d=p.minutes,y=p.seconds;return(0,r.createElement)("span",{className:i},l.total<0?"-":"",f,f?":":"",m,":",d,":",y)}}]),n}(r.Component);y.defaultProps=Object.assign(Object.assign({},d),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),y.propTypes={date:(0,o.oneOfType)([(0,o.instanceOf)(Date),o.string,o.number]),daysInHours:o.bool,zeroPadTime:o.number,zeroPadDays:o.number,controlled:o.bool,intervalDelay:o.number,precision:o.number,autoStart:o.bool,overtime:o.bool,className:o.string,children:o.element,renderer:o.func,now:o.func,onMount:o.func,onStart:o.func,onPause:o.func,onStop:o.func,onTick:o.func,onComplete:o.func},e.ZP=y},8702:function(t,e,n){/*! For license information please see index.js.LICENSE.txt */(()=>{var t={184:(t,e)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var a=typeof n;if("string"===a||"number"===a)t.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&t.push(i)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){t.push(n.toString());continue}for(var s in n)r.call(n,s)&&n[s]&&t.push(s)}}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(n=(function(){return o}).apply(e,[]))||(t.exports=n)}()},28:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([t.id,"/* :where() gives the styles specificity 0, which makes them overridable */\n:where(.vi__wrapper) {\n  position: relative;\n  width: min-content;\n}\n\n.vi {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  box-sizing: border-box;\n  position: absolute;\n  color: transparent;\n  background: transparent;\n  caret-color: transparent;\n  outline: none;\n  border: 0 none transparent;\n}\n\n.vi::selection {\n  background: transparent;\n}\n\n:where(.vi__container) {\n  display: flex;\n  gap: 8px;\n  height: 50px;\n  width: 300px;\n}\n\n:where(.vi__character) {\n  height: 100%;\n  flex-grow: 1;\n  flex-basis: 0;\n  text-align: center;\n  font-size: 36px;\n  line-height: 50px;\n  color: black;\n  background-color: white;\n  border: 1px solid black;\n  cursor: default;\n  user-select: none;\n  box-sizing: border-box;\n}\n\n:where(.vi__character--inactive) {\n  color: dimgray;\n  background-color: lightgray;\n}\n\n:where(.vi__character--selected) {\n  outline: 2px solid cornflowerblue;\n  color: cornflowerblue;\n}\n",""]);let s=i},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n}).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]&&(l[1]="@media ".concat(l[2]," {").concat(l[1],"}")),l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:t=>{"use strict";t.exports=function(t){return t[1]}},703:(t,e,n)=>{"use strict";var r=n(414);function o(){}function a(){}a.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,a,i){if(i!==r){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},697:(t,e,n)=>{t.exports=n(703)()},414:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={id:e,exports:{}};return t[e](a,a.exports,o),a.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var a={};for(var i in(()=>{"use strict";o.r(a),o.d(a,{default:()=>S});let t=n(67294);var e=o.n(t),r=o(184),i=o.n(r),s=o(697),c=o.n(s),u=o(28);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var p=["className","type"],f=["className"];function m(t,e,n){var r;return(r=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e),(e="symbol"===l(r)?r:String(r))in t)?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(){return(d=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function h(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,i,s=[],c=!0,u=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return s}}(t,e)||v(t,e)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){if(t){if("string"==typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(t,e):void 0}}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var g=(0,t.forwardRef)(function(n,r){var o=n.value,a=n.length,s=n.validChars,c=n.placeholder,l=n.autoFocus,g=n.passwordMode,S=n.inputProps,T=n.containerProps,O=n.classNames,P=n.onChange,w=n.onFocus,_=n.onBlur,D=n.onComplete,C=y((0,t.useState)(""),2),j=C[0],E=C[1],k=y((0,t.useState)(!1),2),x=k[0],M=k[1],A=(0,t.useRef)(null);(0,t.useEffect)(function(){l&&A.current.focus()},[l]);var I,R=function(){A.current.focus()},N=function(){return null!=o?o:j},z=S.className,U=S.type,F=h(S,p),L=T.className,H=h(T,f);return e().createElement("div",{className:"vi__wrapper"},e().createElement("input",d({"aria-label":"verification input",spellCheck:!1,value:N(),onChange:function(t){var e=t.target.value.replace(/\s/g,"");RegExp("^[".concat(s,"]{0,").concat(a,"}$")).test(e)&&(P&&(null==P||P(e)),E(e),e.length===a&&(null==D||D(e)))},ref:function(t){A.current=t,"function"==typeof r?r(t):r&&(r.current=t)},className:i()("vi",z),onKeyDown:function(t){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(t.key)&&t.preventDefault()},onFocus:function(){M(!0),null==w||w()},onBlur:function(){M(!1),null==_||_()},onSelect:function(t){var e=t.target.value;t.target.setSelectionRange(e.length,e.length)},type:g?"password":U},F)),e().createElement("div",d({"data-testid":"container",className:i()("vi__container",O.container,L),onClick:function(){return A.current.focus()}},H),((function(t){if(Array.isArray(t))return b(t)})(I=Array(a))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(I)||v(I)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map(function(t,n){var r;return e().createElement("div",{className:i()("vi__character",O.character,(m(r={"vi__character--selected":(N().length===n||N().length===n+1&&a===n+1)&&x},O.characterSelected,(N().length===n||N().length===n+1&&a===n+1)&&x),m(r,"vi__character--inactive",N().length<n),m(r,O.characterInactive,N().length<n),r)),onClick:R,id:"field-".concat(n),"data-testid":"character-".concat(n),key:n},g&&N()[n]?"*":N()[n]||c)})),e().createElement("style",{dangerouslySetInnerHTML:{__html:u.Z}}))});g.displayName="VerificationInput",g.propTypes={value:c().string,length:c().number,validChars:c().string,placeholder:c().string,autoFocus:c().bool,passwordMode:c().bool,inputProps:c().object,containerProps:c().object,classNames:c().shape({container:c().string,character:c().string,characterInactive:c().string,characterSelected:c().string}),onChange:c().func,onFocus:c().func,onBlur:c().func,onComplete:c().func},g.defaultProps={length:6,validChars:"A-Za-z0-9",placeholder:"\xb7",autoFocus:!1,inputProps:{},containerProps:{},classNames:{}};let S=g})(),a)e[i]=a[i];a.__esModule&&Object.defineProperty(e,"__esModule",{value:!0})})()}}]);