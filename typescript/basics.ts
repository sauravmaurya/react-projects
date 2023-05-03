function addNumbers(a: number, b: number, c: boolean) {
  if (c) {
    console.log(a + b);
  } else {
    return a + b;
  }
}
addNumbers(2, 3, true);
