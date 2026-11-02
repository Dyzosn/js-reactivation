// Warm-up: rewrite from blank, no looking at old code.

// Step 1: total of numbers (expected: 20)
const amounts = [7, 3, 10];

// loop version
let total = 0;
for (const number of amounts) {
    total += number;
}
console.log(total);

// reduce version
console.log(amounts.reduce((acc, number) => acc + number, 0));

// Step 2: count each letter of a string (expected: { b: 1, a: 3, n: 2 })
const word = 'banana';

// split the string into an array of letters
const splitWord = word.split('');

// loop version
const wordCounter = {};
for (const c of splitWord) {
    if (wordCounter[c] == undefined) {
        wordCounter[c] = 1;
    } else {
        wordCounter[c]++;
    }
}
console.log(wordCounter);

// reduce version
console.log(splitWord.reduce((acc, c) => {
    acc[c] == undefined ? acc[c] = 1 : acc[c]++;
    return acc;
}, {}));