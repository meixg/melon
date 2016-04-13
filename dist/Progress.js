/*! 2016 Baidu Inc. All Rights Reserved */
!function(e,t){if("function"==typeof define&&define.amd)define(["exports","react","./common/util/cxBuilder","./babelHelpers"],t);else if("undefined"!=typeof exports)t(exports,require("react"),require("./common/util/cxBuilder"),require("./babelHelpers"));else{var r={exports:{}};t(r.exports,e.react,e.cxBuilder,e.babelHelpers),e.Progress=r.exports}}(this,function(exports,e,t,r){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var i=r.interopRequireDefault(e),o=t.create("Progress"),n=function(e){function t(i){r.classCallCheck(this,t);var o=r.possibleConstructorReturn(this,e.call(this,i));return o.timers={},o}return r.inherits(t,e),t.prototype.componentDidMount=function(){var e=this;if(!this.isDeterminate()){var t="circle"===this.props.shape.toLowerCase();if(t)return this.scalePath(this.refs.path),void this.rotateWrapper(this.refs.wrapper);this.barUpdate(0,"bar1",[[-35,100],[100,-90]]),this.timers.bar2=setTimeout(function(){e.barUpdate(0,"bar2",[[-200,100],[107,-8]])},850)}},t.prototype.componentWillUnmount=function(){var e=this;Object.keys(this.timers).forEach(function(t){clearTimeout(e.timers[t]),e.timers[t]=null}),this.timers={}},t.prototype.barUpdate=function(e,t,r){e=e||0,e%=4;var i=this.refs[t];switch(e){case 0:i.style.left=r[0][0]+"%",i.style.right=r[0][1]+"%";break;case 1:i.style.transitionDuration="840ms";break;case 2:i.style.left=r[1][0]+"%",i.style.right=r[1][1]+"%";break;case 3:i.style.transitionDuration="0ms"}this.timers[t]=setTimeout(this.barUpdate.bind(this,e+1,t,r),420)},t.prototype.scalePath=function(e,t){if(t=t||0,t%=3,this.timers.path=setTimeout(this.scalePath.bind(this,e,t+1),t?750:250),0===t)return e.style.strokeDasharray="1, 200",e.style.strokeDashoffset=0,void(e.style.transitionDuration="0ms");if(1===t)return e.style.strokeDasharray="89, 200",e.style.strokeDashoffset=-35,void(e.style.transitionDuration="750ms");else return e.style.strokeDasharray="89, 200",e.style.strokeDashoffset=-124,void(e.style.transitionDuration="850ms")},t.prototype.rotateWrapper=function(e){this.timers.wrapper=setTimeout(this.rotateWrapper.bind(this,e),10050),e.style.transitionDuration="0ms",e.style.transform="rotate(0deg)",this.timers.wrapperUpdater=setTimeout(function(){e.style.transitionDuration="10s",e.style.transform="rotate(1800deg)",e.style.transitionTimingFunction="linear"},50)},t.prototype.getRelativeValue=function(){var e=this.props,t=e.value,r=e.min,i=e.max,o=Math.min(Math.max(r,t),i),n=i-r,a=Math.round(o/n*1e4)/1e4;return 100*a},t.prototype.isDeterminate=function(){return"determinate"===this.props.mode.toLowerCase()},t.prototype.renderLinear=function(){var e=void 0,t=void 0;if(this.isDeterminate())t={width:this.getRelativeValue()+"%"};else e=[i["default"].createElement("div",{ref:"bar1",className:o().part("bar1").build(),key:"bar1"}),i["default"].createElement("div",{ref:"bar2",className:o().part("bar2").build(),key:"bar2"})];return i["default"].createElement("div",{className:o().part("bar").build(),style:t},e)},t.prototype.getZoom=function(){return t.SIZES[this.props.size]||1},t.prototype.renderCircle=function(){var e=this.getZoom(),t=14*e,r=2*e,n=16*e,a={};if(this.isDeterminate()){var s=this.getRelativeValue();a.strokeDasharray=Math.round(1.25*s*e)+","+200*e}return i["default"].createElement("div",{ref:"wrapper",className:o().part("wapper").build()},i["default"].createElement("svg",{className:o().part("svg").build()},i["default"].createElement("circle",{ref:"path",cx:n,cy:n,r:t,className:o().part("path").build(),style:a,fill:"none",strokeWidth:r,strokeMiterlimit:"10"})))},t.prototype.render=function(){var e=this.props,t=e.shape,n=e.mode,a=o(e).addVariants(t,n).build();return i["default"].createElement("div",r["extends"]({},e,{className:a}),"circle"===t?this.renderCircle():this.renderLinear())},t}(e.Component);exports["default"]=n,n.displayName="Progress",n.SIZES={xxs:.75,xs:.875,s:.9375,l:1.125,xl:1.25,xxl:1.375,xxxl:1.5},n.defaultProps={shape:"linear",mode:"determinate",value:0,min:0,max:100},n.propTypes={shape:e.PropTypes.oneOf(["circle","linear"]),mode:e.PropTypes.oneOf(["determinate","indeterminate"]),value:e.PropTypes.number,min:e.PropTypes.number,max:e.PropTypes.number,size:e.PropTypes.oneOf(Object.keys(n.SIZES))}});