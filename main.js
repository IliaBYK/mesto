/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var e=function(){function e(t,n,r,o,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this._titleValue=t.name,this._srcValue=t.link,this._owner=t.owner,this._ownerId=t.owner._id,this._cardId=t._id,this._likes=t.likes,this._userId=t.userId,this.isLiked=!1,this._handleCardClick=r,this._handleLikeClick=o,this._heandleDeleteButtonClick=i,this._templateSelector=n}var n,r;return n=e,(r=[{key:"_creatCard",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"getId",value:function(){return this._cardId}},{key:"putLike",value:function(t){this._likeButton.classList.add("element__like-button_active"),this._counter.textContent=t.likes.length,this.isLiked=!0}},{key:"deleteLike",value:function(t){this._likeButton.classList.remove("element__like-button_active"),this._counter.textContent=t.likes.length,this.isLiked=!1}},{key:"_openPopupImage",value:function(){this._handleCardClick(this._titleValue,this._srcValue)}},{key:"_setEventListener",value:function(){var t=this;this._image.addEventListener("click",(function(){t._openPopupImage()})),this._deleteButton.addEventListener("click",(function(){t._heandleDeleteButtonClick(t._cardId,t._element)})),this._likeButton.addEventListener("click",(function(){return t._handleLikeClick(t)}))}},{key:"generateCard",value:function(){var t=this;return this._element=this._creatCard(),this.isLiked&&this._likeButton.classList.add("item__icon_active"),this._likes.forEach((function(e){e._id===t._userId&&(t.isLiked=!0)})),this._counter=this._element.querySelector(".element__like-counter"),this._deleteButton=this._element.querySelector(".element__delete-button"),this._userId!==this._ownerId&&this._deleteButton.remove(),this._likeButton=this._element.querySelector(".element__like-button"),this._image=this._element.querySelector(".element__img"),this._image.src=this._srcValue,this._image.alt=this._titleValue,this._element.querySelector(".element__title").textContent=this._titleValue,this._counter.textContent=this._likes.length,this._setEventListener(),this._element}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var r=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=e,this._config=n,this._buttonElement=this._form.querySelector(this._config.submitButtonSelector),this._inputList=Array.from(this._form.querySelectorAll(this._config.inputSelector))}var e,r;return e=t,(r=[{key:"_showInputError",value:function(t,e){var n=this._form.querySelector(".".concat(t.id,"-error"));t.classList.add(this._config.inputErrorClass),n.textContent=e,n.classList.toggle("popup__input-error_font-size_small",n.textContent.length>30),n.classList.add(this._config.errorClass)}},{key:"_hideInputError",value:function(t){var e=this._form.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._config.inputErrorClass),e.classList.remove(this._config.errorClass),e.textContent=""}},{key:"_isValid",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"disableButton",value:function(){this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"enableButton",value:function(){this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableButton():this.enableButton()}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&n(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;this._renderedItems.then((function(n){return n.forEach((function(n){return e._renderer(n,t)}))}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(e){var n,r,o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=function(t){"Escape"===t.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(e)}var e,n;return e=t,n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_renderLoading",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._submitButton&&(this._submitButton.textContent=t?e:this._submitButtonTextContent)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("click",(function(e){(e.currentTarget===e.target||e.target.classList.contains("popup__close-button"))&&t.close()}))}}],n&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=f(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},l.apply(this,arguments)}function f(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}function h(t,e){if(e&&("object"===c(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(r);if(o){var n=d(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return h(this,t)});function u(t){var e,n=t.popupSelector,r=t.handleSubmitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,n))._handleSubmitForm=r,e._form=e._popup.querySelector(".popup__form"),e._inputList=e._form.querySelectorAll(".popup__input"),e._submitButton=e._popup.querySelector(".popup__submit-button"),e._submitButtonTextContent=e._submitButton.textContent,e}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;l(d(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault();try{l(d(u.prototype),"_renderLoading",t).call(t,!0),t._handleSubmitForm(t._getInputValues()),t.close()}catch(t){console.log(t)}finally{t._renderLoading(!1)}}))}},{key:"close",value:function(){this._popup.classList.contains("popup-edit")||this._form.reset(),l(d(u.prototype),"close",this).call(this)}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(a);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=b(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},m.apply(this,arguments)}function b(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=k(t)););return t}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function w(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(r);if(o){var n=k(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return w(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._img=e._popup.querySelector(".popup__img"),e._description=e._popup.querySelector(".popup__description"),e}return e=u,(n=[{key:"open",value:function(t,e){this._img.src=e,this._description.textContent=t,this._img.alt=t,m(k(u.prototype),"open",this).call(this)}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(a);function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var L=function(){function t(e){var n=e.nameSelector,r=e.aboutSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._avatar=document.querySelector(o),this._name=document.querySelector(n),this._about=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(t,e){this._name.textContent=t,this._about.textContent=e}},{key:"setUserAvatar",value:function(t){this._avatar.src=t}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function j(){j=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",u=r.toStringTag||"@@toStringTag";function a(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{a({},"")}catch(t){a=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),u=new S(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var u=n.delegate;if(u){var a=g(u,n);if(a){if(a===l)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=s(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,u),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l={};function f(){}function p(){}function h(){}var d={};a(d,o,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(E([])));v&&v!==e&&n.call(v,o)&&(d=v);var _=h.prototype=f.prototype=Object.create(d);function m(t){["next","throw","return"].forEach((function(e){a(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function r(o,i,u,a){var c=s(t[o],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==O(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,u,a)}),(function(t){r("throw",t,u,a)})):e.resolve(f).then((function(t){l.value=t,u(l)}),(function(t){return r("throw",t,u,a)}))}a(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function g(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,g(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=h,a(_,"constructor",h),a(h,"constructor",p),p.displayName=a(h,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,a(t,u,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},m(b.prototype),a(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var u=new b(c(e,n,r,o),i);return t.isGeneratorFunction(n)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},m(_),a(_,u,"Generator"),a(_,o,(function(){return this})),a(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=E,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return u.type="throw",u.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(a&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}function C(t,e,n,r,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,o)}function P(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function u(t){C(i,r,o,u,a,"next",t)}function a(t){C(i,r,o,u,a,"throw",t)}u(void 0)}))}}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var I=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._headers=e.headers}var e,n,r,o,i,u,a,c,s,l;return e=t,n=[{key:"_checkDataResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"_getResponse",value:function(t,e){return fetch(t,e).then(this._checkDataResponse)}},{key:"getInitialCards",value:(l=P(j().mark((function t(){return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this._getResponse(this._url+"/cards",{headers:this._headers}));case 1:case"end":return t.stop()}}),t,this)}))),function(){return l.apply(this,arguments)})},{key:"getServerUserInfo",value:(s=P(j().mark((function t(){return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this._getResponse(this._url+"/users/me",{headers:this._headers}));case 1:case"end":return t.stop()}}),t,this)}))),function(){return s.apply(this,arguments)})},{key:"setServerUserInfo",value:(c=P(j().mark((function t(e){return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this._getResponse(this._url+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}));case 1:case"end":return t.stop()}}),t,this)}))),function(t){return c.apply(this,arguments)})},{key:"postServerCard",value:(a=P(j().mark((function t(e){return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this._getResponse(this._url+"/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}));case 1:case"end":return t.stop()}}),t,this)}))),function(t){return a.apply(this,arguments)})},{key:"deleteCard",value:(u=P(j().mark((function t(e){return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this._getResponse(this._url+"/cards/"+e,{method:"DELETE",headers:this._headers}));case 1:case"end":return t.stop()}}),t,this)}))),function(t){return u.apply(this,arguments)})},{key:"putLike",value:(i=P(j().mark((function t(e){return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this._getResponse(this._url+"/cards/"+e+"/likes",{method:"PUT",headers:this._headers}));case 1:case"end":return t.stop()}}),t,this)}))),function(t){return i.apply(this,arguments)})},{key:"deleteLike",value:(o=P(j().mark((function t(e){return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this._getResponse(this._url+"/cards/"+e+"/likes",{method:"DELETE",headers:this._headers}));case 1:case"end":return t.stop()}}),t,this)}))),function(t){return o.apply(this,arguments)})},{key:"setUserAvatar",value:(r=P(j().mark((function t(e){return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this._getResponse(this._url+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}));case 1:case"end":return t.stop()}}),t,this)}))),function(t){return r.apply(this,arguments)})}],n&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),B={formSelector:".popup__form",inputSelector:".popup__input",fieldSelector:".popup__set",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},q=document.querySelector("#popupOpenImg"),R=(q.querySelector(".popup__img"),q.querySelector(".popup__description"),document.querySelector(".profile__edit-button")),T=document.querySelector(".profile__add-button");function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=A(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},U.apply(this,arguments)}function A(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=G(t)););return t}function D(t,e){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},D(t,e)}function N(t,e){if(e&&("object"===V(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function G(t){return G=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},G(t)}document.querySelector(".profile__title"),document.querySelector(".profile__subtitle"),document.querySelector("#popup-name"),document.querySelector("#popup-about");var J=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&D(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=G(r);if(o){var n=G(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return N(this,t)});function u(t){var e,n=t.popupSelector,r=t.handleSubmitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,n))._handleSubmitForm=r,e._submitButton=e._popup.querySelector(".popup__submit-button"),e._submitButtonTextContent=e._submitButton.textContent,e}return e=u,(n=[{key:"open",value:function(t,e){this._cardId=t,this._element=e,U(G(u.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var t=this;U(G(u.prototype),"setEventListeners",this).call(this),this._submitButton.addEventListener("click",(function(){try{U(G(u.prototype),"_renderLoading",t).call(t,!0,"Удаление..."),t._handleSubmitForm(t._cardId,t._element)}finally{U(G(u.prototype),"_renderLoading",t).call(t,!1)}}))}}])&&F(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(a),z=document.querySelector("#popupEdit"),H=document.querySelector("#popupAdd"),Y=document.querySelector("#popupUpdate"),M=z.querySelector("#popupEditForm"),K=H.querySelector("#popupFormAdd"),Q=Y.querySelector("#popupUpdateForm"),W=new I({url:"https://mesto.nomoreparties.co/v1/cohort-52",headers:{authorization:"42488cc5-fe94-4fe0-b1f0-0d91c1eb8880","Content-Type":"application/json"}}),X=new r(M,B),Z=new r(K,B);new r(Q,B),X.enableValidation(),Z.enableValidation();var $=new L({nameSelector:".profile__title",aboutSelector:".profile__subtitle",avatarSelector:".profile__avatar"});W.getServerUserInfo().then((function(t){$.setUserInfo(t.name,t.about),$.setUserAvatar(t.avatar)}));var tt=new J({popupSelector:"#popupConfirm",handleSubmitForm:function(t,e){W.deleteCard(t).then((function(){return e.remove()})).catch((function(t){return console.log(t)})),tt.close()}});tt.setEventListeners();var et=new S(".popup_action_open-img");et.setEventListeners();var nt=new i({items:W.getInitialCards(),renderer:function(t,e){t.owner._id,nt.addItem(ut(t))}},".elements");nt.renderItems();var rt=function(t,e){et.open(t,e)},ot=function(t){t.isLiked?W.deleteLike(t._cardId).then((function(e){return t.deleteLike(e)})).catch((function(t){return console.log("Ошибка: ".concat(t.status))})):W.putLike(t._cardId).then((function(e){return t.putLike(e)})).catch((function(t){return console.log("Ошибка: ".concat(t.status))}))},it=function(t,e){tt.open(t,e)};function ut(t){return new e(t,"#cardTemplate",rt,ot,it).generateCard()}var at=new y({popupSelector:"#popupAdd",handleSubmitForm:function(t){W.postServerCard(t).then((function(t){t.userId=t.owner._id,nt.addItem(ut(t))})),at.close()}});at.setEventListeners();var ct=new y({popupSelector:"#popupEdit",handleSubmitForm:function(t){W.setServerUserInfo(t),$.setUserInfo(t.name,t.about),ct.close()}});ct.setEventListeners(),T.addEventListener("click",(function(){at.open(),Z.disableButton()})),R.addEventListener("click",(function(){ct.open(),ct.setInputValues($.getUserInfo()),X.resetValidation()}));var st=new y({popupSelector:"#popupUpdate",handleSubmitForm:function(t){$.setUserAvatar(t.avatar),W.setUserAvatar(t),st.close()}});st.setEventListeners(),document.querySelector(".profile__avatar-pen").addEventListener("click",(function(){st.open()}))})();
//# sourceMappingURL=main.js.map