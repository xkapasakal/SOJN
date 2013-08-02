"use strict";

window.onload = function (event){
	var values = [ 213, 16, 2058, 54, 10, 1965, 57, 9 ];
	var sortedValues = values.sort(function(value1, value2){return value1 - value2});
	console.log(sortedValues);
	
};

function isNimble(){ return true; }

function fun() { return this; }
fun();
fun.call(2);
fun.apply(null);
fun.call(undefined);
fun.bind(true);
var fvar = fun;
fvar();


document.writeln("A: " + this);

var o = {
	f: function() {
		return this;
	}
};
document.writeln("B: " + o.f());
var f = o.f;
document.writeln("C: " + f());

var obj = {};
document.writeln("D: " + f.call(obj));

var o = {
	f: function() {
		var ff = function() {
			return this;
		};
		return ff();
	},
	g: {
		h: function() {
			return this;
		}
	}
};
document.writeln("E: " + o.f());
document.writeln("F: " + o.g.h());


var outerValue = 'ninja';

var later;

function outerFunction() {
  var innerValue = 'samurai';
  function innerFunction() {
    console.log(outerValue);
    console.log(innerValue);
  }
  later = innerFunction;
}

outerFunction();

later();
 