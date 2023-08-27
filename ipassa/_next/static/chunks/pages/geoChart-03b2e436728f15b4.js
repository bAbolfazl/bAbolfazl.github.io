(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1055],{9041:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/geoChart",function(){return n(2852)}])},1947:function(e,t,n){"use strict";var i=n(5893);t.Z=function(e){var t=e.className;return(0,i.jsx)("div",{className:"".concat(t," flex items-center justify-center w-full h-full min-h-[200px] "),children:(0,i.jsxs)("svg",{className:"inline mr-2 w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"50",children:[(0,i.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,i.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]})})}},2852:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var i=n(5893),r=n(5152),s=n.n(r),l=(n(9008),n(7294)),a=n(3471),o=n(9454),c=n(7441),d=n.n(c),x=n(7568),h=n(4051),u=n.n(h),f=n(6355),m=function(){var e=(0,x.Z)(u().mark((function e(){var t,n,i=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"",e.next=3,f.Z.get("geoChart",{params:{type:t}});case 3:return n=e.sent.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=n(1947),p=s()((function(){return Promise.all([n.e(571),n.e(2334),n.e(5096),n.e(9201)]).then(n.bind(n,9201))}),{loadableGenerated:{webpack:function(){return[9201]}},ssr:!1}),g=function(){var e,t,n,r,s=(0,l.useState)("animal"),c=s[0],x=s[1],h=(0,l.useState)("violations_of_animal_right"),u=h[0],f=h[1],g=(0,a.useQuery)(["projects",c],(function(){return m(c)}),{}),j=g.data,v=(g.isLoading,g.isFetching),w=(0,o.Pv)(null===j||void 0===j||null===(e=j.data)||void 0===e?void 0:e.countries),C=Object.values(w),N=Math.max.apply(Math,C)-Math.min.apply(Math,C),b=(0,a.useQuery)(["projects",u],(function(){return m(u)}),{}),A=b.data,F=(b.isLoading,b.isFetching),_=(0,o.Pv)(null===A||void 0===A||null===(t=A.data)||void 0===t?void 0:t.countries),k=Object.values(_),z=Math.max.apply(Math,k)-Math.min.apply(Math,k);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:d().container,children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{className:"text-center lg:text-5xl text-2xl",children:"GeoChart statistical analysis map"}),(0,i.jsx)("hr",{className:"divider"}),(0,i.jsx)("div",{className:"uk-width-1-1",style:{paddingBottom:"1rem"},children:(0,i.jsxs)("h2",{children:["Number of"," ",(0,i.jsxs)("select",{className:"uk-display-inline uk-select",style:{"font-size":"20px",width:"auto"},value:c,onChange:function(e){return x(e.target.value)},children:[(0,i.jsx)("option",{selected:"",value:"animal",children:"Animal"}),(0,i.jsx)("option",{value:"animal_owner",children:"Animal Owner"}),(0,i.jsx)("option",{value:"veterinarian",children:"Veterinary Clinic"}),(0,i.jsx)("option",{value:"animal_rescuer",children:"Animal Rescuer"}),(0,i.jsx)("option",{value:"animal_shelter",children:"Animal Shelter"}),(0,i.jsx)("option",{value:"animal_shelter",children:"Vegan"})]})," ","in the world:",(0,i.jsxs)("span",{children:[" ",null===j||void 0===j||null===(n=j.data)||void 0===n?void 0:n.total," "]})]})}),(0,i.jsx)("div",{className:"".concat(d().mapCont),children:v?(0,i.jsx)("div",{style:{width:"100%"},children:(0,i.jsx)(y.Z,{})}):(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("div",{children:(0,i.jsx)(p,{config:{values:w,borderColor:"red",borderWidth:10,scale:["#2B8ACA","#038B49"],normalizeFunction:"polynomial"}})}),(0,i.jsxs)("div",{className:"uk-text-center mt-3 absolute left-0 bottom-0 lg:w-[300px] w-[200px] p-3",children:[(0,i.jsx)("svg",{id:"legendData",width:"100%",preserveAspectRatio:"xMinYMin meet",viewBox:"0 0 290 140",children:(0,i.jsxs)("g",{children:[(0,i.jsxs)("g",{children:[(0,i.jsx)("rect",{x:"120",y:"120",height:"15",width:"17.5",stroke:"#828080",style:{fill:"white"}}),(0,i.jsx)("text",{className:"legend-text",x:"115",y:"120",dy:"1em",style:{"font-size":"12px","text-anchor":"end"},children:"Not reported"})]}),(0,i.jsxs)("g",{children:[(0,i.jsx)("rect",{x:"120",y:"100",height:"15",width:"35",stroke:"#828080",style:{fill:"#2B8ACA"}}),(0,i.jsx)("text",{className:"legend-text",x:"115",y:"100",dy:"1em",style:{"font-size":"12px","text-anchor":"end"},children:"0 to ".concat((N/6).toFixed())})]}),(0,i.jsxs)("g",{children:[(0,i.jsx)("rect",{x:"120",y:"80",height:"15",width:"52.5",stroke:"#828080",style:{fill:"#1D8A9D"}}),(0,i.jsx)("text",{className:"legend-text",x:"115",y:"80",dy:"1em",style:{"font-size":"12px","text-anchor":"end"},children:"".concat((N/6).toFixed()," to ").concat((N/6*2).toFixed())})]}),(0,i.jsxs)("g",{children:[(0,i.jsx)("rect",{x:"120",y:"60",height:"15",width:"70",stroke:"#828080",style:{fill:"#1A8A92"}}),(0,i.jsx)("text",{className:"legend-text",x:"115",y:"60",dy:"1em",style:{"font-size":"12px","text-anchor":"end"},children:"".concat((N/6*2).toFixed()," to ").concat((N/6*3).toFixed())})]}),(0,i.jsxs)("g",{children:[(0,i.jsx)("rect",{x:"120",y:"40",height:"15",width:"87.5",stroke:"#828080",style:{fill:"#178A8A"}}),(0,i.jsx)("text",{className:"legend-text",x:"115",y:"40",dy:"1em",style:{"font-size":"12px","text-anchor":"end"},children:"".concat((N/6*3).toFixed()," to ").concat((N/6*4).toFixed())})]}),(0,i.jsxs)("g",{children:[(0,i.jsx)("rect",{x:"120",y:"20",height:"15",width:"105",stroke:"#828080",style:{fill:"#0A8B5F"}}),(0,i.jsxs)("text",{className:"legend-text",x:"115",y:"20",dy:"1em",style:{"font-size":"12px","text-anchor":"end"},children:["".concat((N/6*4).toFixed()," to ").concat((N/6*5).toFixed())," "]})]}),(0,i.jsxs)("g",{children:[(0,i.jsx)("rect",{x:"120",y:"0",height:"15",width:"122.5",stroke:"#828080",style:{fill:"#038B49"}}),(0,i.jsxs)("text",{className:"legend-text",x:"115",y:"0",dy:"1em",style:{"font-size":"12px","text-anchor":"end"},children:["".concat((N/6*5).toFixed()," ")," and above"]})]})]})}),(0,i.jsx)("p",{id:"legendTitle",style:{textAlign:"left",marginTop:"10px"},children:"Number of total cases of"})]})]})})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("hr",{className:"divider"}),(0,i.jsx)("div",{className:"uk-width-1-1",styles:{"padding-bottom":"1rem"},children:(0,i.jsxs)("h2",{children:["Number of"," ",(0,i.jsxs)("select",{className:"uk-display-inline uk-select",style:{"font-size":"20px",width:"auto"},value:u,onChange:function(e){return f(e.target.value)},children:[(0,i.jsx)("option",{selected:"",value:"violations_of_animal_right",children:"Violators of Animal Right"}),(0,i.jsx)("option",{value:"animal_death",children:"Animal Death"}),(0,i.jsx)("option",{value:"animal_lost",children:"Animal Lost"}),(0,i.jsx)("option",{value:"animal_stolen",children:"Animal Steal"})]})," ","in the world:",(0,i.jsxs)("span",{children:[" ",null===A||void 0===A||null===(r=A.data)||void 0===r?void 0:r.total," "]})]})}),(0,i.jsx)("div",{className:d().mapCont,children:F?(0,i.jsx)("div",{style:{width:"100%"},children:(0,i.jsx)(y.Z,{})}):(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("div",{children:(0,i.jsx)(p,{config:{values:_,scale:["#ffff00","#000000"],normalizeFunction:"polynomial"}})}),(0,i.jsxs)("div",{className:"uk-text-center mt-3 absolute left-0 bottom-0 lg:w-[300px] w-[200px] p-3",children:[(0,i.jsx)("svg",{id:"legendData",width:"100%",preserveAspectRatio:"xMinYMin meet",viewBox:"0 0 290 140",children:(0,i.jsxs)("g",{children:[(0,i.jsxs)("g",{children:[(0,i.jsx)("rect",{x:"120",y:"120",height:"15",width:"17.5",stroke:"#828080",style:{fill:"white"}}),(0,i.jsx)("text",{className:"legend-text",x:"115",y:"120",dy:"1em",style:{"font-size":"12px","text-anchor":"end"},children:"Not reported"})]}),(0,i.jsxs)("g",{children:[(0,i.jsx)("rect",{x:"120",y:"100",height:"15",width:"35",stroke:"#828080",style:{fill:"#FFFF00"}}),(0,i.jsx)("text",{className:"legend-text",x:"115",y:"100",dy:"1em",style:{"font-size":"12px","text-anchor":"end"},children:"0 to ".concat((z/6).toFixed())})]}),(0,i.jsxs)("g",{children:[(0,i.jsx)("rect",{x:"120",y:"80",height:"15",width:"52.5",stroke:"#828080",style:{fill:"#CBCB00"}}),(0,i.jsx)("text",{className:"legend-text",x:"115",y:"80",dy:"1em",style:{"font-size":"12px","text-anchor":"end"},children:"".concat((z/6).toFixed()," to ").concat((z/6*2).toFixed())})]}),(0,i.jsxs)("g",{children:[(0,i.jsx)("rect",{x:"120",y:"60",height:"15",width:"70",stroke:"#828080",style:{fill:"#A9A900"}}),(0,i.jsx)("text",{className:"legend-text",x:"115",y:"60",dy:"1em",style:{"font-size":"12px","text-anchor":"end"},children:"".concat((z/6*2).toFixed()," to ").concat((z/6*3).toFixed())})]}),(0,i.jsxs)("g",{children:[(0,i.jsx)("rect",{x:"120",y:"40",height:"15",width:"87.5",stroke:"#828080",style:{fill:"#919100"}}),(0,i.jsx)("text",{className:"legend-text",x:"115",y:"40",dy:"1em",style:{"font-size":"12px","text-anchor":"end"},children:"".concat((z/6*3).toFixed()," to ").concat((z/6*4).toFixed())})]}),(0,i.jsxs)("g",{children:[(0,i.jsx)("rect",{x:"120",y:"20",height:"15",width:"105",stroke:"#828080",style:{fill:"#5E5E00"}}),(0,i.jsxs)("text",{className:"legend-text",x:"115",y:"20",dy:"1em",style:{"font-size":"12px","text-anchor":"end"},children:["".concat((z/6*4).toFixed()," to ").concat((z/6*5).toFixed())," "]})]}),(0,i.jsxs)("g",{children:[(0,i.jsx)("rect",{x:"120",y:"0",height:"15",width:"122.5",stroke:"#828080",style:{fill:"#000000"}}),(0,i.jsxs)("text",{className:"legend-text",x:"115",y:"0",dy:"1em",style:{"font-size":"12px","text-anchor":"end"},children:["".concat((z/6*5).toFixed()," ")," and above"]})]})]})}),(0,i.jsx)("p",{id:"legendTitle",style:{textAlign:"left",marginTop:"10px"},children:"Number of total cases of"})]})]})})]})]})})}},9454:function(e,t,n){"use strict";n.d(t,{Ds:function(){return d},Mm:function(){return u},OP:function(){return x},Pv:function(){return a},TC:function(){return h},VN:function(){return f},b8:function(){return o},fm:function(){return y},g7:function(){return c},nO:function(){return l},r7:function(){return m}});var i=n(4924),r=n(797),s=n(4855),l=function(e){return s.h.find((function(t){return t.value===e}))};var a=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=null===t||void 0===t?void 0:t.map((function(e){var t=e.country,n=e.count;return(0,i.Z)({},t.slice(0,2),Number(n))})),s=(e=Object).assign.apply(e,[{}].concat((0,r.Z)(n)));return s};function o(e){return e.match(/[0-9]/g)?e.substring(0,e.length-1):e}function c(e){return e.replace(/[^0-9$.,]/g,"")}function d(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,i=this;return function(){for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];var a=i;clearTimeout(t),t=setTimeout((function(){e.apply(a,s)}),n)}}function x(e){if(e){for(var t=atob(e.split(",")[1]),n=e.split(",")[0].split(":")[1].split(";")[0],i=new ArrayBuffer(t.length),r=new Uint8Array(i),s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return new Blob([i],{type:n})}}function h(e){return e.length?(2.54*e).toFixed(1):""}function u(e){return e.length?(.3937*e).toFixed(1):""}function f(e){return e.length?(2.2046*e).toFixed(1):""}function m(e){return e.length?(e/2.2046).toFixed(1):""}function y(e){return e.charAt(0).toUpperCase()+e.slice(1)}},7441:function(e){e.exports={mapCont:"geoChart_mapCont__hxxag",container:"geoChart_container__SoMRy"}},797:function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function r(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[4855,9774,2888,179],(function(){return t=9041,e(e.s=t);var t}));var t=e.O();_N_E=t}]);