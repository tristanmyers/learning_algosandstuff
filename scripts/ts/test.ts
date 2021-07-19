// creating an interface

interface User {
    firstName: string;
    lastName: string;
}

const tristan: User = {
    firstName: 'Tristan',
    lastName: 'Myers'
};

console.log(`Hello, ${tristan.firstName} ${tristan.lastName}.`);

// creating a type

type windowState = "open" | "closed" | "minimized";

const myWindow: windowState = "open";

console.log(myWindow);