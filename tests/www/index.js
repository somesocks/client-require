alias('c','modules/c.js');
alias('b','modules/b.js');
alias('a','modules/a.js');

var c = require('c');

console.log(c);

//should be undefined
console.log("testA " + window.testA);
console.log("TESTA " + window.TESTA);

//should be 'testB'
console.log(testB);

//should be 'testC'
console.log(testC);


require('modules/a0.js',false);
require('modules/a1.js',false);
require('modules/a2.js',false);
require('modules/a3.js',false);
require('modules/a4.js',false);
require('modules/a5.js',false);
require('modules/a6.js',false);
require('modules/a7.js',false);
require('modules/a8.js',false);
require('modules/a9.js',false);

var a0 = require('modules/a0.js');
var a1 = require('modules/a1.js');
var a2 = require('modules/a2.js');
var a3 = require('modules/a3.js');
var a4 = require('modules/a4.js');
var a5 = require('modules/a5.js');
var a6 = require('modules/a6.js');
var a7 = require('modules/a7.js');
var a8 = require('modules/a8.js');
var a9 = require('modules/a9.js');

var react = require('modules/react.js');

console.log('react ' + react);
console.log('React ' + React);
