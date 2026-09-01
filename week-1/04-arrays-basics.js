const arr1 = [1, 2, 3];

console.log(arr1.push(4));      // arr is now [1, 2, 3, 4] returns 4 (array length after got added)
console.log(arr1.pop());         // arr is now [1, 2, 3] — pop() returns 4
console.log(arr1.unshift(0));    // arr is now [0, 1, 2, 3] returns 4 (array length after got added)
console.log(arr1.shift());        // arr is now [1, 2, 3] — shift() returns 0

const arr2 = ['a', 'b', 'c', 'd'];

console.log(arr2.indexOf('c')); // 2
console.log(arr2.indexOf('z')); // -1
console.log(arr2.includes('b')); // true
console.log(arr2.includes('z')); // false
console.log(arr2.at(-1)); // d
console.log(arr2[-1]); // undefined

const arr3 = ['a', 'b', 'c', 'd', 'e'];

console.log(arr3.slice(1, 3));   // what does this return? an array with two elements within it: [ 'b', 'c' ]
console.log(arr3);               // is arr changed after slice? no, it's just making a clone from the referenced array

console.log(arr3.splice(1, 2));  // what does this return? it returns a new array with deleted elements from the referenced array: [ 'b', 'c' ]
console.log(arr3);               // is arr changed after splice? the referenced array got mutated: [ 'a', 'd', 'e' ]

const arr4 = ['a', 'b', 'c', 'd', 'e'];

console.log(arr4.splice(1, 2, 'X', 'Y', 'Z')); // this returns [ 'b', 'c' ]
console.log(arr4); // this returns [ 'a', 'X', 'Y', 'Z', 'd', 'e' ]

const arr5 = ['a', 'b', 'c'];
console.log(arr5.splice(1, 0, 'NEW')); // this returns [], an empty array due to not deleting anything
console.log(arr5); // this returns [ 'a', 'NEW', 'b', 'c' ]

const a = [1, 2];
const b = [3, 4];

console.log(a.concat(b)); // this returns a new array: [ 1, 2, 3, 4 ]
console.log(a); // not changed due to concat method just copies referenced array, so it returns: [ 1, 2 ]

// Note: Array.toString() defaults to the same behavior as join(',') or even just join()
// This is why [1, 2, 3] + '' becomes '1,2,3', and [1,2,3] + 10 becomes '1,2,310'
console.log(a.join('-')); // this returns a new string with specified seperator: '1-2'
console.log(a.join()); // same, but with the default separator value, which is a comma: '1,2'

console.log(a.reverse()); // mutating the referenced array, and turned into and returns: [ 2, 1 ]
console.log(a); // [ 2, 1 ]

const arr6 = [1, 2, 3];
console.log(arr6[10]); // it returns: undefined
// console.log(arr6[10].toString()); // it would be an error because the undefined data type not have any properties or methods to be called, and null data type also like this