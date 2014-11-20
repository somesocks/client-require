var b = require('modules/b.js');
var a = require('modules/a.js');

console.log("package c loaded");

testC = "testC";

console.log("")
window.setTimeout(function(){console.log("setTimeout check passed");},10);

module.exports="package c";

