// Week 1 checkpoint, no reference, no lookup

// 1. create an array of 5 fruit names of your own choosing
const arr = ['apple', 'melon', 'banana', 'grape', 'orange'];
// 2. modify it: push one more fruit, then remove the first one
arr.push('watermelon'); // 6
arr.shift(); // 'apple'
// 3. search it: check if 'mango' is included, and find the index of one fruit
console.log(arr.includes('mango')); // false
console.log(arr.indexOf('melon')); // 0
// 4. sort the array alphabetically
arr.sort((a, b) => a.localeCompare(b)); 
console.log(arr); // arr's order mutated into [ 'banana', 'grape', 'melon', 'orange', 'watermelon' ]
// 5. take the first word after sorting, uppercase it
const upperCaseFirstWord = arr[0].toUpperCase(); // BANANA
// 6. reverse that word using split/reverse/join
const reversedupperCaseFirstWord = upperCaseFirstWord.split('').reverse().join(''); // ANANAB
// 7. print the result using a template literal: "First word reversed: <result>"
console.log(`First word reversed: ${reversedupperCaseFirstWord}`); // First word reversed: ANANAB