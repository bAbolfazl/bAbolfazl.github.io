(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2462],{2462:function(n,t,e){"use strict";e.r(t);var r=e(5893),u=e(9153),o=e(5715),c=e(8867),i=e(3049),f=(e(5729),e(7294)),s=e(5518),a=function(){var n=(0,u.zV)({moveend:function(n){},locationfound:function(n){this.flyTo(n.latlng,5)}});return(0,f.useEffect)((function(){n.locate()}),[]),null};t.default=function(){return(0,r.jsx)("div",{className:"relative",style:{width:"100%",height:"100%"},children:(0,r.jsxs)(o.h,{center:[20.505,10.09],zoom:3,scrollWheelZoom:!1,minZoom:3,dragging:!s.tq,touchZoom:!0,className:"h-full w-full",zoomControl:!1,children:[(0,r.jsx)(c.I,{url:"http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",subdomains:["mt0","mt1","mt2","mt3"]}),(0,r.jsx)(a,{}),(0,r.jsx)(i.L,{position:"bottomright"})]})})}},5729:function(){},5715:function(n,t,e){"use strict";e.d(t,{h:function(){return f}});var r=e(8575),u=e(5243),o=e(7294);function c(){return c=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},c.apply(this,arguments)}function i({bounds:n,boundsOptions:t,center:e,children:i,className:f,id:s,placeholder:a,style:l,whenReady:d,zoom:m,...p},v){const[h]=(0,o.useState)({className:f,id:s,style:l}),[y,b]=(0,o.useState)(null);(0,o.useImperativeHandle)(v,(()=>y?.map??null),[y]);const E=(0,o.useCallback)((o=>{if(null!==o&&null===y){const c=new u.Map(o,p);null!=e&&null!=m?c.setView(e,m):null!=n&&c.fitBounds(n,t),null!=d&&c.whenReady(d),b((0,r.Hb)(c))}}),[]);(0,o.useEffect)((()=>()=>{y?.map.remove()}),[y]);const w=y?o.createElement(r.UO,{value:y},i):a??null;return o.createElement("div",c({},h,{ref:E}),w)}const f=(0,o.forwardRef)(i)},8867:function(n,t,e){"use strict";e.d(t,{I:function(){return i}});var r=e(9531),u=e(9163),o=e(5170),c=e(5243);const i=(0,r.Lf)((function({url:n,...t},e){const r=new c.TileLayer(n,(0,u.q)(t,e));return(0,o.O)(r,e)}),(function(n,t,e){const{opacity:r,zIndex:u}=t;null!=r&&r!==e.opacity&&n.setOpacity(r),null!=u&&u!==e.zIndex&&n.setZIndex(u)}))},3049:function(n,t,e){"use strict";e.d(t,{L:function(){return o}});var r=e(9531),u=e(5243);const o=(0,r.vm)((function(n){return new u.Control.Zoom(n)}))},9153:function(n,t,e){"use strict";e.d(t,{zV:function(){return c}});var r=e(8575),u=e(7294);function o(){return(0,r.mE)().map}function c(n){const t=o();return(0,u.useEffect)((function(){return t.on(n),function(){t.off(n)}}),[t,n]),t}},8575:function(n,t,e){"use strict";e.d(t,{Hb:function(){return u},UO:function(){return c},mE:function(){return i}});var r=e(7294);function u(n){return Object.freeze({__version:1,map:n})}const o=(0,r.createContext)(null),c=o.Provider;function i(){const n=(0,r.useContext)(o);if(null==n)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return n}},5170:function(n,t,e){"use strict";e.d(t,{I:function(){return o},O:function(){return u}});var r=e(7294);function u(n,t,e){return Object.freeze({instance:n,context:t,container:e})}function o(n,t){return null==t?function(t,e){return(0,r.useRef)(n(t,e))}:function(e,u){const o=(0,r.useRef)(n(e,u)),c=(0,r.useRef)(e),{instance:i}=o.current;return(0,r.useEffect)((function(){c.current!==e&&(t(i,e,c.current),c.current=e)}),[i,e,u]),o}}},9531:function(n,t,e){"use strict";e.d(t,{vm:function(){return s},Lf:function(){return a}});var r=e(7294);e(3935);function u(n){function t(t,e){const{instance:u}=n(t).current;return(0,r.useImperativeHandle)(e,(()=>u)),null}return(0,r.forwardRef)(t)}var o=e(8575);var c=e(5170);var i=e(9163);function f(n){return function(t){const e=(0,o.mE)(),u=n((0,i.q)(t,e),e);return function(n,t){const e=(0,r.useRef)(t);(0,r.useEffect)((function(){t!==e.current&&null!=n.attributionControl&&(null!=e.current&&n.attributionControl.removeAttribution(e.current),null!=t&&n.attributionControl.addAttribution(t)),e.current=t}),[n,t])}(e.map,t.attribution),function(n,t){const e=(0,r.useRef)();(0,r.useEffect)((function(){return null!=t&&n.instance.on(t),e.current=t,function(){null!=e.current&&n.instance.off(e.current),e.current=null}}),[n,t])}(u.current,t.eventHandlers),function(n,t){(0,r.useEffect)((function(){return(t.layerContainer??t.map).addLayer(n.instance),function(){t.layerContainer?.removeLayer(n.instance),t.map.removeLayer(n.instance)}}),[t,n])}(u.current,e),u}}function s(n){const t=function(n){return function(t){const e=(0,o.mE)(),u=n(t,e),{instance:c}=u.current,i=(0,r.useRef)(t.position),{position:f}=t;return(0,r.useEffect)((function(){return c.addTo(e.map),function(){c.remove()}}),[e.map,c]),(0,r.useEffect)((function(){null!=f&&f!==i.current&&(c.setPosition(f),i.current=f)}),[c,f]),u}}((0,c.I)((function(t,e){return(0,c.O)(n(t),e)})));return u(t)}function a(n,t){return u(f((0,c.I)(n,t)))}},9163:function(n,t,e){"use strict";function r(n,t){const e=n.pane??t.pane;return e?{...n,pane:e}:n}e.d(t,{q:function(){return r}})}}]);