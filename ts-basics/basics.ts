// Primitives: number, string, boolean
// More complex types: arrays, objects,
// Function types, parameters

// Primitives: number, string, boolean
let age: number = 30; // Represents a numeric value, age is set to 30.
let userName: string = "Khaibar"; // Represents a string value, userName is set to "Khaibar".
let isStudent: boolean = true; // Represents a boolean value, isStudent is set to true.

// More complex types: arrays, objects
let hobbies: string[]; // Represents an array of strings, hobbies is initialized as an empty array.
hobbies = ["Skating", "Kayaking"]; // Assigns an array of strings to hobbies.

// Type Aliases
type Person = {
  name: string;
  age: number;
};

let person: Person; // Represents an object with name and age properties, person is declared but not initialized.
person = { name: "Khaibar", age: 30 }; // Assigns an object to person with name "Khaibar" and age 30.

let people: Person[]; // Represents an array of objects with name and age properties, people is declared but not initialized.
people = [
  { name: "Max", age: 35 },
  { name: "Khaibar", age: 30 },
]; // Assigns an array of objects to people, each with name and age properties.

// Type inference
// let course = "React - The Complete Guide";
// course = 12345;

// The code above is commented out to prevent errors since the type of 'course' is inferred as string initially,
// and then attempted to assign a numeric value '12345', which would result in a type error.

// Union Types
let course: string | number | boolean = "React - The Complete Guide"; // Represents a value that can be either a string, number, or boolean, course is set to "React - The Complete Guide".
course = 12345; // Now assigns a number to course.

// Functions & Types
function add(a: number, b: number): number {
  // Function that takes two number arguments (a and b) and returns their sum as a number.
  return a + b;
}

function printOutput(value: any): void {
  // Function that takes a value of any type and logs it to the console.
  console.log(value);
}

// Generics
function insertInBeginning<T>(array: T[], value: T): T[] {
  // Generic function that inserts a value of type T at the beginning of an array of type T[].
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3]; // Represents an array of numbers.

const updatedArray = insertInBeginning(demoArray, -1); // Calls insertInBeginning with demoArray and -1 as arguments, resulting in [-1, 1, 2, 3].
const stringArray = insertInBeginning(["b", "c", "d"], "a"); // Calls insertInBeginning with a string array and "a" as arguments, resulting in ["a", "b", "c", "d"].

// The next line 'updatedArray[0].split("");' is commented out since updatedArray is an array of numbers,
// and the split() method is not applicable to numbers.
