// style
// ---------------------------
require("../../style/app.less");
require("./index.less");

// js
// ---------------------------

require.ensure([], function () {
  var addMethods = require("../../lib/addMethods");
  console.log("1+2=%s", addMethods.add(1,2));
}, "arithmeticMethods");

require.ensure([], function () {
  var minusMethods = require("../../lib/minusMethods");
  console.log("1-2=%s", minusMethods.minus(1,2));
}, "arithmeticMethods");
