!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/download/aria2-output"]=t():e["video/download/aria2-output"]=t()}(self,(function(){return function(){var e={533:function(e,t,n){var o=n(645)((function(e){return e[1]}));o.push([e.id,".rpc-config.download-video-config-section {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  grid-gap: 0;\n  gap: 0;\n  align-items: stretch;\n}\n.rpc-config.download-video-config-section > * {\n  display: flex;\n  align-items: center;\n  grid-gap: 0;\n  gap: 0;\n}\n.rpc-config.download-video-config-section > *:not(:last-child) {\n  margin-bottom: 12px;\n}\n.rpc-config.download-video-config-section .profile-item-name {\n  margin-right: 8px;\n}\n.rpc-config.download-video-config-section .profile-other .profile-item-name {\n  align-self: flex-start;\n}\n.rpc-config.download-video-config-section .profile-select .be-textbox,\n.rpc-config.download-video-config-section .profile-select .be-dropdown {\n  margin-right: 8px;\n}\n.rpc-config.download-video-config-section .profile-select .be-button {\n  padding: 4px;\n}\n.rpc-config.download-video-config-section .profile-method {\n  align-self: flex-start;\n}",""]),e.exports=o},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var s=this[i][0];null!=s&&(r[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function a(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],c=t.base?i[0]+t.base:i[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var p=a(d),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(s[p].references++,s[p].updater(f)):s.push({identifier:d,updater:v(f,t),references:1}),o.push(d)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var s=i(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var d,p=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=p(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function u(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,h=0;function v(e,t){var n,o,r;if(t.singleton){var i=h++;n=m||(m=l(t)),o=f.bind(null,n,i,!1),r=f.bind(null,n,i,!0)}else n=l(t),o=u.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=a(n[o]);s[r].references--}for(var i=c(e,t),l=0;l<n.length;l++){var d=a(n[l]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}n=i}}}},451:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rpc-config download-video-config-section"},[e.isRenaming?n("div",{staticClass:"profile-select"},[n("div",{staticClass:"profile-item-name"},[e._v("\n      重命名 RPC 预设:\n    ")]),e._v(" "),n("TextBox",{ref:"renameInput",model:{value:e.profileRename,callback:function(t){e.profileRename=t},expression:"profileRename"}}),e._v(" "),n("VButton",{key:"check",attrs:{type:"transparent",title:"完成"},on:{click:function(t){return e.endRename()}}},[n("VIcon",{attrs:{icon:"mdi-check",size:16}})],1)],1):n("div",{staticClass:"profile-select"},[n("div",{staticClass:"profile-item-name"},[e._v("\n      RPC 预设:\n    ")]),e._v(" "),n("VDropdown",{attrs:{items:e.rpcProfiles},scopedSlots:e._u([{key:"item",fn:function(t){var n=t.item;return[e._v("\n        "+e._s(n.name)+"\n      ")]}}]),model:{value:e.selectedRpcProfile,callback:function(t){e.selectedRpcProfile=t},expression:"selectedRpcProfile"}}),e._v(" "),n("VButton",{key:"edit",attrs:{type:"transparent",title:"重命名"},on:{click:function(t){return e.startRename()}}},[n("VIcon",{attrs:{icon:"mdi-pencil-outline",size:16}})],1),e._v(" "),n("VButton",{key:"new",attrs:{type:"transparent",title:"新建预设"},on:{click:function(t){return e.newProfile()}}},[n("VIcon",{attrs:{icon:"mdi-plus",size:16}})],1),e._v(" "),n("VButton",{key:"delete",attrs:{disabled:e.rpcProfiles.length<2,type:"transparent",title:"删除当前预设"},on:{click:function(t){return e.deleteProfile()}}},[n("VIcon",{attrs:{icon:"mdi-trash-can-outline",size:16}})],1)],1),e._v(" "),e.selectedRpcProfile?[n("div",{staticClass:"profile-secret-key"},[n("div",{staticClass:"profile-item-name"},[e._v("\n        密钥:\n      ")]),e._v(" "),n("TextBox",{attrs:{"change-on-blur":""},model:{value:e.selectedRpcProfile.secretKey,callback:function(t){e.$set(e.selectedRpcProfile,"secretKey",t)},expression:"selectedRpcProfile.secretKey"}})],1),e._v(" "),n("div",{staticClass:"profile-dir"},[n("div",{staticClass:"profile-item-name"},[e._v("\n        路径:\n      ")]),e._v(" "),n("TextBox",{attrs:{"change-on-blur":""},model:{value:e.selectedRpcProfile.dir,callback:function(t){e.$set(e.selectedRpcProfile,"dir",t)},expression:"selectedRpcProfile.dir"}})],1),e._v(" "),n("div",{staticClass:"profile-host"},[n("div",{staticClass:"profile-item-name"},[e._v("\n        主机:\n      ")]),e._v(" "),n("TextBox",{attrs:{"change-on-blur":""},model:{value:e.selectedRpcProfile.host,callback:function(t){e.$set(e.selectedRpcProfile,"host",t)},expression:"selectedRpcProfile.host"}})],1),e._v(" "),n("div",{staticClass:"profile-port"},[n("div",{staticClass:"profile-item-name"},[e._v("\n        端口:\n      ")]),e._v(" "),n("TextBox",{attrs:{"change-on-blur":""},model:{value:e.selectedRpcProfile.port,callback:function(t){e.$set(e.selectedRpcProfile,"port",t)},expression:"selectedRpcProfile.port"}})],1),e._v(" "),n("div",{staticClass:"profile-method"},[n("div",{staticClass:"profile-item-name"},[e._v("\n        方法:\n      ")]),e._v(" "),n("VDropdown",{attrs:{items:["get","post"],"key-mapper":function(e){return e}},scopedSlots:e._u([{key:"item",fn:function(t){var n=t.item;return[e._v("\n          "+e._s(n)+"\n        ")]}}],null,!1,883355439),model:{value:e.selectedRpcProfile.method,callback:function(t){e.$set(e.selectedRpcProfile,"method",t)},expression:"selectedRpcProfile.method"}})],1),e._v(" "),n("div",{staticClass:"profile-other"},[n("div",{staticClass:"profile-item-name"},[e._v("\n        其他配置:\n      ")]),e._v(" "),n("TextArea",{attrs:{placeholder:"some-key=value","change-on-blur":""},model:{value:e.selectedRpcProfile.other,callback:function(t){e.$set(e.selectedRpcProfile,"other",t)},expression:"selectedRpcProfile.other"}})],1)]:e._e()],2)};o._withStripped=!0;var r=coreApis.settings,i=n(141),s=coreApis.ui;const a={name:"未命名",secretKey:"",dir:"",host:"127.0.0.1",port:"6800",method:"get",other:""},{options:c}=(0,r.getComponentSettings)("downloadVideo"),l={...{rpcProfiles:[a],selectedRpcProfileName:a.name},...c},d=l.rpcProfiles.find((e=>e.name===l.selectedRpcProfileName))??(l.rpcProfiles.length<1?(l.rpcProfiles.push(a),a):l.rpcProfiles[0]);console.log(l,d);var p=Vue.extend({components:{TextBox:s.TextBox,VButton:s.VButton,VIcon:s.VIcon,VDropdown:s.VDropdown,TextArea:s.TextArea},data:()=>({isRenaming:!1,profileRename:"",rpcProfiles:l.rpcProfiles,selectedRpcProfile:d}),methods:{saveSettings(){l.selectedRpcProfileName=this.selectedRpcProfile.name,l.rpcProfiles=this.rpcProfiles,Object.assign(c,l)},async startRename(){this.profileRename=this.selectedRpcProfile.name,this.isRenaming=!0,await this.$nextTick(),this.$refs.renameInput?.focus()},endRename(){const e=this.profileRename;e?l.rpcProfiles.some((t=>t.name!==this.selectedRpcProfile.name&&t.name===e))?i.Toast.error("名称不得与其他预设重复","重命名 RPC 预设",2e3):(this.selectedRpcProfile.name=this.profileRename,this.isRenaming=!1,this.saveSettings()):i.Toast.error("名称不得为空","重命名 RPC 预设",2e3)},newProfile(){const e={...this.selectedRpcProfile},t={num:1,toString(){return`未命名${this.num}`}};for(;l.rpcProfiles.some((e=>e.name===t.toString()));)t.num++;e.name=t.toString(),l.rpcProfiles.push(e),this.selectedRpcProfile=e},deleteProfile(){if(l.rpcProfiles.length<2)return;const e=l.rpcProfiles.findIndex((e=>e.name===this.selectedRpcProfile.name));-1!==e&&confirm(`确认删除 RPC 预设 "${this.selectedRpcProfile.name}" 吗?`)&&(l.rpcProfiles.splice(e,1),this.selectedRpcProfile=l.rpcProfiles[0])}}}),f=n(379),u=n.n(f),m=n(533),h=n.n(m),v={insert:"head",singleton:!1};u()(h(),v),h().locals;var g=function(e,t,n,o,r,i,s,a){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=c):r&&(c=a?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(e,t){return c.call(t),d(e,t)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,c):[c]}return{exports:e,options:l}}(p,o,[],!1,null,null,null);g.options.__file="registry/lib/plugins/video/download/aria2-output/RpcConfig.vue";var P=g.exports},141:function(e){"use strict";e.exports=coreApis.toast}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){"use strict";n.d(o,{plugin:function(){return h}});var e=coreApis.download,t=coreApis.utils.constants,r=coreApis.utils.title;const i={name:"aria2",displayName:"aria2 Input",description:"使用 aria2 命令行输入文件开始下载. (aria2c -i xxx.txt)",runAction:async n=>{const{infos:o}=n,i=document.URL.replace(window.location.search,""),s=`\n# Generated by Bilibili Evolved Video Export\n# https://github.com/the1812/Bilibili-Evolved/\n${o.map((e=>e.titledFragments.map((e=>({url:e.url,params:{referer:i,userAgent:t.UserAgent,out:e.title}}))).flat().map((e=>{const t=Object.entries(e.params).map((([e,t])=>`  ${lodash.kebabCase(e)}=${t}`)).join("\n");return`${e.url}\n${t}`})))).flat().join("\n")}`.trim();await e.DownloadPackage.single(`${(0,r.getFriendlyTitle)()}.txt`,s)}};var s=coreApis.ajax,a=n(141),c=coreApis.utils.log;const l=e=>{const t=e.host.match(/^http[s]?:\/\//)?e.host:`http://${e.host}`;return{option:e,host:t,methodName:"aria2.addUri"}},d=async(e,t)=>{try{let n=await t();return"string"==typeof n&&(n=JSON.parse(n)),void 0!==n.error?1===n.error.code?{param:e,success:!1,message:"请求遭到拒绝, 请检查您的密钥相关设置."}:{param:e,success:!1,message:`请求发生错误, code = ${n.error.code}, message = ${n.error.message}`}:{param:e,success:!0,message:n.result}}catch(t){return{param:e,success:!1,message:`无法连接到RPC主机, error = ${t.toString()}`}}},p=async(e,t)=>{const{option:n,host:o,methodName:r}=l(e);return d(t,(async()=>{const e=window.btoa(unescape(encodeURIComponent(JSON.stringify(t.params)))),i=`${o}:${n.port}/jsonrpc?method=${r}&id=${t.id}&params=${e}`;return console.log(`RPC request: ${i}`),i.startsWith("http:")?(0,s.monkey)({method:"GET",url:i,responseType:"json"}):(0,s.getJson)(i)}))},f=async(e,t)=>{const{option:n,host:o,methodName:r}=l(e);return d(t,(async()=>{const e=`${o}:${n.port}/jsonrpc`,i={method:r,id:t.id,params:t.params};return e.startsWith("http:")?(0,s.monkey)({method:"POST",url:e,responseType:"json",data:JSON.stringify(i)}):(0,s.postJson)(e,i)}))},u=e=>{if(!e)return{};const t=e.split("\n").map((e=>{const[t,...n]=e.trim().split("=");return[t.trim(),n.join("=").trim()]})).filter((e=>Boolean(e[1])));return Object.fromEntries(t)},m={name:"aria2Rpc",displayName:"aria2 RPC",description:"使用 aria2 RPC 功能发送下载请求.",runAction:async(e,n)=>{const{infos:o}=e,{selectedRpcProfile:r}=n,{secretKey:i,dir:s,other:l}=r,d=document.URL.replace(window.location.search,""),m=o.map((e=>e.titledFragments.map((e=>{const n=[];i&&n.push(`token:${i}`),n.push([e.url]),n.push({referer:d,"user-agent":t.UserAgent,out:e.title,dir:s||void 0,...u(l)});return{params:n,id:encodeURIComponent(e.title)}})))).flat(),h=await(async(e,t)=>{const n=[];for(const o of t){let t;t="get"===e.method?await p(e,o):await f(e,o),n.push(t)}return n})(r,m);if(console.table(h),1===h.length){const e=h[0];e.success?a.Toast.success(`成功发送了请求, GID = ${e.message}`,"aria2 RPC",5e3):(0,c.logError)(e.message)}else{const e=h.filter((e=>e.success)).length,t=h.length-e;a.Toast.info(`发送了 ${h.length} 个请求, 成功 ${e} 个, 失败 ${t} 个.`,"aria2 RPC",5e3)}},component:()=>Promise.resolve().then(n.bind(n,451)).then((e=>e.default))},h={name:"downloadVideo.outputs.aria2",displayName:"下载视频 - aria2 输出支持",description:"为下载视频增加 aria2 文件导出和 RPC 输出支持.",setup:({addData:e})=>{e("downloadVideo.outputs",(e=>{e.push(i),e.push(m)}))},commitHash:"384f0531f678f48999772f4175fbc406bcbbd5e1"}}(),o=o.plugin}()}));