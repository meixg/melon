/*! 2016 Baidu Inc. All Rights Reserved */
!function(e,t){if("function"==typeof define&&define.amd)define(["module","../../babelHelpers"],t);else if("undefined"!=typeof exports)t(module,require("../../babelHelpers"));else{var r={exports:{}};t(r,e.babelHelpers),e.hyphenate=r.exports}}(this,function(module,e){"use strict";module.exports=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e}).slice(1).toLowerCase()}});