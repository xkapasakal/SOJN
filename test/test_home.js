'use strict';

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });

  it("Nible", function(){
  	expect(typeof window.isNimble === "function").toBe(true);
	expect(typeof inner === "function").toBe(true);
	function inner(){}
	expect(typeof anonymous === "function").toBe(false);
	var anonymous = function (){};
	expect(typeof anonymous === "function").toBe(true);
	expect(typeof inner === "function").toBe(true);
  });

  it("recursion", function(){
  	function chirp(n) {
  		return n > 1 ? chirp(n - 1) + "-chirp" : "chirp";
  	}
	expect(chirp(3) == "chirp-chirp-chirp");

	var ninja = {
		chirp: function signal(n) {
			return n > 1 ? signal(n - 1) + "-chirp" : "chirp";
		}
	};
	expect(ninja.chirp(3) == "chirp-chirp-chirp").toBe(true);

	var samurai = { chirp: ninja.chirp };

	ninja = {};
	expect(samurai.chirp(3) == "chirp-chirp-chirp").toBe(true);

	function smallest(array){
		return Math.min.apply(Math, array);
	}

	expect(smallest([0, 1, 2, 3]) == 0).toBe(true);

	function addMethod(object, name, fn) {
		var old = object[name];
		object[name] = function(){
			if (fn.length == arguments.length)
				return fn.apply(this, arguments)
			else if (typeof old == 'function')
				return old.apply(this, arguments);
		};

	function isFunction(fn) {
		return Object.prototype.toString.call(fn) === "[object Function]";
	};

  });
});