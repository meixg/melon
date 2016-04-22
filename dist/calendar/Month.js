/*! 2016 Baidu Inc. All Rights Reserved */
!function(e,t){if("function"==typeof define&&define.amd)define(["exports","react","../common/util/cxBuilder","./Day","../common/util/date","../babelHelpers"],t);else if("undefined"!=typeof exports)t(exports,require("react"),require("../common/util/cxBuilder"),require("./Day"),require("../common/util/date"),require("../babelHelpers"));else{var r={exports:{}};t(r.exports,e.react,e.cxBuilder,e.Day,e.date,e.babelHelpers),e.Month=r.exports}}(this,function(exports,e,t,r,i,o){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=o.interopRequireDefault(e),a=o.interopRequireDefault(r),s=o.interopRequireWildcard(i),l=t.create("CalendarMonth"),u=function(e){function t(r){o.classCallCheck(this,t);var i=o.possibleConstructorReturn(this,e.call(this,r));return i.onClick=i.onClick.bind(i),i}return o.inherits(t,e),t.prototype.onClick=function(e){var t=this.props.onChange;if(t)t({target:this,date:e.date})},t.prototype.renderWeekHeader=function(){var e=this.props.lang.days.split(",");return n["default"].createElement("div",{className:l().part("weekheader").build()},e.map(function(e,t){return n["default"].createElement("span",{key:e},e)}))},t.prototype.renderDates=function(){var e=this.props,t=e.month,r=s.getFullWeekArray(t),i=[],o=r.length;i.push(this.renderDay(r[0],["pre-month"])),i[0]=i[0].concat(this.renderDay(r[1],[]));for(var a=2;o-1>a;a++)i.push(this.renderDay(r[a],[]));return i[o-3]=i[o-3].concat(this.renderDay(r[o-1],["next-month"])),n["default"].createElement("ul",null,i.map(this.renderWeek))},t.prototype.renderWeek=function(e,t){return n["default"].createElement("li",{key:t,className:l().part("week").build()},e)},t.prototype.renderDay=function(e,t){var r=this,i=this.props,o=i.date,l=i.minDate,u=i.maxDate;return e.map(function(e,i){var p=s.isEqualDate(e,o),d=s.isDate(l)&&s.isBeforeDate(e,l)||s.isDate(u)&&s.isAfterDate(e,u);return n["default"].createElement(a["default"],{key:e,date:e,variants:t,disabled:d,selected:p,onClick:r.onClick})})},t.prototype.render=function(){return n["default"].createElement("div",{className:l(this.props).build()},this.renderWeekHeader(),this.renderDates())},t}(e.Component);exports["default"]=u,u.displayName="CalendarMonth",u.propTypes={date:e.PropTypes.object.isRequired,month:e.PropTypes.object.isRequired,maxDate:e.PropTypes.object,minDate:e.PropTypes.object,onChange:e.PropTypes.func,lang:e.PropTypes.shape({week:e.PropTypes.string,days:e.PropTypes.string,title:e.PropTypes.string}).isRequired}});