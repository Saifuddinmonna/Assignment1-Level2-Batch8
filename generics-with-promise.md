
# Generics in TypeScript and Asynchronous Promise<T>

## Introduction

Generics are an important feature of TypeScript that allow developers to create reusable and type-safe functions, interfaces, and classes. Instead of defining a fixed type, generics allow us to work with different types while maintaining type safety. They are especially useful when handling asynchronous operations with Promise<T>.

## Detailed Explanation

### 1. What Are Generics?

Generics allow a function to accept different data types without using any.

Example:

```typescript
function getFirstItem<T>(items: T[]): T {
    return items[0];
}

const firstName = getFirstItem<string>(["Rakib", "Sadia"]);
const firstNumber = getFirstItem<number>([10, 20, 30]);
```

Here, T represents a dynamic type. The function works with both strings and numbers while maintaining type safety.

### 2. Understanding Promise<T>

A Promise represents a value that may become available in the future. The generic type T defines the type of value returned when the Promise is successfully resolved.

Example:

```typescript
function getUser(): Promise<string> {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve("Rakib");
        }, 1000);
    });
}
```

Here, Promise<string> means that the Promise will resolve with a string value.

### 3. Generics with Asynchronous API Responses

Generics are useful when an API returns different types of data.

Example:

```typescript
interface ApiResponse<T> {
    success: boolean;
    data: T;
}

async function fetchData<T>(data: T): Promise<ApiResponse<T>> {
    return {
        success: true,
        data: data
    };
}

const user = await fetchData<string>("Rakib");
const age = await fetchData<number>(25);
```

The same function can handle different data types without duplicating code.

### 4. Main Benefits

- Code reusability.
- Better type safety.
- Reduced code duplication.
- Easier API response handling.
- Better development experience.

## Conclusion

Generics make TypeScript code flexible, reusable, and type-safe. Promise<T> helps define the expected result of asynchronous operations. Combining Generics with Promise<T> allows developers to build reusable API functions and handle different response types safely in real-world applications.

1. [Type Alias vs Interface](./type-vs-interface.md)
2. [Generics and Promices  in TypeScript](./generics-with-promise.md)
2. [8 Coding Problems Solution](./solutions.ts)