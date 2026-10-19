// Item 1: 5 paired rewrites using .reduce.
// Pattern: imperative loop first, then rewrite with .reduce, then one comparison sentence.

// Rewrite 1: total of numbers (expected: 45)
const prices = [12, 5, 8, 20];

// loop version
let total1 = 0;
for (const price of prices) {
    total1 += price;
}
console.log(total1);

// reduce version
console.log(prices.reduce((acc, price) => acc + price, 0));

// Comparison:
// Loop version seems more procedurally approach,
// while the reduce version more compact 
// especially for this straightforward of purpose

// Rewrite 2: total of price * qty across objects (expected: 82)
const cart = [
    { name: 'pen', price: 3, qty: 4 },
    { name: 'book', price: 15, qty: 2 },
    { name: 'bag', price: 40, qty: 1 },
];

// loop version
let total2 = 0;
for (const item of cart) {
    total2 += item.price * item.qty;
}
console.log(total2);

// reduce version
console.log(cart.reduce((acc, item) => acc + (item.price * item.qty), 0));

// Comparison:
// Similarly like rewrite 1, loop version more vivid to
// comprehend the separation of result variable and process
// than the reduce version, but reduce version more straightforward
// without any additional external variable involved

// Rewrite 3: count students who passed, score >= 60 (expected: 3)
const students = [
    { name: 'Rani', score: 72 },
    { name: 'Doni', score: 48 },
    { name: 'Sari', score: 90 },
    { name: 'Joko', score: 55 },
    { name: 'Mira', score: 60 },
];

// loop version
let passedCount = 0;
for (const student of students) {
    if (student.score >= 60) {
        passedCount++;
    }
}
console.log(passedCount);

// reduce version
console.log(students.reduce((acc, student) => {
    if (student.score >= 60) acc++;
    return acc;
}, 0));

// Comparison:
// Similar like beforehand, loop more easy to implement
// and reduce more compact, no extra external variable needed.

// Rewrite 4: build the initials of all names as one string (expected: 'NBC')
const names = ['Naufal', 'Budi', 'Citra'];

// loop version
let initialChars = '';
for (const name of names) {
    initialChars += name[0];
}
console.log(initialChars);

// reduce version
console.log(names.reduce((acc, n) => acc += n[0], ''));

// Comparison:
// Same like before, loop more transparent of process,
// while reduce more compact

// Rewrite 5: collect the names of items with qty >= 2 (expected: [ 'pen', 'book' ])
// Uses the cart from Rewrite 2.

// loop version
const overTwo = [];
for (const item of cart) {
    if (item.qty >= 2) overTwo.push(item.name);
}
console.log(overTwo);

// reduce version
console.log(cart.reduce((acc, item) => {
    if (item.qty >= 2) acc.push(item.name);
    return acc;
}, []));

// Comparison:
// Reduce more concise and straight forward approach for this context
// than the chaining filter and map method, they both have different process but same result,
// but I think reduce version more simple, but for more complex objective,
// I still more prefer chaining version because of its obvious process

// Item 2: Sum and maximum with reduce.
// Sum is already covered in Rewrite 1 and 2, so this item adds maximum.

const positives = [12, 5, 8, 20];
const negatives = [-5, -2, -9];

// Maximum with initial value 0
// reduce on positives (expected: 20)
console.log(positives.reduce((acc, n) => {
    if (n > acc) return n;
    return acc;
}, 0));
// reduce on negatives
console.log(negatives.reduce((acc, n) => {
    if (n > acc) return n;
    return acc;
}, 0)); // 0

// Maximum with initial value -Infinity
// reduce on positives (expected: 20)
console.log(positives.reduce((acc, n) => {
    if (n > acc) return n;
    return acc;
}, -Infinity));
// reduce on negatives (expected: -2)
console.log(negatives.reduce((acc, n) => {
    if (n > acc) return n;
    return acc;
}, -Infinity));

// Maximum with the first element as the initial value
// reduce on positives with positives[0]
console.log(positives.reduce((acc, n) => {
    if (n > acc) return n;
    return acc;
}, positives[0]));
// reduce on negatives with negatives[0]
console.log(negatives.reduce((acc, n) => {
    if (n > acc) return n;
    return acc;
}, negatives[0]));

// Comparison:
// Overall for the whole case uses -Infinity is more safe,
// because if use 0 and all the provided elements are negatives, 
// the initial value always beats them and become the result

// Item 2 (continued): reduce without an initial value.

// Maximum without an initial value
// reduce on positives (expected: 20)
console.log(positives.reduce((acc, n) => {
    console.log('called', acc, n)
    if (n > acc) return n;
    return acc;
}));
// reduce on negatives (expected: -2)
console.log(negatives.reduce((acc, n) => {
    if (n > acc) return n;
    return acc;
}));

// Callback call count without an initial value
// Question: positives has 4 elements. How many times does the callback run? 
// Prediction (a number, written BEFORE running): 3

// One-element array without an initial value
// Question: for [7], will 'called' be printed, and what is the final result?
// Prediction (written BEFORE running): no because theres no theres no process opportunity left,
// because only one element exists, so it become the accumulator and supposed to be process start
// from index 1, but there's only index 0 exists alias nothing process occurs after that. And the
// the result is 7.
console.log([7].reduce((acc, n) => {
    console.log('called')
    return acc;
}));

// Comparison:
// one sentence: Normally I suggest that initial value always initiated to prevent 
// any mismatch of data type or anything that triggers an error. For example, the 
// array are consist of some objects, and the reduce processes it for produce a
// number value, you cant just compare an object of the first element if the case
// is without an initial value with a number, this can occuring a data type mismatch.
// Also, an empty array without an initial value throws a TypeError, so the initial value is the safe default.

// Empty array
// Question: what does [].reduce return WITH an initial value of 0, and WITHOUT one?
// Prediction (written BEFORE running): 0 and error

// With an initial value: the callback never runs, so the result is the initial value.
console.log([].reduce((acc, n) => acc + n, 0));

// Without an initial value: throws TypeError, so it stays commented out.
// console.log([].reduce((acc, n) => acc + n));