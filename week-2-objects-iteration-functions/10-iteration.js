const arr1 = [21, 3, 4, 'juice', 'fellas'];

for (let i = 0; i < arr1.length; i++) {
    console.log(`index: ${i}, value: ${arr1[i]}`);
}

// index: 0, value: 21
// index: 1, value: 3
// index: 2, value: 4
// index: 3, value: juice
// index: 4, value: fellas

for (const value of arr1) {
    console.log(`value: ${value}`);
}
arr1.forEach(function (value) {
    console.log(`value: ${value}`)
});
// value: 21
// value: 3
// value: 4
// value: juice
// value: fellas

const obj1 = {
    artist: 'JuiceWrld',
    title: 'Righteous',
    age: 21,
    isActive: false, 
};

for (const key in obj1) {
    console.log(`key: ${key}, value: ${obj1[key]}`);
}
// key: artist, value: JuiceWrld
// key: title, value: Righteous
// key: age, value: 21
// key: isActive, value: false

for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] === 'string') {
        console.log(`index: ${i}, value: ${arr1[i]} is a string: program stops`);
        break;
    };
}
// index: 3, value: juice is a string: program stops

for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] === 'number') continue;
    console.log(`index: ${i}, value: ${arr1[i]} is a string`);
}
// index: 3, value: juice is a string
// index: 4, value: fellas is a string

// arr1.forEach(function (value) {
//     console.log(value);
//     if (typeof value === 'string') {
//         break;
//     }
// });
// break doesn't work inside .forEach callback because the callback is
// a separate function, not part of the loop structure itself.
// Error: "Jump target cannot cross function boundary"


// Experiment only, not best practice: for...in on an array gives string
// indixes ('0', '1', ...) instead of numbers, and can pick up custom properties that aren't real elements.
// Use for, for...of, or .forEach for arrays instead.
for (const key in arr1) {
  console.log(key, typeof key);
}
// 0 string
// 1 string
// 2 string
// 3 string
// 4 string