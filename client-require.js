(function () {

	var modules = {};

	var load = function(code,url,modules){
		var module = this;
		var global = window;
		var window = window;

		eval(code);

		modules[url] = module;
	};

	var require = function(url){
		console.log("loading url " + url);
		if(modules[url]) {return modules[url].exports;}

		var request = new XMLHttpRequest();  
		request.open('GET',url, false);   
		request.send(null);
  
		if (request.status === 200) {
			load.call({},request.responseText,url,modules);
			return modules[url].exports;
		}else{
			throw "ModuleError: failed to load " + url + " " + request.status;
		}
	};

	var prefetch = function(url){
		console.log("prefetching url " + url);
		if(modules[url]) {return modules[url].exports;}

		var request = new XMLHttpRequest();  
		request.open('GET',url, true);   
		request.send(null);
  
		if (request.status === 200) {
			load.call({},request.responseText,url,modules);
			return modules[url].exports;
		}else{
			throw "ModuleError: failed to load " + url + " " + request.status;
		}
	};

	window.require = require;
	window.prefetch = prefetch;

}());

