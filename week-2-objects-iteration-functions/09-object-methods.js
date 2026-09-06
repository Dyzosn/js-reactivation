const order = {
    id: 21,
    accountId: 'a21',
    address: 'Sydney',
    items: {
        i123: 2,
        i232: 3,
        i332: 1,
    },
};

console.log(Object.keys(order)); // [ 'id', 'accountId', 'address', 'items' ]
console.log(Object.values(order)); // [ 21, 'a21', 'Sydney', { i123: 2, i232: 3, i332: 1 } ]
console.log(Object.entries(order)); // [ [ 'id', 21 ], [ 'accountId', 'a21' ], [ 'address', 'Sydney' ], [ 'items', { i123: 2, i232: 3, i332: 1 } ] ] 

const pair = ['id', 21];
const [key, value] = pair;
// key = 'id', value = 21

for (const [key, value] of Object.entries(order)) {
    console.log(`${key}: ${value}`);
};
// id: 21
// accountId: a21
// address: Sydney
// Items: { i123: 2, i232: 3, i332: 1 }, actual: [object Object]

const cars = [ 'toyota', 'subaru', 'bmw', 'tesla', 'suzuki', 'ferrari', 'toyota', 'bmw', 'bmw', 'subaru', 'tesla', 'toyota' ];
const carCounts = {};

for (const car of cars) {
    if (carCounts[car] === undefined) {
        carCounts[car] = 1;
    } else {
        carCounts[car]++;
    }
}

console.log(carCounts); // { toyota: 3, subaru: 2, bmw: 3, tesla: 2, suzuki: 1, ferrari: 1 }

const carEntries = Object.entries(carCounts);
let mostCountedCar = carEntries[0][0];
let highestCount = carEntries[0][1];

for (const [key, value] of carEntries) {
    if (value > highestCount) {
        highestCount = value;
        mostCountedCar = key;
    };
};

console.log(mostCountedCar); // toyota
console.log(Object.fromEntries(carEntries)); // { toyota: 3, subaru: 2, bmw: 3, tesla: 2, suzuki: 1, ferrari: 1 }