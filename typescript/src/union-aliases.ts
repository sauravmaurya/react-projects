type Combinable = number | string; // type aliases/custom types

function combine(
  in1: Combinable,
  in2: Combinable,
  resultConversion: "as-number" | "as-text" //literal
) {
  let result;
  if (
    (typeof in1 === "number" && typeof in2 == "number") ||
    resultConversion === "as-number"
  ) {
    result = +in1 + +in2;
  } else {
    result = in1.toString() + in2.toString();
  }
  return result;
}

console.log(combine(1, 2, "as-number"));
console.log(combine("1", "2", "as-number"));
console.log(combine("1", "2", "as-text"));
