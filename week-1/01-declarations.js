// x1 = 3; // It would be an error because x1 is not declared yet
// let x1; // It would be fine
// // const x2; // It would be an error because const variables must be initialized at the time of declaration
// var x3; // It would be fine
// x1 = 10; // It would be fine
// // x2 = 20; // It would be an error because const variables cannot be reassigned after initialization
// x3 = 30; // It would be fine
// var x3 = 11; // It would be fine because var allows redeclaration
// let x2 = 22; // It would be an error because let does not allow redeclaration
// x3 = 33; // It would be fine
// const arr = [1, 2, 3]; // It would be fine
// // arr = [4, 5, 6]; // It would be an error because const arrays cannot be reassigned after initialization
// arr.push(4); // It would be fine because we are modifying the contents of the array, not reassigning the variable

// const x2;

// const x2 = 5;
// x2 = 20;

// var x3;
// var x3 = 11;

// const x2 = 5;
// let x2 = 22;

const arr = [1, 2, 3];
arr.push(4);
arr = [4, 5, 6];