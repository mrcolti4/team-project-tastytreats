!function(){var t,e,n,i,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},a={},o=r.parcelRequired3cd;function c(t,e,n,i,r,s,a){try{var o=t[s](a),c=o.value}catch(t){n(t);return}o.done?e(c):Promise.resolve(c).then(i,r)}function u(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var s=t.apply(e,n);function a(t){c(s,i,r,a,o,"next",t)}function o(t){c(s,i,r,a,o,"throw",t)}a(void 0)})}}null==o&&((o=function(t){if(t in s)return s[t].exports;if(t in a){var e=a[t];delete a[t];var n={id:t,exports:{}};return s[t]=n,e.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){a[t]=e},r.parcelRequired3cd=o),o("4VQua"),o("cBJFL"),o("6aBn7");function l(t,e){var n,i,r,s,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(o){return function(c){return function(o){if(n)throw TypeError("Generator is already executing.");for(;s&&(s=0,o[0]&&(a=0)),a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}var p=(t=u(function(){return l(this,function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,fetch("https://tasty-treats-backend.p.goit.global/api/categories")];case 1:return[4,t.sent().json()];case 2:return[2,t.sent().map(function(t){return t.name})];case 3:return console.error("ERROR",t.sent()),[2,[]];case 4:return[2]}})}),function(){return t.apply(this,arguments)});document.querySelector(".all-categories-btn");var f=document.querySelector(".all-categories-list");function h(){return(h=u(function(){var t;return l(this,function(e){switch(e.label){case 0:return[4,p()];case 1:return t=e.sent().map(function(t){return'<li class="all-categories-item"">\n                <button class="all-categories-item-btn"\n                  type="button">'.concat(t,"\n                </button>\n              </li>")}).join(""),f.insertAdjacentHTML("afterbegin",t),[2]}})})).apply(this,arguments)}!function(){h.apply(this,arguments)}();var d=o("dIxxU"),g=document.querySelector(".cards__list");function v(){return(v=u(function(t){var e,n,i,r,s,a,o,c,u,p,f,h,g,v,_,m=arguments;return l(this,function(l){switch(l.label){case 0:return i=void 0===(n=(e=m.length>1&&void 0!==m[1]?m[1]:{}).category)?"":n,s=void 0===(r=e.area)?"":r,o=void 0===(a=e.time)?"":a,u=void 0===(c=e.title)?"":c,f=void 0===(p=e.ingredient)?"":p,g=void 0===(h=e.limit)?6:h,_=void 0===(v=e.page)?1:v,[4,(0,d.default).get("".concat(t,"/?"),{params:{category:i,area:s,time:o,title:u,ingredient:f,limit:g,page:_}})];case 1:return[2,l.sent().data]}})})).apply(this,arguments)}function _(){return(_=u(function(){var t=arguments;return l(this,function(e){switch(e.label){case 0:return[4,function(t){return v.apply(this,arguments)}("https://tasty-treats-backend.p.goit.global/api/recipes",t.length>0&&void 0!==t[0]?t[0]:{})];case 1:return[2,e.sent().results.reduce(function(t,e){var n,i,r,s;return t+(n=e.title,i=e.description,r=e.preview,s=e.rating,'\n    <li class="cards__item items-set">\n    <img src="'.concat(r,'" alt="').concat(n,'" class="cards__img" />\n    <svg class="cards__heart" width="19" height="17">\n      <use href="./images/sprite.svg#icon-heart"></use>\n    </svg>\n    <div class="cards__descr">\n      <h4 class="cards__title">').concat(n,'</h4>\n      <p class="cards__text">\n        ').concat(i,'\n      </p>\n      <div class="cards__info">\n        <div class="cards__rating rating">\n          <div class="rating__value">').concat(s,'</div>\n          <div class="rating__body">\n            <div class="rating__active"></div>\n            <div class="rating__items">\n              <input\n                type="radio"\n                class="rating__item"\n                name="rating"\n                value="1"\n              />\n              <input\n                type="radio"\n                class="rating__item"\n                name="rating"\n                value="2"\n              />\n              <input\n                type="radio"\n                class="rating__item"\n                name="rating"\n                value="3"\n              />\n              <input\n                type="radio"\n                class="rating__item"\n                name="rating"\n                value="4"\n              />\n              <input\n                type="radio"\n                class="rating__item"\n                name="rating"\n                value="5"\n              />\n            </div>\n          </div>\n        </div>\n        <button class="btn btn-primary cards__btn">See recipe</button>\n      </div>\n    </div>\n  </li>\n    '))},"")]}})})).apply(this,arguments)}function m(){return(m=u(function(){var t,e=arguments;return l(this,function(i){switch(i.label){case 0:return[4,function(){return _.apply(this,arguments)}(e.length>0&&void 0!==e[0]?e[0]:{})];case 1:return t=i.sent(),g.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".rating").forEach(function(t){var e;n=t.querySelector(".rating__active"),e=t.querySelector(".rating__value").innerHTML/.05,n.style.width="".concat(e,"%")}),[2]}})})).apply(this,arguments)}!function(){m.apply(this,arguments)}({limit:9});var y={list:document.querySelector(".popular-list"),list_mobile:document.querySelector(".popular-list.mobile")};function b(){return(b=u(function(){return l(this,function(t){switch(t.label){case 0:return[4,fetch("https://tasty-treats-backend.p.goit.global/api/recipes/popular")];case 1:return[4,t.sent().json()];case 2:return[2,t.sent()]}})})).apply(this,arguments)}function x(){return(x=u(function(){return l(this,function(t){switch(t.label){case 0:return[4,function(){return b.apply(this,arguments)}()];case 1:var e;return e=t.sent().map(function(t){var e=t.title,n=t.description,i=t.preview,r=t._id;return'\n         <li class="popular-item" data-id="'.concat(r,'">\n      <div class="popular-wraper">\n        <img\n          class="popular-img"\n          src="').concat(i,'"\n          alt="').concat(e,'"\n          loading="lazy"\n          height="64"\n          width="64"\n        />\n      </div>\n      <div class="popular-containet-description">\n        <h3 class="popular-title">').concat(e,'</h3>\n        <p class="popular-description">').concat(n,"</p>\n      </div>\n    </li>")}).join(""),y.list.insertAdjacentHTML("beforeend",e),y.list_mobile.insertAdjacentHTML("beforeend",e),[2]}})})).apply(this,arguments)}!function(){x.apply(this,arguments)}(),y.list.addEventListener("click",function(t){try{t.target.closest(".popular-item").nodeName}catch(t){return}console.log(t.target.closest(".popular-item").dataset.id)});var P={};window,P=function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e||4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,(function(e){return t[e]}).bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,i,r,s,a=Object.prototype.hasOwnProperty;for(r=1,s=arguments.length;r<s;r+=1)for(i in n=arguments[r])a.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){"use strict";t.exports=function(t){return void 0===t}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Array}},function(t,e,n){"use strict";var i=n(2),r=n(17),s=n(6);t.exports=function(t,e,n){i(t)?r(t,e,n):s(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Function}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){"use strict";var i=n(18),r=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(r(n,e.static),delete e.static),r(n.prototype,e),n}},function(t,e,n){"use strict";var i=n(2);t.exports=function(t,e,n){var r,s;if(n=n||0,!i(e))return -1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(s=e.length,r=n;n>=0&&r<s;r+=1)if(e[r]===t)return r;return -1}},function(t,e,n){"use strict";var i=n(29),r=n(30),s=n(5);t.exports={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),r=s(t)?t(e):i(t,e);return n.innerHTML=r,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){r("pagination","UA-129987462-1")}}},function(t,e,n){"use strict";n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){"use strict";var i=n(13),r=n(7),s=n(0),a=n(1),o=n(20),c=n(9),u={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=r({init:function(t,e){this._options=s({},u,e),this._currentPage=0,this._view=new o(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){return Math.ceil(this._options.totalItems/this._options.itemsPerPage)||1},_getPageIndex:function(t){return this._options.centerAlign?Math.min(Math.max(t-Math.floor(this._options.visiblePages/2),1),this._getLastPage()-this._options.visiblePages+1):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e=this.getCurrentPage();return"prev"===t?e-1:e+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.min(t=Math.max(t,1),e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),r=this._getPageIndex(n),s=this._getEdge(t);return e.leftPageNumber=s.left,e.rightPageNumber=s.right,e.prevMore=i>1,e.nextMore=i<r,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i=this._getLastPage(),r=this._options.visiblePages,s=this._getPageIndex(t);return this._options.centerAlign?(n=(e=Math.max(t-Math.floor(r/2),1))+r-1)>i&&(e=Math.max(i-r+1,1),n=i):(e=(s-1)*r+1,n=Math.min(n=s*r,i)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){a(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(l),t.exports=l},function(t,e,n){"use strict";var i=n(0),r=n(14),s=n(4),a=n(16),o=n(2),c=n(5),u=n(3),l=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(t){i(t.prototype,p.prototype)},p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return -1},p.prototype._memorizeContext=function(t){var e,n;r(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},p.prototype._forgetContext=function(t){var e,n;r(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},p.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},p.prototype.on=function(t,e,n){var i=this;s(t)?u(t=t.split(l),function(t){i._bindEvent(t,e,n)}):a(t)&&(n=e,u(t,function(t,e){i.on(e,t,n)}))},p.prototype.once=function(t,e,n){var i=this;if(a(t)){n=e,u(t,function(t,e){i.once(e,t,n)});return}this.on(t,function r(){e.apply(n,arguments),i.off(t,r,n)},n)},p.prototype._spliceMatches=function(t,e){var n,i=0;if(o(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},p.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},p.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var r=t===i.handler,s=e===i.context,a=r&&s;return a&&n._forgetContext(i.context),a}},p.prototype._offByEventName=function(t,e){var n=this,i=c(e),r=n._matchHandler(e);u(t=t.split(l),function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,r):(u(e,function(t){n._forgetContext(t.context)}),n.events[t]=[])})},p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);u(this._safeEvent(),function(t){e._spliceMatches(t,n)})},p.prototype._offByObject=function(t,e){var n,i=this;0>this._indexOfContext(t)?u(t,function(t,e){i.off(e,t)}):s(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),u(this._safeEvent(),function(t){i._spliceMatches(t,n)})):(n=this._matchContext(t),u(this._safeEvent(),function(t){i._spliceMatches(t,n)}))},p.prototype.off=function(t,e){s(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):a(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},p.prototype.fire=function(t){this.invoke.apply(this,arguments)},p.prototype.invoke=function(t){var e,n,i,r;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(r=e[i]).handler.apply(r.context,n))return!1;i+=1}return!0},p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p},function(t,e,n){"use strict";var i=n(1),r=n(15);t.exports=function(t){return!i(t)&&!r(t)}},function(t,e,n){"use strict";t.exports=function(t){return null===t}},function(t,e,n){"use strict";t.exports=function(t){return t===Object(t)}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i=0,r=t.length;for(n=n||null;i<r&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){"use strict";var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){"use strict";t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){"use strict";var i=n(3),r=n(7),s=n(21),a=n(22),o=n(24),c=n(25),u=n(0),l=n(4),p=n(28),f=n(9),h={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},d=["first","prev","next","last"],g=["prev","next"],v=r({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=u({},h,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(l(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(d,function(t){this._buttons[t]=f.createElementByTemplate(this._template.moveButton,{type:t})},this)},_setDisabledMoveButtons:function(){i(d,function(t){var e="disabled"+f.capitalizeFirstLetter(t);this._buttons[e]=f.createElementByTemplate(this._template.disabledMoveButton,{type:t})},this)},_setMoreButtons:function(){i(g,function(t){this._buttons[t+"More"]=f.createElementByTemplate(this._template.moreButton,{type:t})},this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(c(e=this._buttons.prevMore,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(c(e=this._buttons.nextMore,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,r=t.rightPageNumber;for(n=i;n<=r;n+=1)n===t.page?e=f.createElementByTemplate(this._template.currentPage,{page:n}):(e=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||c(e,this._firstItemClassName),n!==r||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){a(this._getContainerElement(),"click",function(e){var n,i,r=s(e);o(e),(i=this._getButtonType(r))||(n=this._getPageNumber(r)),t(i,n)},this)},_getButtonType:function(t){var e;return i(this._buttons,function(n,i){return!f.isContained(t,n)||(e=i,!1)},this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],f.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,function(t,e){this._buttons[e]=t.cloneNode(!0)},this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=v},function(t,e,n){"use strict";t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){"use strict";var i=n(4),r=n(3),s=n(23);function a(t,e,n,i){var a,o;function c(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,c):"attachEvent"in t&&t.attachEvent("on"+e,c),a=s(t,e),o=!1,r(a,function(t){return t.handler!==n||(o=!0,!1)}),o||a.push({handler:n,wrappedHandler:c})}t.exports=function(t,e,n,s){if(i(e)){r(e.split(/\s+/g),function(e){a(t,e,n,s)});return}r(e,function(e,i){a(t,i,e,n)})}},function(t,e,n){"use strict";var i="_feEventKey";t.exports=function(t,e){var n,r=t[i];return r||(r=t[i]={}),(n=r[e])||(n=r[e]=[]),n}},function(t,e,n){"use strict";t.exports=function(t){if(t.preventDefault){t.preventDefault();return}t.returnValue=!1}},function(t,e,n){"use strict";var i=n(3),r=n(8),s=n(26),a=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),o=t.classList,c=[];if(o){i(n,function(e){t.classList.add(e)});return}(e=s(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,function(t){0>r(t,c)&&c.push(t)}),a(t,c)}},function(t,e,n){"use strict";var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){"use strict";var i=n(2),r=n(1);t.exports=function(t,e){if(e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),r(t.className.baseVal)){t.className=e;return}t.className.baseVal=e}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!!(t&&t.nodeType)}},function(t,e,n){"use strict";var i=n(8),r=n(3),s=n(2),a=n(4),o=n(0),c=/{{\s?|\s?}}/g,u=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,h=/^["']\w+["']$/,d=/"|'/g,g=/^-?\d+\.?\d*$/,v={if:function(t,e,n){var i,s,a,o,c=(i=[t],s=[],a=0,o=0,r(e,function(t,n){0===t.indexOf("if")?a+=1:"/if"===t?a-=1:a||0!==t.indexOf("elseif")&&"else"!==t||(i.push("else"===t?["true"]:t.split(" ").slice(1)),s.push(e.slice(o,n)),o=n+1)}),s.push(e.slice(o)),{exps:i,sourcesInsideIf:s}),u=!1,l="";return r(c.exps,function(t,e){return(u=y(t,n))&&(l=b(c.sourcesInsideIf[e],n)),!u}),l},each:function(t,e,n){var i=y(t,n),a=s(i)?"@index":"@key",c={},u="";return r(i,function(t,i){c[a]=i,c["@this"]=t,o(n,c),u+=b(e.slice(),n)}),u},with:function(t,e,n){var r=i("as",t),s=t[r+1],a=y(t.slice(0,r),n),c={};return c[s]=a,b(e,o(n,c))||""}},_=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,r=[],s=0;for(e.global||(e=RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,r.push(t.slice(s,i)),s=i+n[0].length,n=e.exec(t);return r.push(t.slice(s)),r};function m(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:h.test(t)?i=t.replace(d,""):u.test(t)?i=m((n=t.split(l))[0],e)[m(n[1],e)]:p.test(t)?i=m((n=t.split(f))[0],e)[n[1]]:g.test(t)&&(i=parseFloat(t)),i}function y(t,e){var n,i,s=m(t[0],e);return s instanceof Function?(n=t.slice(1),i=[],r(n,function(t){i.push(m(t,e))}),s.apply(null,i)):s}function b(t,e){for(var n,i,r,s=1,o=t[1];a(o);)v[i=(n=o.split(" "))[0]]?(r=function(t,e,n){for(var i,r,s,o=v[t],c=1,u=2,l=e[2];c&&a(l);)0===l.indexOf(t)?c+=1:0===l.indexOf("/"+t)&&(c-=1,s=u),u+=2,l=e[u];if(c)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=o(e[0].split(" ").slice(1),(i=s,(r=e.splice(1,i-0)).pop(),r),n),e}(i,t.splice(s,t.length-s),e),t=t.concat(r)):t[s]=y(n,e),s+=2,o=t[s];return t.join("")}t.exports=function(t,e){return b(_(t,c),e)}},function(t,e,n){"use strict";var i=n(1),r=n(31);t.exports=function(t,e){var n=location.hostname,s="TOAST UI "+t+" for "+n+": Statistics",a=window.localStorage.getItem(s);(i(window.tui)||!1!==window.tui.usageStatistics)&&(!a||new Date().getTime()-a>6048e5)&&(window.localStorage.setItem(s,new Date().getTime()),setTimeout(function(){("interactive"===document.readyState||"complete"===document.readyState)&&r("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})},1e3))}},function(t,e,n){"use strict";var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),r="";return i(e,function(t,e){r+="&"+e+"="+t}),r=r.substring(1),n.src=t+"?"+r,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}]);var E=document.getElementById("tui-pagination-container");new((e=P)&&e.__esModule?e.default:e)(E,{totalItems:10,itemsPerPage:9,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}).getCurrentPage(),$(document).ready(function(){$(".modal-close-btn").each(function(){$(this).click(function(){$(".modal").css("display","none"),$(".backdrop").css("visibility","hidden")})}),$(".cards__btn").each(function(){$(this).click(function(){$(".modal").css("display","block"),$(".backdrop").css("visibility","visible")})})}),Array.from(document.getElementsByClassName("recipes-container")).forEach(function(t){t.scrollHeight>t.offsetHeight&&(t.style.overflowY="scroll",t.style.scrollbarWidth="thin",t.style.msOverflowStyle="scrollbar")}),Array.from(document.getElementsByClassName("cooking-recipes")).forEach(function(t){t.scrollHeight>t.offsetHeight&&(t.style.overflowY="scroll",t.style.scrollbarWidth="thin",t.style.msOverflowStyle="scrollbar")})}();
//# sourceMappingURL=index.78a3ecf6.js.map
