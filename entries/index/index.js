// style
// ---------------------------
require("../../style/app.less");
require("./index.less");

// js
// ---------------------------

require.ensure([], function () {
  var addMethods = require("../../components/addMethods");
  console.log("1+2=%s", addMethods.add(1,2));
}, "arithmeticMethods");

require.ensure([], function () {
  var minusMethods = require("../../components/minusMethods");
  console.log("1-2=%s", minusMethods.minus(1,2));
}, "arithmeticMethods");

// require.ensure([], function () {
//   var addMethods = require("../components/addMethods");
//   console.log("2+3=%s", addMethods.add(2,3));
// })
