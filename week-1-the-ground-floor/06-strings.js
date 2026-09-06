const word = 'JavaScript';

console.log(word.length); // 10
console.log(word.charAt(0)); // 'J'
console.log(word[0]); // 'J'
console.log(word.at(0)); // 'J'
console.log(word.at(-1)); // 't'
console.log(word.charAt(20)); // ''
console.log(word[20]); // undefined
console.log(word.at(20)); // undefined

const messy = '  Hello World  ';

console.log(messy.toUpperCase()); // '  HELLO WORLD  '
console.log(messy.toLowerCase()); // '  hello world  '
console.log(messy.trim()); // 'Hello World'
console.log(messy); // '  Hello World  '
console.log(messy.trim().length); // 11
console.log(messy.length); // 15

const sentence = 'the quick brown fox';

console.log(sentence.split(' ')); // [ 'the', 'quick', 'brown', 'fox' ]
console.log(sentence.split(' ').join('-')); // 'the-quick-brown-fox'
console.log('hello'.split('')); // [ 'h', 'e', 'l', 'l', 'o' ]
console.log(sentence.split()); // [ 'the quick brown fox' ]
console.log(['a', 'b', 'c'].join()); // 'a,b,c'
console.log(['a', 'b', 'c'].join('')); // 'abc'

// split() belongs to String, because what gets split is a string, and the result is an array
// join() belongs to Array, because what gets joined is an array, and the result is a string

// the method attaches to the type that starts the operation (the caller), not the type of the output
// example: 'a,b,c'.split(',') -> caller is a string, so split lives on String, output is an array
// example: ['a','b','c'].join(',') -> caller is an array, so join lives on Array, output is a string

const phrase = 'JavaScript is fun';

console.log(phrase.slice(0, 4)); // 'Java'
console.log(phrase.slice(-3)); // 'fun'
console.log(phrase.substring(0, 4)); // 'Java'
console.log(phrase.substring(4, 0)); // 'Java', due to start > end, both need to swap first then execute with the normal mechanism
console.log(phrase.slice(4, 0)); // '', because in slice rules, start > end would not applicable so it returns '' 
console.log(phrase.indexOf('is')); // 11
console.log(phrase.indexOf('xyz')); // -1
console.log(phrase.includes('fun')); // true
console.log(phrase.startsWith('Java')); // true
console.log(phrase.endsWith('fun')); // true

const text = 'cat sat on the mat'

console.log(text.replace('at', 'XX')); // 'cXX sat on the mat'
console.log(text.replaceAll('at', 'XX')); // 'cXX sXX on the mXX'
console.log(text.replace('dog', 'XX')); // 'cat sat on the mat'
console.log(text); // 'cat sat on the mat' string has immutability

const str = 'hello';

str[0] = 'H'; // try to force-change the first character, and it would be a silent fail
console.log(str); // 'hello'

// compare with array;
const arr = ['h', 'e', 'l', 'l', 'o'];
arr[0] = 'H';
console.log(arr); // [ 'H', 'e', 'l', 'l', 'o' ]