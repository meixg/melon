/*! 2016 Baidu Inc. All Rights Reserved */
!function(e,t){if("function"==typeof define&&define.amd)define(["exports","react","react-dom","./Mask","./common/util/dom","./dialog/DialogWindow","./dialog/windowScrollHelper","./common/util/cxBuilder","react-motion","./babelHelpers"],t);else if("undefined"!=typeof exports)t(exports,require("react"),require("react-dom"),require("./Mask"),require("./common/util/dom"),require("./dialog/DialogWindow"),require("./dialog/windowScrollHelper"),require("./common/util/cxBuilder"),require("react-motion"),require("./babelHelpers"));else{var r={exports:{}};t(r.exports,e.react,e.reactDom,e.Mask,e.dom,e.DialogWindow,e.windowScrollHelper,e.cxBuilder,e.reactMotion,e.babelHelpers),e.Dialog=r.exports}}(this,function(exports,e,t,r,o,i,n,a,s,l){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var u=l.interopRequireDefault(e),p=l.interopRequireDefault(t),c=l.interopRequireDefault(r),d=l.interopRequireDefault(o),f=l.interopRequireDefault(i),h=l.interopRequireWildcard(n),m=a.create("Dialog"),y=function(e){function t(r){l.classCallCheck(this,t);var o=l.possibleConstructorReturn(this,e.call(this,r));return o.originalHTMLBodySize={},o.state={open:o.props.open},o.onShow=o.onShow.bind(o),o.onHide=o.onHide.bind(o),o.onMaskClick=o.onMaskClick.bind(o),o}return l.inherits(t,e),t.prototype.componentDidMount=function(){this.positionDialog()},t.prototype.componentWillUpdate=function(){this.positionDialog()},t.prototype.componentWillReceiveProps=function(e){var t=e.open;if(t!==this.state.open)this.setState({open:t},t?this.onShow:this.onHide)},t.prototype.positionDialog=function(){var e=p["default"].findDOMNode(this.dialogWindow),t=-e.offsetHeight/2,r=d["default"].getClientHeight();t=e.offsetHeight>r?-r/2+16:t,e.style.marginLeft=-e.offsetWidth/2+"px",e.style.marginTop=t+"px"},t.prototype.bodyScrolling=function(){var e=this.state.show;h[e?"stop":"restore"]()},t.prototype.onMaskClick=function(e){if(this.props.maskClickClose)this.setState({open:!1},this.onHide);else e.stopPropagation()},t.prototype.onShow=function r(){this.bodyScrolling();var r=this.props.onShow;if(r)r()},t.prototype.onHide=function o(){this.bodyScrolling();var o=this.props.onHide;if(o)o()},t.prototype.renderTitle=function(){var e=this.props.title;return e?u["default"].createElement("h1",{className:m().part("title").build()},e):null},t.prototype.renderAction=function(){var e=this.props.actions;return e?u["default"].createElement("div",{ref:"dialogActions",className:m().part("actions").build()},e):null},t.prototype.render=function(){var e=this,t=this.props,r=this.state,o=t.children,i=l.objectWithoutProperties(t,["children"]),n=r.open,a=this.renderTitle(),p=u["default"].createElement("div",{className:m().part("body").build()},o),d=this.renderAction(),h=m().part("window").build();return u["default"].createElement("div",l["extends"]({},i,{className:m(t).addStates({open:n}).build()}),u["default"].createElement(s.Motion,{style:{y:s.spring(n?0:-80)}},function(t){var r=t.y;return u["default"].createElement(f["default"],{top:Math.round(r),ref:function(t){e.dialogWindow=t},title:a,footer:d,className:h},p)}),u["default"].createElement(c["default"],{show:n,lockScrollingOnShow:!0,onClick:this.onMaskClick}))},t}(e.Component);exports["default"]=y,y.propTypes={actions:e.PropTypes.node,maskClickClose:e.PropTypes.bool,open:e.PropTypes.bool,onHide:e.PropTypes.func,onShow:e.PropTypes.func,title:e.PropTypes.oneOfType([e.PropTypes.string,e.PropTypes.element])},y.defaultProps={maskClickClose:!0,open:!1}});