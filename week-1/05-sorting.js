const nums1 = [10, 9, 100, 1];
console.log(nums1.sort()); // [ 1, 10, 100, 9 ] it's because the default behavior of the sort function/method is convert the array elements into string first then used dictionary ordering terms

const nums2 = [10, 9, 100, 1];
console.log(nums2.sort((a, b) => a - b)); // ascending order: [ 1, 9, 10, 100 ]

const nums3 = [10, 9, 100, 1];
console.log(nums3.sort((a, b) => b - a)); // descending order: [ 100, 10, 9, 1 ]

// (a, b) comparator rule: if the result is negative, a first. Conversely, if the result is positive, b first. If result 0, the position keeps still the same.
// ascending formula => a - b
// example1: comparing a = 1, b = 10 would be a - b = 1 - 10 = -9 (negative), so in the order is a first then b: 1, 10
// example2: comparing a = 10, b = 1 would be a - b = 10 - 1 = 9 (positive), so in the order is b first then a: 1, 10

// descending formula => b - a
// example1: comparing a = 1, b = 10 would be b - a = 10 - 1 = 9 (positive), so in the order is b first then a: 10, 1
// example2: comparing a = 10, b = 1 would be b - a = 1 - 10 = -9 (negative), so in the order is a first then b: 10, 1

const words = ['banana', 'Apple', 'cherry', 'Blueberry'];
console.log(words.sort()); // [ 'Apple', 'Blueberry', 'banana', 'cherry' ]

const words2 = ['banana', 'Apple', 'cherry', 'Blueberry'];
console.log(words2.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))); // [ 'Apple', 'banana', 'Blueberry', 'cherry' ]

// string sorting notes:
// default sort() on strings compares alphabetically, but capital letters have a
// smaller character code than lowercase letters. any capital wins over any lowercase,
// even if that contradicts real alphabet order. example: 'Banana' beats 'apple' even
// though 'a' comes before 'b' alphabetically

// to make it case-insensitive, lowercase both sides before comparing, using toLowerCase()
// this does not change the original array elements, toLowerCase() only makes a
// temporary copy used for the comparison. only the array's element positions change,
// not the values themselves

// ascending, case-insensitive: a.toLowerCase().localeCompare(b.toLowerCase())
// descending, case-insensitive: b.toLowerCase().localeCompare(a.toLowerCase())
// same left/right rule as a - b vs b - a. the caller on the left wins when the result is negative

// localeCompare(x, y) is string's version of subtraction for comparison.
// negative means x before y, positive means x after y, zero means equal.
// needed because strings can't use the "-" operator like numbers can

const people = [
    { name: 'Charlie', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 20 },
];

console.log(people.sort((a, b) => a.age - b.age)); // [ { name: 'Bob', age: 20 }, { name: 'Charlie', age: 25 }, { name: 'Alice', age: 30 } ]
console.log(people.sort((a, b) => a.name.localeCompare(b.name))); // [ { name: 'Alice', age: 30 }, { name: 'Bob', age: 20 }, { name: 'Charlie', age: 25 } ]

const original = [3, 1, 2];
const sortedCopy = [...original].sort((a, b) => a - b);

console.log(sortedCopy); // [ 1, 2, 3 ]
console.log(original); // [ 3, 1, 2 ]