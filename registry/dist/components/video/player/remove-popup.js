!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["video/player/remove-popup"]=o():e["video/player/remove-popup"]=o()}(self,(function(){return function(){var e,o,t={156:function(e,o,t){var n=t(645)((function(e){return e[1]}));n.push([e.id,"body.remove-player-popup-combo-likes .bilibili-player-video-popup-three,\nbody.remove-player-popup-combo-likes .bilibili-player-video-popup-three-animate,\nbody.remove-player-popup-combo-likes .bilibili-player-video-popup-follow,\nbody.remove-player-popup-combo-likes .bilibili-player-video-popup-there-cyc {\n  display: none !important;\n}\nbody.remove-player-popup-related-videos .bilibili-player-video-link,\nbody.remove-player-popup-related-videos .bilibili-player-link {\n  display: none !important;\n}\nbody.remove-player-popup-votes .bilibili-player-video-popup-vote {\n  display: none !important;\n}\nbody.remove-player-popup-rates .bilibili-player-score {\n  display: none !important;\n}",""]),e.exports=n},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var o=[];return o.toString=function(){return this.map((function(o){var t=e(o);return o[2]?"@media ".concat(o[2]," {").concat(t,"}"):t})).join("")},
// eslint-disable-next-line func-names
o.i=function(e,t,n){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(n)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var p=this[i][0];null!=p&&(r[p]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);n&&r[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),o.push(l))}},o}},609:function(e,o,t){var n=t(156);n&&n.__esModule&&(n=n.default),e.exports="string"==typeof n?n:n.toString()}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={id:e,exports:{}};return t[e](i,i.exports,r),i.exports}o=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var i=Object.create(null);r.r(i);var p={};e=e||[null,o({}),o([]),o(o)];for(var a=2&n&&t;"object"==typeof a&&!~e.indexOf(a);a=o(a))Object.getOwnPropertyNames(a).forEach((function(e){p[e]=function(){return t[e]}}));return p.default=function(){return t},r.d(i,p),i},r.d=function(e,o){for(var t in o)r.o(o,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},r.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return n}});var e=coreApis.componentApis.styledComponent,o=coreApis.settings,t=coreApis.utils.urls;const n={...(0,e.toggleStyle)("removePlayerPopup",(()=>Promise.resolve().then(r.t.bind(r,609,23))),(({settings:e,metadata:t})=>{const{options:n}=e,{kebabCase:r}=lodash;Object.keys(n).forEach((e=>{(0,o.addComponentListener)(`${t.name}.${e}`,(o=>{document.body.classList.toggle(`${r(t.name)}-${r(e)}`,o)}),!0)}))})),displayName:"删除视频弹窗",tags:[componentsTags.video,componentsTags.style],description:{"zh-CN":"删除视频播放器中出现的各种弹窗, 类别可在选项中分别选择."},urlInclude:t.playerUrls,options:{votes:{defaultValue:!1,displayName:"投票"},relatedVideos:{defaultValue:!0,displayName:"关联视频"},comboLikes:{defaultValue:!0,displayName:"关注/三连"},rates:{defaultValue:!0,displayName:"评分"}},commitHash:"384f0531f678f48999772f4175fbc406bcbbd5e1"}}(),i=i.component}()}));