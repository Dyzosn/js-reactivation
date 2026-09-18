// 5 paired rewrites using .filter

// From an array of numbers, keep only the even ones
const numbersOne = [4, 7, 10, 13, 16, 21, 24, 30];
const numbersOneLoop = [];
for (let i = 0; i < numbersOne.length; i++) {
    if (numbersOne[i] % 2 === 0) numbersOneLoop.push(numbersOne[i]);
}
console.log(numbersOneLoop);

const numbersOneFilter = numbersOne.filter((e) => e % 2 === 0);
console.log(numbersOneFilter);

// From an array of strings, keep only the ones longer than 4 characters
const words = ['cat', 'planet', 'sun', 'garden', 'sky', 'mountain'];
const wordsLoop = []; 
for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) wordsLoop.push(words[i]);
}
console.log(wordsLoop);

const wordsFilter = words.filter((e) => e.length > 4);
console.log(wordsFilter);

// From an array of objects { name, age }, keep only the ones where age >= 18
const people = [
  { name: 'Alex', age: 16 },
  { name: 'Bianca', age: 22 },
  { name: 'Cole', age: 17 },
  { name: 'Dara', age: 19 },
  { name: 'Evan', age: 25 },
];
const peopleLoop = [];
for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 18) peopleLoop.push(people[i]);
}
console.log(peopleLoop);

const peopleFilter = people.filter((e) => e.age >= 18);
console.log(peopleFilter);

// From an array of numbers, keep only the positive ones
const numbersTwo = [-8, 3, -1, 0, 5, -12, 7];
const numbersTwoLoop = [];
for (let i = 0; i < numbersTwo.length; i++) {
    if (numbersTwo[i] > 0) numbersTwoLoop.push(numbersTwo[i]);
}
console.log(numbersTwoLoop);

const numbersTwoFilter = numbersTwo.filter((e) => e > 0);
console.log(numbersTwoFilter);

// From an array of strings, keep only the ones that start with a specific letter
const cities = ['Melbourne', 'Sydney', 'Manila', 'Auckland', 'Madrid', 'Tokyo'];
const citiesLoop = [];
for (let i = 0; i < cities.length; i++) {
    if (cities[i].toLowerCase().startsWith('m')) citiesLoop.push(cities[i]);
}
console.log(citiesLoop);

const citiesFilter = cities.filter((e) => e.toLowerCase().startsWith('m'));
console.log(citiesFilter);

// Comments:
// Overall the different from both methods, the for loop method is more ineffective,
// too many steps and need an initial empty array declaration for preparation and push it through loop
// one by one. On the other hand, the filter method more easier and straightforward to be implemented,
// using callback function to return the condition of true/false for the decision of keeping the element
// that pass the condition and create a new array for them.

// find versus filter — one returns an item, one returns an array
const products = [
  { name: 'Keyboard', price: 45 },
  { name: 'Monitor', price: 220 },
  { name: 'Mouse', price: 15 },
  { name: 'Webcam', price: 60 },
  { name: 'Headset', price: 35 },
];
const findEqualAndOver50 = products.find((e) => e.price >= 50);
const filterEqualAndOver50 = products.filter((e) => e.price >= 50);
const findEqualAndOver1000 = products.find((e) => e.price >= 1000);
const filterEqualAndOver1000 = products.filter((e) => e.price >= 1000);
console.log(findEqualAndOver50); // { name: 'Monitor', price: 220 }
console.log(filterEqualAndOver50); // [ { name: 'Monitor', price: 220 }, { name: 'Webcam', price: 60 } ]
console.log(Array.isArray(findEqualAndOver50)); // false
console.log(Array.isArray(filterEqualAndOver50)); // true
console.log(findEqualAndOver1000); // undefined
console.log(filterEqualAndOver1000); // []
// Comment: 
// So overall, find method more appropriate if we only need 1 return of an element 
// and not a bulk of them or an array like filter method did.

// some and every on the same data — compare the answers
const orders = [
  { id: 1, status: 'shipped' },
  { id: 2, status: 'pending' },
  { id: 3, status: 'shipped' },
  { id: 4, status: 'delivered' },
];
const isSomePendingOrder = orders.some((e) => e.status === 'pending');
const isEveryOrderShipped = orders.every((e) => e.status === 'shipped');
console.log(isSomePendingOrder); // true
console.log(isEveryOrderShipped); // false
const isEveryOrderHasNumberId = orders.every((e) => typeof e.id === 'number');
console.log(isEveryOrderHasNumberId); // true
const emptyArray = [];
console.log(emptyArray.some((e) => e != e)); // false
console.log(emptyArray.every((e) => e != e)); // true
// Comment: 
// So use some method for checking several element if they are pass the condition,
// such as, checking if some of collection elements in an array status already start or not,
// like specifically, a bulk of tasks will be labelled running in progress if some of them are already has a started status.
// On the other hand, use every for checking condition of whole elements, like checking form fields already filled all or not.

// Chain .filter().map() on 2 tasks
// Task A:
const employees = [
  { name: 'Farah', department: 'Engineering', salary: 85000 },
  { name: 'Guntur', department: 'Sales', salary: 60000 },
  { name: 'Hana', department: 'Engineering', salary: 95000 },
  { name: 'Ivan', department: 'Marketing', salary: 55000 },
];
const employeesResult = employees.filter((e) => e.department === 'Engineering').map((e) => e.name);
console.log(employeesResult); // [ 'Farah', 'Hana' ]

// Task B:
const scores = [45, 78, 92, 30, 88, 55, 100];
const scoresResult = scores.filter((e) => e >= 60).map((e) => `${e} - Pass`);
console.log(scoresResult); // [ '78 - Pass', '92 - Pass', '88 - Pass', '100 - Pass' ]

// Comment:
// Always use the procedural processing method: filter first then operates it using map from the filter result.
// Because if inverted, maybe some of elements are missing after got mapped and causing an undefined.