// Primitives: number, string, boolean
// More complex types: arrays, objects,
// Function types, parameters

// Primitives
let age: number = 30;

let userName: string = "Khaibar";

let isStudent: boolean = true;

// More complex types
let hobbies: string[];
hobbies = ["Skating", "Kayaking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Khaibar",
  age: 30,
};

let people: {
  name: string;
  age: number;
}[];
people = [
  { name: "Max", age: 35 },
  { name: "Khaibar", age: 30 },
];

// Type inference
// let course = "React - The Complete Guide";
// course = 12345;

// Union Types
let course: string | number | boolean = "React - The Complete Guide";
course = 12345;
