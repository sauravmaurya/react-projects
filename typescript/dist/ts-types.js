"use strict";
const arr1 = [
    "saurav",
    ["saurav", "kumar"],
    20,
];
const arr2 = ["saurav", "Kumar", "Maurya"];
const person = {
    name: "saurav",
    age: 28,
    role: [1, "saurav", true],
    hobbies: ["sing", "swim", "dance"],
};
let favActivities = ["dance", "travel"];
for (let i = 0; i < favActivities.length; i++)
    console.log(favActivities[i]);
// enum
var Role1;
(function (Role1) {
    Role1[Role1["ADMIN"] = 0] = "ADMIN";
    Role1[Role1["USER"] = 1] = "USER";
    Role1[Role1["GUEST"] = 2] = "GUEST";
})(Role1 || (Role1 = {}));
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role[Role["USER"] = 2] = "USER";
    Role[Role["GUEST"] = 100] = "GUEST";
})(Role || (Role = {}));
const car = {
    models: ["safari", "harrier", "nexon"],
    number: ["BR", 12],
    brand: "hyundai",
    user: Role.GUEST,
};
console.log(car);
