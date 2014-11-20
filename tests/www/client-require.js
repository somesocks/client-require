(function () {

	var modules = {};
	var aliases = {};

	var alias = function(name,url){
		aliases[name] = url;
	};

	var load = function(code,url,modules){
		var module = {};
		var global = window;

		//TODO: make a window shim to fix namespace pollution
		//var window = {};//window;

		eval(code);
		modules[url] = module;
	};

	var require = function(url, now){
		if (now === undefined) {now = true;}
		if(url in aliases) {url = aliases[url];}

		console.log("loading url " + url);
		if(modules[url]) {
			console.log("module already loaded");
			return modules[url].exports;
		}

		var request = new XMLHttpRequest();  
		request.open('GET',url, !now);   
		request.send(null);

		if (!now) {return;}
  
		if (request.status === 200) {
			load(request.responseText,url,modules);
			return modules[url].exports;
		}else{
			throw "ModuleError: failed to load " + url + " " + request.status;
		}
	};

	window.alias = alias;
	window.require = require;

}());

