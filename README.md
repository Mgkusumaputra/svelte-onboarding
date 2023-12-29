## Introduction

This is a simple project to introduce the basic concepts of Svelte. This project is intended for those who have never used Svelte at all or those who are still unfamiliar with the basic concepts of Svelte.

### Criteria

There are several criteria for this project, and participants must meet all of these criteria in order to pass.

#### Form

1. The form must have the following fields:
   1. Your name: `text`
   2. Your email: `email`
   3. Your date of birth: `date`
   4. Your age: `number`
   5. Your gender: `radio`
   6. Have you ever used Svelte?: `checkbox`
   7. Describe about you: `textarea`
2. The data must be captured using svelte `bindings` with the following structure:

   ```ts
   {
    name: string,
    email: string,
    dateOfBirth: string, // YYYY-MM-DD
    age: number,
    gender: "male" | "female",
    isEverUsedSvelte: boolean,
    description: string
   }
   ```

#### Store

1. Create two different components that refer to the same `store`
2. The `store` value must be an array of string
3. The first component will show the list of items of the store’s value
4. The second component will show how much of items the `store` has
5. Both two components have to be different from each other. In other words, there is no relation such as parent or child.
6. If you have a variable that subscribes to the store, make sure to unsubscribe it when the component is destroyed.

#### Promise

1. Create a promise that pretends to fetch some data
2. Execute that promise using `await` blocks

#### Basic Reactivity

1. Create a reactivity from svelte basic reactivity. It means, you cannot use `store` or `bindings`

#### Follow Best Practices

1. Make sure your code follows best practices provided by `eslint`, `prettier`, and `svelte`
2. Make sure to run (1) `pnpm check-format`, (2) `pnpm check-lint`, and (3) `pnpm check-svelte` before committing the changes

### Recommended

1. Never use `@html`, because it can lead to XSS problems. Use it if the content is trusted and there is no other way to accomplish your purpose
2. Add the default value if the props are required, but omit the default value if the props are optional (not required)
3. Use keyed each block if you want to manipulate the item of the list and use the `ID` of the item as a key
4. Avoid inline handler
