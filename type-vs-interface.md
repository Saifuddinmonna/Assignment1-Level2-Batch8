
# Type Alias vs Interface in TypeScript

## Introduction

TypeScript provides two important ways to define the structure of data: a.  Type Alias and b is Interface. Both help developers describe object properties and improve type safety. However, they have some important differences.

## Detailed Explanation

### 1. Type Alias

A Type Alias allows us to create a custom name for any type, including primitive types, objects, unions, and intersections.

Example:

```typescript
type User = {
    name: string;
    age: number;
};

const user: User = {
    name: "Rakib",
    age: 25
};
```

We can also use Type Alias with union types.

```typescript
type Status = "active" | "inactive" | "pending";
```

### 2. Interface

An Interface describes the structure of an object. It is commonly used to define the shape of objects and classes.

Example:

```typescript
interface Product {
    title: string;
    price: number;
}

const product: Product = {
    title: "Laptop",
    price: 50000
};
```

Interfaces support declaration merging, meaning we can declare the same interface more than once.

```typescript
interface User {
    name: string;
}

interface User {
    age: number;
}
```

Now User contains both name and age.

### 3. Main Differences

| Type Alias | Interface |
|---|---|
| Uses the type keyword | Uses the interface keyword |
| Supports union and intersection types | Does not directly support union types |
| Supports primitive types | Mainly describes object structures |
| Does not support declaration merging | Supports declaration merging |
| Uses intersections for extension | Uses extends for inheritance |

### 4. When Should We Use Them?

Use Interface when defining object structures, class contracts, or when declaration merging is useful.

Use Type Alias when working with union types, intersection types, primitive types, or complex type combinations.

## Conclusion

Both Type Alias and Interface are important TypeScript features. They provide type safety and make code easier to maintain. For object-oriented structures, Interface is often a good choice. For unions and complex type combinations, Type Alias is more flexible. Developers should choose the appropriate one based on their requirements.
