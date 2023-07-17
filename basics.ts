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

// Type Aliases
type Person = {
  name: string;
  age: number;
};

let person: Person;
person = { name: "Khaibar", age: 30 };

let people: Person[];
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

// Functions & Types
function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}
