## Objectives

- Explain what linting is.
- Explain why linting your code is important.
- Use ESLint to lint your JavaScript code.

## What's linting?

**Linting** is the process of running a program that analyzes the code of another program for potential errors. The word "linting" comes the `lint` Unix utility which flags suspicious usage of coding constructs in C language code. For example, unreachable statements, variables declared but not used, functions whose returns values are not used, etc. For C developers, linting their code is important because suspicious coding constructs are likely to produce bugs when their program is run on different hardware or operating systems.

A **linter** is any tool that flags suspicious usage of coding constructs, debugs code for common syntax errors, or highlights code that doesn't adhere to certain style guidelines. There are a many JavaScript linters like JSHint, JSLint, JSCS, and ESLint. In this course, we'll introduce you to [ESLint][eslint], a flexible, free, and open source JavaScript linter. Created by Nicholas C. Zakas in June 2013, ESLint has become the de facto JavaScript linter because of it's ability to lint ES6 code.

### Exercie

Turn to a neighbor and explain what linting is in your own words.

## Why is linting your code important?

When you're interviewing for a developer job, your code is going to be assessed by people who've been writing code for a long time. As you can imagine, this can be quite intimidating. An experienced developer can quickly spot code that's written by a developer who's just started out because it often lacks discipline and a complete knowledge of the language.

When coding, **discipline** is a critical skill because code has a large audience of people and machines who are responsible for reading and evaluating the code.

1. The first audience member is obviously the person doing the writing.
1. The second audience member is the runtime system that executes the code.
1. The third audience member is the maintenance team who will change the code as the product evolves.

A disciplined developer understands that each audience member has certain needs when reading and evaluating code. The writer needs to produce his or her work quickly. The runtime system needs to execute the code correctly and efficiently. And the maintenance team needs to quickly learn how the code works so they can change it. Writing code that balances the needs of the audience requires discipline.

Writing balanced code also takes a **complete knowledge** of its programming language. As you've likely discovered by now, programming languages are comprised of many coding constructs, some that can accomplish the same task. Take an if-else statement, for example. It performs the exact same task as a ternary (`?:`) expression. They both allow code to branch in one of two directions depending on the result of a logical expression.

But, as a developer, when do you choose an if-else statement over a ternary expression? When do you reach for the other? A person who's been writing code for a long time has gone through enough experiences, enough trial-and-error, to definitively answer these types of questions. However, you're probably not one of those people, yet.

So how do you quickly level up? One of the best ways is to lint your code. Tools like ESLint will help you learn the habit of discipline and help you fill in the gaps of your JavaScript knowledge.

Long story short, if you want your code to look like you've been developing software for a long time, use a linter.

### Exercise

In your own words, explain why linting your code is important.

## How do you use ESLint to lint your JavaScript code?

1. Read ESLint's [about page][eslint-about]
1. Read Ryan Sobol's [shareable ESLint configuration][eslint-config-ryansobol]

### Exercise

Install ESLint and Ryan Sobol's shareable ESLint configuration on your development environment. Then, use these tools to lint your most recent JavaScript assignment.

## Resources

- [ESLint][eslint]
- [Ryan Sobol's shareable ESLint configuration][eslint-config-ryansobol]

[eslint]: http://eslint.org/
[eslint-about]: http://eslint.org/docs/about/
[eslint-config-ryansobol]: https://github.com/ryansobol/eslint-config-ryansobol
