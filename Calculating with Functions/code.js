/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

JavaScript:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Divison should be integer division, e.g eight(dividedBy(three()))/eight(divided_by(three)) should return 2, not 2.666666...
*/


function zero(numOperArr) { return arguments.length > 0 ? parseInt(eval(0+numOperArr[1]+numOperArr[0])) : 0; }
function one(numOperArr) { return arguments.length > 0 ? parseInt(eval(1+numOperArr[1]+numOperArr[0])) : 1; }
function two(numOperArr) { return arguments.length > 0 ? parseInt(eval(2+numOperArr[1]+numOperArr[0])) : 2; }
function three(numOperArr) { return arguments.length > 0 ? parseInt(eval(3+numOperArr[1]+numOperArr[0])) : 3; }
function four(numOperArr) { return arguments.length > 0 ? parseInt(eval(4+numOperArr[1]+numOperArr[0])) : 4; }
function five(numOperArr) { return arguments.length > 0 ? parseInt(eval(5+numOperArr[1]+numOperArr[0])) : 5; }
function six(numOperArr) { return arguments.length > 0 ? parseInt(eval(6+numOperArr[1]+numOperArr[0])) : 6; }
function seven(numOperArr) { return arguments.length > 0 ? parseInt(eval(7+numOperArr[1]+numOperArr[0])) : 7; }
function eight(numOperArr) { return arguments.length > 0 ? parseInt(eval(8+numOperArr[1]+numOperArr[0])) : 8; }
function nine(numOperArr) { return arguments.length > 0 ? parseInt(eval(9+numOperArr[1]+numOperArr[0])) : 9; }

function plus(num) {return [num, '+'];}
function minus(num) {return [num, '-'];}
function times(num) {return [num, '*'];}
function dividedBy(num) {return [num, '/'];}
