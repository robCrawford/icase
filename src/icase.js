/*
  Case and type insensitive lookups
  Example:
  	var data = {"Aaa": "Xyz"};
  	icase.setSrc(data);
  	var isMatch = icase.match( icase.get("aaa"), "xyz" );
*/
(function(window, namespace){
	"use strict";

	(namespace || window).icase = {

		setSrc: function(srcOb){
		//Set source object for key lookups
			var srcObKeys = this.lcKeys(srcOb);

			this.get = function(key){
			//Get verbatim value from case insensitive key lookup
				key = (key + "").toLowerCase();
				var srcKey = srcObKeys[key];
				if(!srcKey){
					srcObKeys = this.lcKeys(srcOb); //Recompile to find any new keys
					srcKey = srcObKeys[key];
				}
				return srcOb[srcKey];
			}
		},

		get: function(){
		//Overwritten by setSrc()
			throw new Error("icase.setSrc() not called");
		},

		match: function(val1, val2){
		//Case and type insensitive comparison
			return new RegExp("^" + val1 + "$", "i").test(val2 + "");
		},

		lcKeys: function(ob){
		//Map keys to lower case
			var keys = {};
			for(var p in ob){
				if(ob.hasOwnProperty(p)){
					keys[p.toLowerCase()] = p;
				}
			}
			return keys;
		}

	}
	
})(window);
