const arr1: (string | number | string[])[] = [
  "saurav",
  ["saurav", "kumar"],
  20,
];

const arr2: Readonly<string>[] = ["saurav", "Kumar", "Maurya"];

const person: {
  name: string;
  age: number;
  role: [number, string, boolean]; //tuple
  hobbies: string[];
} = {
  name: "saurav",
  age: 28,
  role: [1, "saurav", true],
  hobbies: ["sing", "swim", "dance"],
};

let favActivities: string[] = ["dance", "travel"];

for (let i = 0; i < favActivities.length; i++) console.log(favActivities[i]);

// enum
enum Role1 {
  ADMIN,
  USER,
  GUEST,
}

enum Role {
  ADMIN = "admin",
  USER = 2,
  GUEST = 100,
}

const car: {
  brand: string;
  models: string[];
  number: [string, number];
  user: any;
} = {
  models: ["safari", "harrier", "nexon"],
  number: ["BR", 12],
  brand: "hyundai",
  user: Role.GUEST,
};

console.log(car);
