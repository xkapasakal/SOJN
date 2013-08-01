(function () {
    // "use strict";

    describe("A suite", function() {
        it("contains spec with an expectation", function() {
            expect(true).toBe(true);
        });

        it("Nible", function() {
            expect(typeof window.isNimble === "function").toBe(true);
            expect(typeof inner === "function").toBe(true);
            function inner() {}
            expect(typeof anonymous === "function").toBe(false);
            var anonymous = function (){};
            expect(typeof anonymous === "function").toBe(true);
            expect(typeof inner === "function").toBe(true);
        });

        it("recursion", function() {
            "use strict";
            function chirp(n) {
                return n > 1 ? chirp(n - 1) + "-chirp" : "chirp";
            }
            expect(chirp(3) === "chirp-chirp-chirp");

            var ninja = {
                chirp: function signal(n) {
                    return n > 1 ? signal(n - 1) + "-chirp" : "chirp";
                }
            };
            expect(ninja.chirp(3) === "chirp-chirp-chirp").toBe(true);

            var samurai = { chirp: ninja.chirp };

            ninja = {};
            expect(samurai.chirp(3) === "chirp-chirp-chirp").toBe(true);

            function smallest(array) {
                return Math.min.apply(Math, array);
            }

            expect(smallest([0, 1, 2, 3]) === 0).toBe(true);

            function addMethod(object, name, fn) {
                var old = object[name];
                object[name] = function() {
                    if (fn.length === arguments.length)
                        return fn.apply(this, arguments)
                    else if (typeof old == 'function')
                        return old.apply(this, arguments);
                };
            };

            function isFunction(fn) {
                return Object.prototype.toString.call(fn) === "[object Function]";
            };

            function exampleClosureForm(arg1, arg2){
                var localVar = 8;
                function exampleReturned(innerArg){
                    return (arg1 + arg2 + innerArg + outVar);
                }
                return exampleReturned;
            }

            var outVar = 8;
            var globalVar = exampleClosureForm(2, 4);
            expect(globalVar(2) === 16).toBe(true);
            outVar = 10;
            expect(globalVar(2) === 18).toBe(true);

            function callLater(paramA, paramB, paramC){
                return (function(){
                    console.log(paramA + paramB + paramC);
                });
            }
            
            var functRef = callLater("elStyle", "display", "none");
            functRef();
            var hideMenu=setTimeout(functRef, 500);

            var dwarves = "bashful doc dopey grumpy happy sleepy sneezy";
            console.log(dwarves);
            dwarves = dwarves.split(' ');
            var reverseArray = new Array();
            reverseArray.reverse = function (array) {
                this.push(array.pop());
                if(array.length != 0) {
                    this.reverse(array);
                }
                return this;
            }
            reverseArray.reverse(dwarves);
            console.log(reverseArray.join(' '));

            expect('' == '0').toBe(false);
            expect('' == 0).toBe(true);
            expect(false == 'false').toBe(false);
            expect(false == 0).toBe(true);
            expect(false == '0').toBe(true);
            expect(null == undefined).toBe(true);
            expect('\t\r\n' == 0).toBe(true);
            expect(undefined == undefined).toBe(true);
            expect(NaN == NaN).toBe(false);
            expect(NaN === NaN).toBe(false);
            expect(1 == true).toBe(true);
            expect(1 === true).toBe(false);

            x();
            function x() {
                var x = 1;
                console.log("1: " + x);
                {
                    var x = 4;
                }
                console.log("2: " + x);
                function f ()
                {
                    console.log("3: " + x);
                    var x = 3;
                };
                f();
                console.log("4: " + x);
            }

            function returnTrue() {
                return 
                {
                    result: true;
                };
            }
            console.log(returnTrue())
            expect(returnTrue() == null ).toBe(true);

            console.log("A:");
            // console.log(this);
            var o = {
                f: function() {
                    console.log(this);
                    return this;
                }
            };
            console.log("B:");
            console.log(o.f());
            
            var f = o.f;
            console.log("C:");
            console.log(f());
            
            var obj = {};
            console.log("D:");
            console.log(f.call(obj));
            
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
            console.log("E:");
            console.log(o.f());
            console.log("F:");
            console.log(o.g.h())

            var testThis = function () {
                return this;
            };
            console.log("G:");
            console.log(testThis());
        });

        it("use strict this", function() {

            // Strict mode makes it easier to write "secure" JavaScript. 
            // Some websites now provide ways for users to write JavaScript which will be run by
            // the website on behalf of other users. JavaScript in browsers can access the user's 
            // private information, so such JavaScript must be partially transformed before it is run, 
            // to censor access to forbidden functionality. JavaScript's flexibility makes it effectively 
            // impossible to do this without many runtime checks. Certain language functions are so 
            // pervasive that performing runtime checks has considerable performance cost. 
            // A few strict mode tweaks, plus requiring that user-submitted JavaScript be strict mode 
            // code and that it be invoked in a certain manner, substantially reduce the need for 
            // those runtime checks.

            // First, the value passed as this to a function in strict mode isn't boxed into an object. 
            // For a normal function, this is always an object: the provided object if called with an 
            // object-valued this; 
            // the value, boxed, if called with a Boolean, string, or number this; 
            // or the global object if called with an undefined or null this. 
            // (Use call, apply, or bind to specify a particular this.) 
            // Automatic boxing is a performance cost, 
            // but exposing the global object in browsers is a security hazard, 
            // because the global object provides access to functionality "secure" JavaScript 
            // environments must restrict. Thus for a strict mode function, 
            // the specified this is used unchanged, but if unspecified, this will be undefined:

            "use strict";
            function fun() { return this; }
            expect(fun() === undefined).toBe(true);
            expect(fun.call(2) === 2).toBe(true);
            expect(fun.apply(null) === null).toBe(true);
            expect(fun.call(undefined) === undefined).toBe(true);
            expect(fun.bind(true)() === true).toBe(true);
        });

        it("not use strict this", function() {
            function fun() { return this; }
            expect(fun() == this).toBe(true);
            expect(fun.call(2).toString() === new Number(2).toString() ).toBe(true);
            expect(fun.apply(null) === window).toBe(true);
            expect(fun.call(undefined) === window).toBe(true);
            expect(fun.bind(true)().toString() === new Boolean(true).toString()).toBe(true);
        });

    });

}());
