(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3836],{3456:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/blackList",function(){return t(760)}])},9905:function(e,n,t){"use strict";t.d(n,{BL:function(){return b},a4:function(){return d},cO:function(){return c},fw:function(){return o},m1:function(){return u}});var r=t(7568),s=t(4051),a=t.n(s),l=t(9669),i=t.n(l)().create({baseURL:"https://api.ipassa.org/v1/user/",headers:{"Content-type":"application/json"}});i.interceptors.request.use((function(e){var n=localStorage.getItem("accessToken");if(n){console.log({token:n});var t=n;return e.headers.Authorization="Bearer "+t,e}location.href="/sign-in"})),i.interceptors.response.use((function(e){return e}),(function(e){var n;return 401===+(null===e||void 0===e||null===(n=e.response)||void 0===n?void 0:n.status)&&"/register"!==location.pathname&&(localStorage.removeItem("accessToken"),location.href="/sign-in"),Promise.reject(e)}));var o=function(){var e=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("animals");case 2:return n=e.sent.data,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("animals/".concat(n,"/edit"));case 2:return t=e.sent.data,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.post("animals",n);case 2:return t=e.sent.data,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(n,t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.post("animals/".concat(n),t);case 2:return r=e.sent.data,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),b=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.post("animals/report/reportAnimalViolations",n);case 2:return t=e.sent.data,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},7035:function(e,n,t){"use strict";var r=t(5893);n.Z=function(e){var n=e.isLoading,t=e.className,s=e.center;return n?(0,r.jsxs)("svg",{"aria-hidden":"true",className:"".concat(t," ").concat(s?"m-auto":"mr-2"," w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-white "),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,r.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}):null}},760:function(e,n,t){"use strict";t.r(n);var r=t(6042),s=t(9396),a=t(5893),l=t(6089),i=t.n(l),o=t(381),c=t.n(o),d=t(7536),u=t(6608),b=t(9905),f=t(4855),x=t(5316),m=t(9454),p=t(3471),j=t(7035),h=t(6455),g=t.n(h);n.default=function(){var e=(0,d.cI)(),n=e.register,t=e.handleSubmit,l=e.setError,o=e.clearErrors,h=e.formState.errors,v=e.control,N=e.reset,w=(0,p.useMutation)(["postAnimalViolation"],b.BL,{onSuccess:function(){g().fire({text:"Success",showCloseButton:!1,showConfirmButton:!0,icon:"success",allowOutsideClick:!1}),N()},onError:function(e){console.error(e),Object.values(e.response.data.data.errors).forEach((function(n,t){l(Object.keys(e.response.data.data.errors)[t],{type:"manual",message:null===n||void 0===n?void 0:n[0]})})),g().fire({text:e.response.data.data.message,showCloseButton:!1,showConfirmButton:!0,icon:"error",allowOutsideClick:!1})}}),y=w.mutate,_=w.isLoading;console.log({errors:h});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{className:"jsx-3b62d0b44d122fb2 font-bold text-center text-white -mt-9 mb-2 text-xl",children:"Report animal rights violation"}),(0,a.jsx)("div",{className:"jsx-3b62d0b44d122fb2 border border-black",children:(0,a.jsxs)("div",{className:"jsx-3b62d0b44d122fb2 lg:mx-9 py-7 px-4 lg:px-0 ",children:[(0,a.jsx)("h3",{className:"jsx-3b62d0b44d122fb2 font-bold text-xl mb-9",children:"If you have witnessed animal rights violation, share with us"}),(0,a.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},className:"jsx-3b62d0b44d122fb2 mt-4",children:[(0,a.jsxs)("label",{className:"jsx-3b62d0b44d122fb2 flex items-start flex-col",children:[(0,a.jsx)("span",{className:"jsx-3b62d0b44d122fb2 font-bold mb-2",children:"What is the subject of your report?"}),(0,a.jsxs)("select",(0,s.Z)((0,r.Z)({},n("subject")),{className:"jsx-3b62d0b44d122fb2 "+"p-2 ".concat((null===h||void 0===h?void 0:h.subject)?"invalid":""),children:[(0,a.jsx)("option",{value:"",className:"jsx-3b62d0b44d122fb2",children:"Select"}),(0,a.jsx)("option",{value:"black_trade_of_animals",className:"jsx-3b62d0b44d122fb2",children:"Black trade of animals"}),(0,a.jsx)("option",{value:"animal_torturers",className:"jsx-3b62d0b44d122fb2",children:"Animal abuse"}),(0,a.jsx)("option",{value:"animal_killer",className:"jsx-3b62d0b44d122fb2",children:"Animal killer"}),(0,a.jsx)("option",{value:"animal_sexual_abuse",className:"jsx-3b62d0b44d122fb2",children:"Animal sexual abuse"}),(0,a.jsx)("option",{value:"subject_other",className:"jsx-3b62d0b44d122fb2",children:"Other"})]}))]}),(0,a.jsxs)("div",{className:"jsx-3b62d0b44d122fb2 flex lg:items-center items-start justify-between mt-7 flex-wrap lg:pr-16",children:[(0,a.jsx)(d.Qr,{control:v,name:"first_name",render:function(e){var n=e.field;return(0,a.jsxs)("label",{className:"jsx-3b62d0b44d122fb2 flex flex-col mb-4 ",children:[(0,a.jsx)("span",{className:"jsx-3b62d0b44d122fb2 font-bold mb-2",children:"First Name:"}),(0,a.jsx)("input",{onChange:function(e){return n.onChange((0,m.b8)(e.target.value))},value:n.value,type:"text",className:"jsx-3b62d0b44d122fb2 "+"w-[250px] lg:w-[300px] ".concat(h.first_name?"invalid":"")})]})}}),(0,a.jsx)(d.Qr,{control:v,name:"last_name",render:function(e){var n=e.field;return(0,a.jsxs)("label",{className:"jsx-3b62d0b44d122fb2 flex flex-col mb-4",children:[(0,a.jsx)("span",{className:"jsx-3b62d0b44d122fb2 font-bold mb-2",children:"Last Name:"}),(0,a.jsx)("input",{onChange:function(e){return n.onChange((0,m.b8)(e.target.value))},value:n.value,type:"text",className:"jsx-3b62d0b44d122fb2 "+"w-[250px] lg:w-[300px] ".concat(h.last_name?"invalid":"")})]})}}),(0,a.jsxs)("label",{className:"jsx-3b62d0b44d122fb2 flex flex-col mb-4 w-full lg:w-auto",children:[(0,a.jsxs)("span",{className:"jsx-3b62d0b44d122fb2 font-bold mb-2 relative flex items-center justify-between",children:["First & last name in native language:",(0,a.jsxs)("a",{style:{"margin-left":"2px","margin-top":"6px"},className:"jsx-3b62d0b44d122fb2 btn_checking_open_modal",children:[(0,a.jsx)("div",{className:"jsx-3b62d0b44d122fb2 modal_checking",children:(0,a.jsx)("div",{className:"jsx-3b62d0b44d122fb2 modal_content_checking",children:"\u05d7\u05d3\u05d0\u05d3 - \u042e\u0440\u0438\u0439 - \u0645\u062d\u0645\u062f - \ube44\ud2b8 \uac00\ub78c - \u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c\u093c"})}),(0,a.jsx)("img",{src:"/images/question-mark.png",style:{height:"20px",border:"1px solid rgb(180, 16, 16)","border-radius":"50%",padding:"3px"},alt:"",className:"jsx-3b62d0b44d122fb2"})]})]}),(0,a.jsx)(d.Qr,{control:v,name:"full_name",render:function(e){var n=e.field;return(0,a.jsx)("input",{onChange:function(e){return n.onChange((0,m.b8)(e.target.value))},value:n.value,type:"text",className:"jsx-3b62d0b44d122fb2 "+"lg:w-[400px] w-full ".concat(h.full_name?"invalid":"")})}})]})]}),(0,a.jsxs)("div",{className:"jsx-3b62d0b44d122fb2 flex flex-col flex-wrap lg:flex-row lg:items-center justify-between mt-7",children:[(0,a.jsxs)("label",{className:"jsx-3b62d0b44d122fb2 flex flex-col",children:[(0,a.jsx)("span",{className:"jsx-3b62d0b44d122fb2 font-bold",children:"Birth date"}),(0,a.jsx)("input",(0,s.Z)((0,r.Z)({type:"date"},n("date_of_birth")),{max:c()().format("YYYY-MM-DD"),className:"jsx-3b62d0b44d122fb2 "+"w-[200px] ".concat(h.date_of_birth?"invalid":"")}))]}),(0,a.jsxs)("div",{className:"jsx-3b62d0b44d122fb2 items-center mt-6 lg:mt-0",children:[(0,a.jsx)("div",{className:"jsx-3b62d0b44d122fb2 flex items-center font-bold mr-7",children:"Sex"}),(0,a.jsxs)("div",{className:"jsx-3b62d0b44d122fb2 "+"flex items-center gap-5 ".concat(h.gender?"text-red-700":""),children:[(0,a.jsxs)("label",{className:"jsx-3b62d0b44d122fb2 flex items-center gap-2",children:["Male",(0,a.jsx)("input",(0,s.Z)((0,r.Z)({type:"radio",name:"sex",id:""},n("gender")),{value:"male",className:"jsx-3b62d0b44d122fb2 w-[20px]"}))]}),(0,a.jsxs)("label",{className:"jsx-3b62d0b44d122fb2 flex items-center gap-2",children:["Female",(0,a.jsx)("input",(0,s.Z)((0,r.Z)({type:"radio",name:"sex",id:""},n("gender")),{value:"female",className:"jsx-3b62d0b44d122fb2 w-[20px]"}))]}),(0,a.jsxs)("label",{className:"jsx-3b62d0b44d122fb2 flex items-center gap-2",children:["X",(0,a.jsx)("input",(0,s.Z)((0,r.Z)({type:"radio",name:"sex",id:""},n("gender")),{value:"x",className:"jsx-3b62d0b44d122fb2 w-[20px]"}))]})]})]}),(0,a.jsxs)("label",{className:"jsx-3b62d0b44d122fb2 flex flex-col select",children:[(0,a.jsx)("span",{className:"jsx-3b62d0b44d122fb2 mr-4 mb-2 font-bold",children:"Residence"}),(0,a.jsx)(d.Qr,{control:v,name:"residence",render:function(e){var n=e.field;return(0,a.jsx)(u.ZP,{classNamePrefix:"".concat(h.residence?"invalid_reactSelect":""," reactSelect"),onChange:function(e){n.onChange(e.value),o("residence")},styles:x.X,options:f.h})}})]}),(0,a.jsxs)("label",{className:"jsx-3b62d0b44d122fb2 flex flex-col select mt-4 lg:mt-0",children:[(0,a.jsx)("span",{className:"jsx-3b62d0b44d122fb2 mr-4 mb-2 font-bold",children:"Nationality"}),(0,a.jsx)(d.Qr,{control:v,name:"nationality",render:function(e){var n=e.field;return(0,a.jsx)(u.ZP,{classNamePrefix:"".concat(h.nationality?"invalid_reactSelect":""," reactSelect"),onChange:function(e){n.onChange(e.value),o("nationality")},styles:x.X,options:f.h})}})]})]}),(0,a.jsxs)("div",{className:"jsx-3b62d0b44d122fb2 "+"mt-7 font-bold ".concat(h.face_image?"text-red-700":""),children:["Face image:",(0,a.jsx)("div",{className:"jsx-3b62d0b44d122fb2 flex flex-wrap mt-4",children:(0,a.jsx)("label",{className:"jsx-3b62d0b44d122fb2 lg:w-1/2 font-normal",children:(0,a.jsx)("input",(0,s.Z)((0,r.Z)({},n("face_image")),{type:"file",name:"face_image",id:"",className:"jsx-3b62d0b44d122fb2 "}))})})]}),(0,a.jsxs)("div",{className:"jsx-3b62d0b44d122fb2 mt-7",children:[(0,a.jsx)("span",{className:"jsx-3b62d0b44d122fb2 font-bold",children:"Other images:"}),(0,a.jsxs)("div",{className:"jsx-3b62d0b44d122fb2 flex flex-col lg:flex-row",children:[(0,a.jsxs)("div",{className:"jsx-3b62d0b44d122fb2 flex flex-wrap mt-4 lg:w-[60%]",children:[(0,a.jsx)("label",{className:"jsx-3b62d0b44d122fb2 w-1/2",children:(0,a.jsx)("input",(0,s.Z)((0,r.Z)({},n("files[0]")),{type:"file",name:"files[0]",id:"",className:"jsx-3b62d0b44d122fb2 "}))}),(0,a.jsx)("label",{className:"jsx-3b62d0b44d122fb2 w-1/2",children:(0,a.jsx)("input",(0,s.Z)((0,r.Z)({},n("files[1]")),{type:"file",name:"files[1]",id:"",className:"jsx-3b62d0b44d122fb2 "}))}),(0,a.jsx)("label",{className:"jsx-3b62d0b44d122fb2 w-1/2",children:(0,a.jsx)("input",(0,s.Z)((0,r.Z)({},n("files[2]")),{type:"file",name:"files[2]",id:"",className:"jsx-3b62d0b44d122fb2 "}))}),(0,a.jsx)("label",{className:"jsx-3b62d0b44d122fb2 w-1/2",children:(0,a.jsx)("input",(0,s.Z)((0,r.Z)({},n("files[3]")),{type:"file",name:"files[3]",id:"",className:"jsx-3b62d0b44d122fb2 "}))})]}),(0,a.jsx)("div",{className:"jsx-3b62d0b44d122fb2 grow mt-6 lg:mt-0",children:(0,a.jsxs)("label",{className:"jsx-3b62d0b44d122fb2 flex flex-col -mt-6",children:[(0,a.jsx)("span",{className:"jsx-3b62d0b44d122fb2 font-bold mb-2",children:"Description of the crime:"}),(0,a.jsx)("textarea",(0,s.Z)((0,r.Z)({placeholder:"Description....",name:"",id:"",rows:"4"},n("description")),{className:"jsx-3b62d0b44d122fb2 "+"border-2 border-black flex-grow resize-none p-2 ".concat(h.description?"invalid":"")}))]})})]})]}),(0,a.jsx)("div",{className:"jsx-3b62d0b44d122fb2 flex justify-end mt-8 w-full",children:(0,a.jsxs)("button",{onClick:function(){t((function(e,n){console.log({data:e});var t=new FormData;Object.keys(e).forEach((function(n,r){console.log(n,"hiii"),console.log(n,Object.values(e)[r],"uuuu"),Object.values(e)[r]&&t.append(n,Object.values(e)[r])})),t.delete("face_image"),t.delete("files"),e.files.filter((function(e){return Boolean(e[0])})).forEach((function(e){t.append("files[]",e[0])})),e.face_image[0]&&t.append("face_image",e.face_image[0]),console.log({Documents:t}),y(t)}))()},disabled:_||Object.keys(h).length,style:{display:"flex",justifyContent:"center",alignItems:"center"},className:"jsx-3b62d0b44d122fb2 submitBtn w-[200px] ml-4",children:[(0,a.jsx)(j.Z,{isLoading:_}),"Submit"]})})]})]})}),(0,a.jsx)("style",{children:'\n       .reactSelect__control {\n        width: 250px;\n      }\n      @media only screen and (max-width: 1000px) {\n       \n       .reactSelect__control {\n        width: 300px;\n      }\n    }\n        input[type="file"] {\n          border: none ;\n        }\n      '}),(0,a.jsx)(i(),{id:"3b62d0b44d122fb2",children:".modal_content_checking.jsx-3b62d0b44d122fb2{width:10rem}.modal_checking.jsx-3b62d0b44d122fb2{height:unset;top:-20px;padding:20px;font-size:1.2rem}select.jsx-3b62d0b44d122fb2{border:solid black 2px;font-size:16px}"})]})}},5316:function(e,n,t){"use strict";t.d(n,{X:function(){return l}});var r=t(4924),s=t(6042),a=t(9396),l={control:function(e,n){var t;return console.log({state:n}),(0,s.Z)((0,a.Z)((0,s.Z)({},e),(t={border:"2px solid #000",padding:"3px 4px",minWidth:"150px",color:"#666680",margin:0},(0,r.Z)(t,"padding",0),(0,r.Z)(t,"height","40px"),(0,r.Z)(t,"overflow","hidden !important"),(0,r.Z)(t,"fontSize","20px !important"),t)),(null===n||void 0===n?void 0:n.isFocused)&&{boxShadow:"none",border:"solid 2px #1e87f0 !important"})},input:function(e,n){return(0,a.Z)((0,s.Z)({},e),{color:"#666680",fontFamily:"SFThin",letterSpacing:"0.1rem",margin:0,padding:0,height:"100%"})},option:function(e,n){return(0,a.Z)((0,s.Z)({},e),{":hover":{background:"#2684FF",color:"white"}})}}},9454:function(e,n,t){"use strict";t.d(n,{Ds:function(){return d},Mm:function(){return f},OP:function(){return u},Pv:function(){return i},TC:function(){return b},VN:function(){return x},b8:function(){return o},fm:function(){return p},g7:function(){return c},nO:function(){return l},r7:function(){return m}});var r=t(4924),s=t(797),a=t(4855),l=function(e){return a.h.find((function(n){return n.value===e}))};var i=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=null===n||void 0===n?void 0:n.map((function(e){var n=e.country,t=e.count;return(0,r.Z)({},n.slice(0,2),Number(t))})),a=(e=Object).assign.apply(e,[{}].concat((0,s.Z)(t)));return a};function o(e){return e.match(/[0-9]/g)?e.substring(0,e.length-1):e}function c(e){return e.replace(/[^0-9$.,]/g,"")}function d(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,r=this;return function(){for(var s=arguments.length,a=new Array(s),l=0;l<s;l++)a[l]=arguments[l];var i=r;clearTimeout(n),n=setTimeout((function(){e.apply(i,a)}),t)}}function u(e){if(e){for(var n=atob(e.split(",")[1]),t=e.split(",")[0].split(":")[1].split(";")[0],r=new ArrayBuffer(n.length),s=new Uint8Array(r),a=0;a<n.length;a++)s[a]=n.charCodeAt(a);return new Blob([r],{type:t})}}function b(e){return e.length?(2.54*e).toFixed(1):""}function f(e){return e.length?(.3937*e).toFixed(1):""}function x(e){return e.length?(2.2046*e).toFixed(1):""}function m(e){return e.length?(e/2.2046).toFixed(1):""}function p(e){return e.charAt(0).toUpperCase()+e.slice(1)}},797:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function s(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(n,{Z:function(){return s}})}},function(e){e.O(0,[8786,6608,381,4855,9774,2888,179],(function(){return n=3456,e(e.s=n);var n}));var n=e.O();_N_E=n}]);