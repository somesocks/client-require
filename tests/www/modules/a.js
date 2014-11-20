console.log("package a loaded");

var testA = "testA";

window.TESTA = "testA";

var f = function(){
	window.TESTA = "testA";
};

f();

//(function(){window.TESTA = "testA";}());

module.exports="package a";

