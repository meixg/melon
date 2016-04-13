/*! 2016 Baidu Inc. All Rights Reserved */
!function(e,t){if("function"==typeof define&&define.amd)define(["exports","./array","../../babelHelpers"],t);else if("undefined"!=typeof exports)t(exports,require("./array"),require("../../babelHelpers"));else{var r={exports:{}};t(r.exports,e.array,e.babelHelpers),e.date=r.exports}}(this,function(exports,e,t){"use strict";function r(e){return e instanceof Date}function n(e,t){var r=this.clone(e);return r.setDate(e.getDate()+t),r}function i(e,t){var r=this.clone(e);return r.setMonth(e.getMonth()+t),r}function o(e,t){var r=this.clone(e);return r.setFullYear(e.getFullYear()+t),r}function a(e){return new Date(e.getTime())}function l(e){var t=this.clone(e);return t.setHours(0,0,0,0),t}function s(e){var t=this.getFirstDayOfMonth(e);return t.setMonth(t.getMonth()+1),t.setDate(t.getDate()-1),t.getDate()}function u(e){return new Date(e.getFullYear(),e.getMonth(),1)}function p(e){var t=new Date(e.getFullYear(),e.getMonth()+1,1);return this.addDays(t,-1)}function d(e){var t=e.getMonth();return t+1+"月"}function c(e){var t=e.getDay(),r=["日","一","二","三","四","五","六"];return"星期"+r[t]}function f(t){for(var r=this.getWeekArray(t),n=r[0]=e.compact(r[0]),i=r[r.length-1],o=[],a=[],l=0,s=7-n.length;s>l;l++)o.push(this.addDays(n[0],l-s));for(s=7-i.length,l=1;s>=l;l++)a.push(this.addDays(i[i.length-1],l));return[].concat([o],r,[a])}function h(e){var t=[],r=this.getDaysInMonth(e),n=[],i=void 0,o=void 0,a=void 0,l=void 0,s=void 0;for(s=1;r>=s;s++)t.push(new Date(e.getFullYear(),e.getMonth(),s));for(;t.length;){for(o=t[0].getDay(),l=7-o,a=7-l,i=t.splice(0,l),s=0;a>s;s++)i.unshift(null);n.push(i)}return n}function m(e,t){t=t.split(/[^yMdW]+/i),e=e.split(/\D+/);for(var r={},n=0,i=t.length;i>n;n++)if(t[n]&&e[n]&&(t[n].length>1&&e[n].length===t[n].length||1===t[n].length))r[t[n]]=e[n];var o=r.yyyy||r.y||(r.yy<50?"20":"19")+r.yy,a=0|(r.m||r.mm),l=0|(r.d||r.dd);return new Date(0|o,a-1,l)}function y(e,t,r){var n=e.getFullYear(),i=e.getMonth()+1,o=e.getDate(),a=e.getDay();if(r&&r.days)a=r.days.split(",")[a];var l={yyyy:n,yy:n%100,y:n,mm:this.datePad(i),m:i,dd:this.datePad(o),d:o,w:a,ww:r?r.week+a:""};return t.replace(/y+|M+|d+|W+/gi,function(e){return l[e]||""})}function b(e){return e=10>e?"0"+e:e}function v(e,t){return e&&t&&e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function g(e,t){return e&&t&&e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()}function x(e,t){var r=this.cloneAsDate(e),n=this.cloneAsDate(t);return r.getTime()<n.getTime()}function C(e,t){var r=this.cloneAsDate(e),n=this.cloneAsDate(t);return r.getTime()>n.getTime()}function q(e,t){var r=this.cloneAsDate(e),n=this.cloneAsDate(t);return r.getFullYear()<=n.getFullYear()&&r.getMonth()<n.getMonth()}function D(e,t){var r=this.cloneAsDate(e),n=this.cloneAsDate(t);return r.getFullYear()>=n.getFullYear()&&r.getMonth()>n.getMonth()}function P(e,t,r){return!this.isBeforeDate(e,t)&&!this.isAfterDate(e,r)}function T(e){return e instanceof Date}function k(e,t){var r=12*(e.getFullYear()-t.getFullYear());return r+=e.getMonth(),r-=t.getMonth()}function R(e,t){return~~(this.monthDiff(e,t)/12)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.isDate=r,exports.addDays=n,exports.addMonths=i,exports.addYears=o,exports.clone=a,exports.cloneAsDate=l,exports.getDaysInMonth=s,exports.getFirstDayOfMonth=u,exports.getLastDayOfMonth=p,exports.getShortMonth=d,exports.getDayOfWeek=c,exports.getFullWeekArray=f,exports.getWeekArray=h,exports.parse=m,exports.format=y,exports.datePad=b,exports.isEqualDate=v,exports.isEqualMonth=g,exports.isBeforeDate=x,exports.isAfterDate=C,exports.isBeforeMonth=q,exports.isAfterMonth=D,exports.isBetweenDates=P,exports.isDateObject=T,exports.monthDiff=k,exports.yearDiff=R});