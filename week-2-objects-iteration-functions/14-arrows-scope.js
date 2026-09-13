// Rewrite Day 13's functions as arrow functions
const addition = (x, y) => {
    return console.log(x + y);
}
addition(2, 3);

const subtraction = (x = 'Could you please ', y = 'fill the argument parameter please?') => {
    return typeof (x + y) === 'string'  ? console.log(x + y)  : console.log(x - y);
}
subtraction(4, 2); // 2
subtraction(); // Could you please fill the argument parameter please?
subtraction(null, null); // 0

const sumAll = (...numbers) => {
    let result = 0;
    for (const number of numbers) {
        result += number;
    }
    return result;
}
console.log(sumAll(1, 2, 3)); // 6
console.log(sumAll(0, 2, 7)); // 9
console.log(sumAll()); // 0

const checkPassword = (password = '') => {
    if (password.length < 8) {
        return 'Too short';
    } else {
        for (let i = 0; i < password.length; i++) {
            if (!Number.isNaN(Number(password[i]))) {
                return 'Valid';
            }
        }
        return 'Needs a number'
    }
}

const logOrderStatus = (status) => {
    console.log(`Order is: ${status}`);
}

console.log(checkPassword()); // Too short
console.log(checkPassword('dsad')); // Too short
console.log(checkPassword('nsaih3fk')); // Valid
console.log(checkPassword('hkkdshakdsha')); // Needs a number
const result = logOrderStatus('shipped');
console.log(result); // undefined

const applyDiscount = (price, calculateFn) => {
    console.log(`Final price: ${calculateFn(price)}`);
}

const tenPercentOff = (price) => {
    return price * 0.9;
}

applyDiscount(100, tenPercentOff); // 90

const runTask = (taskName, onFinish) => {
    onFinish(taskName);
}

runTask('pooping', (taskName) => {
    console.log(`${taskName} finished successfully.`);
}); // pooping finished successfully.

// Implicit return, and the parentheses trap when returning an object literal
const tenPercentOffImplicit = (price) => price * 0.9;

// exploring callback pattern, not part of the actual exercise
function externalSumAll(numbers) {
    let result = 0;
    for (const number of numbers) {
        result += number;
    }
    return result;
}
const sumAllImplicit = (sumFn, ...numbers) => sumFn(numbers);

const additionImplicit = (x, y) => console.log(x + y)
additionImplicit(2, 3);
const applyDiscountImplicit = (price, calculateFn) => console.log(`Final price: ${calculateFn(price)}`);
applyDiscountImplicit(100, tenPercentOff);

const makeUserFixed = (name, age) => ({ name: name, age: age });
console.log(makeUserFixed('Naufal', 21)); // { name: 'Naufal', age: 21 }

// Block scope versus function scope — demonstrate with let inside a block
if (true) {
    var x = 'var value';
    let y = 'let value';
}

console.log(x); // var value
// console.log(y); // an ReferenceError because let has a limited boundary within its scope/block scope

for (var i = 0; i < 3; i++) {
    // empty
}
console.log(i); // 3

// Write a counter using a closure and explain in a comment why the value persists
// Explanation:
// Step 1: outer() is called. This starts a new execution context.
// Inside that context, a variable "secret" is created and given the value 'hello'.
function outer() {
    let secret = 'hello'

    // Step 2: while still inside outer(), we define inner().
    // inner() references "secret", even though secret does not belong to inner()
    // itself, it belongs to outer(). inner() just reads it from the surrounding scope.
    function inner() {
        console.log(secret)
    }

    // Step 3: outer() returns the inner function itself (not the result of calling it).
    // Note there are no parentheses after inner, we are handing back the function,
    // not its output.
    return inner
}

// Step 4: outer() runs completely and finishes. Normally, secret would now be
// deleted from memory, because outer()'s job is done and nothing needs it anymore.
// But JS notices that inner still holds a reference to secret, so it keeps
// secret alive instead of deleting it. This kept alive variable, bundled together
// with the function that still needs it, is what a closure is.
const myFn = outer()

// Step 5: myFn is just another name for that same inner function. Calling it here
// happens long after outer() already returned in Step 4.
myFn() // 'hello', proving secret survived even though outer() is gone

