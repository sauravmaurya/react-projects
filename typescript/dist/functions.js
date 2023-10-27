"use strict";
function addition(n1, n2) {
    return n1 + n2;
}
function printResults(num) {
    console.log("Result: " + num);
}
function addHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResults(addition(5, 12));
let combineValue;
combineValue = addition;
// combineValues = printResults;
// combineValues = 5;
console.log(combineValue(8, 8));
// let someValue: undefined;
addHandle(10, 20, (result) => {
    console.log(result);
});
