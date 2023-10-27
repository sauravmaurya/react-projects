"use strict";
function combine(in1, in2, resultConversion //literal
) {
    let result;
    if ((typeof in1 === "number" && typeof in2 == "number") ||
        resultConversion === "as-number") {
        result = +in1 + +in2;
    }
    else {
        result = in1.toString() + in2.toString();
    }
    return result;
}
console.log(combine(1, 2, "as-number"));
console.log(combine("1", "2", "as-number"));
console.log(combine("1", "2", "as-text"));