// Now is the counter version:
// Step 1: makeCounter() is called. A variable "count" is created inside it, value 0.
function makeCounter() {
    let count = 0

    // Step 2: increment() is defined inside makeCounter(). It reads AND writes
    // count, it does not just look at it, it also changes it.
    function increment() {
        count += 1
        return count
    }

    // Step 3: makeCounter() returns the increment function itself.
    return increment
}

// Step 4: makeCounter() finishes running. Its job is done, but count is not
// deleted, because increment still needs it. count is now closed over, kept
// alive specifically for this one increment function.
const counter = makeCounter()

// Step 5: each call below reuses the SAME count, the one kept alive in Step 4.
// It is not reset to 0 each time, because count was only created once,
// back in Step 1, not once per call.
console.log(counter()) // 1
console.log(counter()) // 2
console.log(counter()) // 3

const counter2 = makeCounter()
console.log(counter2()) // 1, not 4, becuase this is a different closure

const makeCounterArrow = () => { // an arrow function created here
    let count = 0 // it has its own scoped let variable
    return () => ++count; // it returns an arrow function that utilizing foreign variable from the outer function which is the count variable that kept alive due to it got referenced with this function and mutates its value
}
const counter3 = makeCounterArrow(); // makeCounterArrow arrow function called and finish the operation here
console.log(counter3()); // 1
console.log(counter3()); // 2
console.log(counter3()); // 3
// So basically count variable kept alive and got referenced by the arrow function that needs it to runs its operation, and returned

// this inside a regular function versus an arrow function, conceptually
// ===== CASE 1: regular function, called with a dot in front =====
const user = {
    name: 'Naufal',
    greet: function () {
        // this line runs LATER, only when greet() is actually called below.
        // "this" is not decided here at definition time, it is decided
        // by whatever comes before the dot at the call site.
        console.log(this.name)
    }
}

user.greet()
// Look at THIS line right here: user.greet()
// There IS a dot, and the thing before the dot is "user".
// Rule for regular function: this = whatever is before the dot = user
// So this.name = user.name = 'Naufal'


// ===== CASE 2: arrow function, called with a dot in front =====
const user2 = {
    name: 'Naufal',
    greet: () => {
        // this arrow function does not look at how it gets called at all.
        // it looks at where it was WRITTEN, which is right here, at the
        // top level of the file, sitting inside an object literal.
        // "this" at the top level of a normal Node file is not user2,
        // it is an empty/undefined-ish default.
        console.log(this.name)
    }
}

user2.greet()
// Even though there IS a dot here (user2.greet()), it does not matter,
// because arrow functions ignore the call site completely.
// this = whatever "this" was at the spot where greet was WRITTEN above
// = not user2
// So this.name = undefined


// ===== CASE 3: regular function, called WITHOUT a dot in front =====
const user3 = {
    name: 'Naufal',
    greetLater: function () {
        // greetLater itself is a regular function, called as user3.greetLater()
        // below, so INSIDE greetLater, this = user3. Fine so far.

        setTimeout(function () {
            // but THIS inner function is a separate regular function.
            // look at how IT gets called: setTimeout calls it internally,
            // by itself, with no dot, no "something.thisFunction()" pattern.
            // Rule for regular function: this = whatever is before the dot
            // at ITS OWN call site. There is no dot at all here.
            // So this falls back to the default (not user3).
            console.log(this.name)
        }, 100)
    }
}

user3.greetLater()
// this.name inside the setTimeout callback = undefined
// even though the whole thing started from user3.greetLater()


// ===== CASE 4: arrow function, used as the setTimeout callback instead =====
const user4 = {
    name: 'Naufal',
    greetLater: function () {
        // greetLater is a regular function, called as user4.greetLater()
        // below, so INSIDE greetLater, this = user4.

        setTimeout(() => {
            // this arrow function does not care how setTimeout calls it.
            // it looks at where it was WRITTEN: right here, inside greetLater.
            // "this" at that exact spot (inside greetLater's body) is user4,
            // as established one comment above.
            // so this arrow function just copies that same this = user4
            console.log(this.name)
        }, 100)
    }
}

user4.greetLater()
// this.name inside the arrow callback = 'Naufal'

// NOTE: this in regular function vs arrow function
// Regular function: this = whoever is before the dot AT THE CALL SITE (where it's called).
//   No dot at the call site -> this falls back to default (undefined-ish).
// Arrow function: this = whatever this was AT THE SPOT WHERE IT WAS WRITTEN.
//   It never looks at how or where it gets called, only where it's defined.