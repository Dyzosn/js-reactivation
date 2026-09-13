// Week 2 checkpoint, no reference, no lookup

// 1. Build an object representing a product: name, price, and a nested object
//    for stock, containing quantity and location
const product = {
    name: 'unaffordable banana',
    price: 67,
    stockDetail: {
        quantity: 7,
        location: 'Sydney',
    },
};
// 2. Access the price using dot notation, and the stock quantity using bracket notation
console.log(product.price); // 67
console.log(product['stockDetail']['quantity']); // 7
// 3. Add a new property (discount), then update the price, then delete the discount property
product.discount = 0.1; // 10% discount
product.price = 69;
console.log(product); // { name: 'unaffordable banana', price: 69, stockDetail: { quantity: 7, 'Sydney }, discount: 0.1 }
delete product.discount;
console.log(product); // { name: 'unaffordable banana', price: 69, stockDetail: { quantity: 7, 'Sydney } } 
// 4. Loop over the top-level object using Object.entries with destructuring,
//    printing each key and value
for (const [key, value] of Object.entries(product)) {
    console.log(`key: ${key}, value: ${value}`);
}
// key: name, value: unaffordable banana
// key: price, value: 69
// key: stockDetail, value: { quantity: 7, location: 'Sydney }

// 5. Build a frequency counter object: count how many times each letter appears
//    in a word of your choosing
const word = 'Naufal is so cool';
const splittedJoinedWord = word.split(' ').join(''); // Naufalissocool
const freq = {};

for (const char of splittedJoinedWord) {
    if (!freq[char]) {
        freq[char] = 1;
    } else {
        freq[char]++;
    }
}
console.log(freq); // { N: 1, a: 2, u: 1, f: 1, l: 2, i: 1, s: 2, o: 3, c: 1 }

// 6. Find the key with the highest value in that frequency object
let highestKeyCount = Object.values(freq)[0];
let highestKey = Object.keys(freq)[0];
for (const key in freq) {
    if (freq[key] > highestKeyCount) {
        highestKeyCount = freq[key];
        highestKey = key;
    }
}
console.log(`The highest valued key is ${highestKey} with quantity of ${highestKeyCount}`);
// The highest valued key is o with quantity of 3

// 7. Write a function that takes another function as a callback, and calls the
//    callback with the frequency object's max letter as its argument
function reportMaxLetter(letter, callback) {
    return callback(letter);
}

function externalMaxLetter(letter) {
    return `Max letter is ${letter}`;
}

// 8. Print the final result using a template literal
console.log(reportMaxLetter(highestKey, (letter) => {
    return `Max letter is ${letter}`;
}));

console.log(reportMaxLetter(highestKey, externalMaxLetter));
