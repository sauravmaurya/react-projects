"use strict";
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
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);
console.log(mergedObj.name);
function countAndDescribe(element) {
    let descriptionText = "Got no elements";
    if (element.length === 1) {
        descriptionText = "Got 1 element";
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements`;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("Hi there"));
console.log(countAndDescribe(["sports", "art"]));
//keyof
function extractAndConvert(obj, key) {
    return `Value : ${obj[key]}`;
}
extractAndConvert({ name: "saurav" }, "name");
// Generics Classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1); //-1
    }
    getItem() {
        return [...this.data];
    }
}
let stringStorage = new DataStorage();
stringStorage.addItem("Saurav");
console.log(stringStorage.getItem());
let numberOrStrStorage = new DataStorage();
numberOrStrStorage.addItem(10);
numberOrStrStorage.addItem("Syani");
console.log(numberOrStrStorage.getItem());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
//ReadOnly
const names = ["Max", "Anna"];
// names.push('Manu');
// names.pop();
