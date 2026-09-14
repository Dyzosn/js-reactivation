// 5 paired rewrites using .map

// 1. Double the numbers
const nums = [1, 2, 3, 4, 5];
// transform: multiply each element by 2
const forNums = [];
for (let i = 0; i < nums.length; i++) {
    forNums.push(nums[i] * 2);
}
const mapNums = nums.map((e) => e * 2);

console.log(forNums); // [ 2, 4, 6, 8, 10 ]
console.log(mapNums); // [ 2, 4, 6, 8, 10 ]

// 2. Uppercase the words
const words = ['apple', 'banana', 'cherry'];
// transform: convert each string element into uppercase
const forWords = [];
for (let i = 0; i < words.length; i++) {
    forWords.push(words[i].toUpperCase());
}
const mapWords = words.map((e) => e.toUpperCase());

console.log(forWords); // [ 'APPLE', 'BANANA', 'CHERRY' ]
console.log(mapWords); // [ 'APPLE', 'BANANA', 'CHERRY' ]

// 3. Add tax to prices
const prices = [10, 25, 40];
// transform: Increase the original price by 10% (n + n * 0.1)
const forPrices = [];
for (let i = 0; i < prices.length; i++) {
    forPrices.push(prices[i] + (prices[i] * 0.1));
}
const mapPrices = prices.map((e) => e + (e * 0.1));

console.log(forPrices); // [ 11, 27.5, 44 ]
console.log(mapPrices); // [ 11, 27.5, 44 ]

// 4. Celsius to Fahrenheit
const celsius = [0, 20, 37, 100];
// transform: C to F formula = (c * 9/5) + 32
const forCelcius = [];
for (let i = 0; i < celsius.length; i++) {
    forCelcius.push(Math.round(((celsius[i] * (9/5)) + 32) * 100) / 100)
}
const mapCelcius = celsius.map((e) => Math.round(((e * (9/5)) + 32) * 100) / 100);

console.log(forCelcius); // [ 32, 68, 98.6, 212 ]
console.log(mapCelcius); // [ 32, 68, 98.6, 212 ]

// 5. Length of each word
const animals = ['cat', 'elephant', 'dog', 'giraffe'];
// transform: get the length of each string element (.length)
const forAnimals = [];
for (let i = 0; i < animals.length; i++) {
    forAnimals.push(animals[i].length);
}
const mapAnimals = animals.map((e) => e.length);

console.log(forAnimals); // [ 3, 8, 3, 7 ]
console.log(mapAnimals); // [ 3, 8, 3, 7 ]

// Comments:
// for number 1-5:
// The differents are the effective line utilization (Compact and straightforward),
// the initial empty array declaration can be shorten, no need to manage complex index of iterations manually,
// and obviously the map one more vivid and easy to comprehend.
// for number 5:
// map method return any data type regardless was the input data type

// map over an array of objects, extracting one property
const products = [
    {id: 21, name: 'Soap', category: 'Toiletries'},
    {id: 12, name: 'Toothpaste', category: 'Toiletries'},
    {id: 122, name: 'Mouse', category: 'Electronic'},
];

const categories = products.map((e) => e.category);
console.log(categories); // [ 'Toiletries', 'Toiletries', 'Electronic' ]