// problem -1

function filterEvenNumbers(array: number[]): number[] {
  return array.filter((num) => num % 2 == 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// problem-2
function reverseString(param: string): string {
  return param.split("").reverse().join("");
}
console.log(reverseString("typescript"));

// problem-3
type StringOrNumber = string | number;
function checkType(param: StringOrNumber): string {
  if (typeof param === "string") return "String";
  else return "Number";
}
console.log(checkType("Hello"));
console.log(checkType(42));

// problem-4
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const user = { id: 1, name: "John Doe", age: 21 };
console.log(getProperty(user, "name"));

// problem-5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return { ...book, isRead: true };
}
const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
console.log(toggleReadStatus(myBook));

// problem-6
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}
const student = new Student("Alice", 20, "A");
console.log(student.getDetails());

// problem-7
function getIntersection(param1: number[], param2: number[]): number[] {
  return param1.filter((num) => param2.includes(num));
}
console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
