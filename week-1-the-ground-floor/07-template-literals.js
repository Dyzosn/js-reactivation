const name = 'naufal';
const age = 21;
const word = 'JavaScript';
const arr = [10, 20, 30];
const sentence = 'the quick brown fox';

console.log(`Hello, ${name}!`); // Hello, naufal!
console.log(`${name} is ${age} years old`); // naufal is 21 years old
console.log(`name`); // name
console.log('${name}'); // ${name}

// ${} can contain any expression, meaning anything that evaluates to a single value
// this includes: a variable, a math operation, a ternary, a property access, or a function call
// example1: `${price * quantity}` -> math operation, evaluates to a number
// example2: `${price > 20000 ? 'expensive' : 'cheap'}` -> ternary, evaluates to a string
// example3: `${getPriceLabel(price)}` -> function call, evaluates to whatever the function returns

// ${} cannot contain a statement, meaning something that is an instruction rather than a value
// if, for, const, let cannot go directly inside ${}, because they do not produce a value by themselves
// example4: `${if (price > 20000) {...}}` -> syntax error, if is a statement, not an expression
// to use if-based logic inside ${}, wrap it in a function first, then call that function inside ${}

const price = 25000;
const quantity = 3;

console.log(`Total: ${price * 2}`); // Total: 50000
console.log(`Result: ${price > 20000 ? 'expensive' : 'cheap'}`); // Result: expensive
console.log(`Total: ${price * quantity}`); // Total: 75000
console.log(`Expensive: ${price > 20000}`); // Expensive: true
console.log(`Half price: ${price / 2}`); // Half price: 12500
console.log(`Uppercase name: ${name.toUpperCase()}`); // Uppercase name: NAUFAL
console.log(`Sum: ${1 + 1 + 1}`); // Sum: 3

console.log(`Line A
Line B`);
// Line A
// Line B
console.log(`Line A
Line B` === 'Line A\nLine B'); // true
console.log(`${name}
is ${age}`);
// naufal
// is 21

// concatenation versions (old style using +)
console.log('Word length: ' + word.length);
console.log('Name is ' + name + ' and age is ' + age);
console.log('First item: ' + arr[0]);
console.log('Sentence has ' + sentence.split(' ').length + ' words');
console.log('Uppercase: ' + name.toUpperCase());

// template literal version (modern style using ${})
console.log(`Word length: ${word.length}`); // Word length: 10
console.log(`Name is ${name} and age is ${age}`); // Name is naufal and age is 21
console.log(`First item: ${arr[0]}`); // First item: 10
console.log(`Sentence has ${sentence.split(' ').length} words`); // Sentence has 4 words
console.log(`Uppercase: ${name.toUpperCase()}`); // Uppercase: NAUFAL