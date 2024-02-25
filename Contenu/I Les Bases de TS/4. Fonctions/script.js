"use strict";
/**
 *
 * @param num1
 * @param num2
 * @returns {number}
 */
function multiply(num1, num2, action) {
    action ? console.log(action) : null;
    return num1 * num2;
}
console.log(multiply(2, 2, 'multiply'));
var foo;
foo = function () { };
// Function signatures
var baz;
baz = function (a, b) { return a + b; };
baz(1, 2);
// callback
function test1(fn) {
    fn("callback");
}
function test2(msg) {
    console.log(msg);
}
test1(test2);
