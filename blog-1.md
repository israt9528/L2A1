# Building Reusable and Type-Safe Code with Generics in TypeScript

## Introduction

As applications become larger and more complex, developers often face a common challenge: writing reusable code without losing type safety. In JavaScript, reusable functions can handle different types of data, but they often sacrifice type checking, which can lead to runtime errors.

TypeScript solves this problem with **Generics**.

Generics allow developers to create reusable components, functions, and classes that can work with different data types while still maintaining strict type safety. Instead of rewriting the same logic for strings, numbers, arrays, or objects, developers can write one flexible implementation that adapts dynamically to the provided data structure.

In this blog, we will explore how Generics work in TypeScript, why they are important, and how they help build scalable and maintainable applications.

---

# What Are Generics?

Generics are a feature in TypeScript that allows functions, classes, and interfaces to work with multiple data types while preserving type information.

A generic type acts as a placeholder that gets replaced with the actual type when the function or component is used.

---

# Generics in Reusable function

# Problem Without Generics

Without Generics, developers often create separate functions for different data types.

```ts
function stringIdentity(value: string): string {
  return value;
}

function numberIdentity(value: number): number {
  return value;
}

console.log(stringIdentity("Hello"));
console.log(numberIdentity(100));
```

Although both functions perform the same task, the logic is duplicated.
This becomes difficult to maintain in large applications.

# Solving the Problem with Generics

Generics allow us to write one reusable function that works for all types.

```ts
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(100));
console.log(identity<boolean>(true));
```

# How Generics Maintain Strict Typing

One major advantage of Generics is that they preserve the exact type passed into the function.

```ts
function getFirstItem<T>(items: T[]): T {
  return items[0];
}

const firstNumber = getFirstItem([1, 2, 3]);
const firstString = getFirstItem(["A", "B", "C"]);

console.log(firstNumber);
console.log(firstString);
```

TypeScript automatically infers:

- firstNumber as number
- firstString as string

This ensures developers get proper autocomplete support and compile-time error checking.

# Generics in Reusable Components

Generics are commonly used in reusable UI components.

For example, a dropdown component can work with different types of data while remaining type-safe.

```ts
type DropdownProps<T> = {
  items: T[];
  selectItem: (item: T) => void;
};

function Dropdown<T>({ items, selectItem }: DropdownProps<T>) {
  return (
    <div>
      {items.map((item, index) => (
        <button key={index} onClick={() => selectItem(item)}>
          Select
        </button>
      ))}
    </div>
  );
}
```

This component can now work with:

- Users
- Products
- Categories
- Tasks

while preserving accurate typing for every item.
