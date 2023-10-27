function addition(n1: number, n2: number): number {
  return n1 + n2;
}

function printResults(num: number): void {
  console.log("Result: " + num);
}

function addHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResults(addition(5, 12));

let combineValue: (a: number, b: number) => number;

combineValue = addition;
// combineValues = printResults;
// combineValues = 5;

console.log(combineValue(8, 8));

// let someValue: undefined;

addHandle(10, 20, (result) => {
  console.log(result);
});
