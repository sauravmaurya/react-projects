// const names: Array<string> = []; // string[]
// names[0].split(" ");

// const promise: Promise<string> = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("10");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);
console.log(mergedObj.name);

//Generic Function
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText: string = "Got no elements";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`;
  }

  return [element, descriptionText];
}
console.log(countAndDescribe("Hi there"));
console.log(countAndDescribe(["sports", "art"]));

//keyof
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value : ${obj[key]}`;
}

extractAndConvert({ name: "saurav" }, "name");

// Generics Classes

class DataStorage<T extends number | string | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1); //-1
  }

  getItem() {
    return [...this.data];
  }
}

let stringStorage = new DataStorage<string>();
stringStorage.addItem("Saurav");
console.log(stringStorage.getItem());

let numberOrStrStorage = new DataStorage<number | string>();
numberOrStrStorage.addItem(10);
numberOrStrStorage.addItem("Syani");
console.log(numberOrStrStorage.getItem());

// const objStorage = new DataStorage<object>();
// const maxObj = {name: 'Max'};
// objStorage.addItem(maxObj);
// objStorage.addItem({name: 'Manu'});
// // ...
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

//ReadOnly
const names: Readonly<string[]> = ["Max", "Anna"];
// names.push('Manu');
// names.pop();
